import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import THREE from '@/lib/three';
import {PATH_PREFIX} from '@/env';
import clsx from 'clsx';
// import { OrbitControls } from '@/lib/three/examples/jsm/controls/OrbitControls';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "@global": {
    ".label": {
      color: '#FFF',
      fontFamily: 'sans-serif',
      padding: '2px',
      background: 'rgba( 0, 0, 0, .6 )'
    }
  }
}));

export default ({className, positionX = 0, positionY = 0, positionZ = 700}: any) => { 
  const classes = useStyles();
  const ref = React.createRef<any>();

  React.useEffect(() => {
    // let camera: any, scene: any, renderer: any, labelRenderer: any;
    let renderer: any, scene: any, camera: any;
    let particles: any;
    let PARTICLE_SIZE = 20;
    const container = ref.current!;

    let raycaster: any, intersects;
    let mouse: any, INTERSECTED: any;

    const init = () => {

      camera = new THREE.PerspectiveCamera( 45, container.clientWidth / container.clientHeight, 1, 10000 );
      camera.position.set( positionX, positionY, positionZ );
      // camera.position.z = 400;
      // camera.position.y = -150;
      scene = new THREE.Scene();

      var vertices = new THREE.BoxGeometry( 200, 200, 200, 16, 16, 16 ).vertices;

      var positions = new Float32Array( vertices.length * 3 );
      var colors = new Float32Array( vertices.length * 3 );
      var sizes = new Float32Array( vertices.length );

      var vertex;
      var color = new THREE.Color();

      for ( var i = 0, l = vertices.length; i < l; i ++ ) {

        vertex = vertices[ i ];
        vertex.toArray( positions, i * 3 );

        color.setHSL( 0.6 + 0.1 * ( i / l ), 0.75, 0.5 );
        color.toArray( colors, i * 3 );

        sizes[ i ] = PARTICLE_SIZE * 0.5;

      }

      var geometry = new THREE.BufferGeometry();
      geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
      geometry.setAttribute( 'customColor', new THREE.BufferAttribute( colors, 3 ) );
      geometry.setAttribute( 'size', new THREE.BufferAttribute( sizes, 1 ) );

      //
      const vertexshaderGLSL = `
        attribute float size;
        attribute vec3 customColor;

        varying vec3 vColor;

        void main() {

          vColor = customColor;

          vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );

          gl_PointSize = size * ( 300.0 / -mvPosition.z );

          gl_Position = projectionMatrix * mvPosition;

        }
      `;
      const fragmentshaderGLSL = `
        uniform vec3 color;
        uniform sampler2D pointTexture;

        varying vec3 vColor;

        void main() {

          gl_FragColor = vec4( color * vColor, 1.0 );

          gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );

          if ( gl_FragColor.a < ALPHATEST ) discard;

        }
      `;

      var material = new THREE.ShaderMaterial( {

        uniforms: {
          color: { value: new THREE.Color( 0xffffff ) },
          pointTexture: { value: new THREE.TextureLoader().load( PATH_PREFIX+"/static/three/textures/sprites/disc.png" ) }
        },
        vertexShader: vertexshaderGLSL,
        fragmentShader: fragmentshaderGLSL,

        alphaTest: 0.9

      } );

      particles = new THREE.Points( geometry, material );
      scene.add( particles );

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio( container.devicePixelRatio );
      renderer.setSize( container.clientWidth, container.clientHeight );
      container.appendChild( renderer.domElement );

      // var controls = new OrbitControls( camera, renderer.domElement );
      // controls.minDistance = 5;
      // controls.maxDistance = 10000;

      raycaster = new THREE.Raycaster();
      mouse = new THREE.Vector2();

      // stats = Stats();
      // container.appendChild( stats.dom );

      window.addEventListener( 'resize', onWindowResize, false );
      document.addEventListener( 'mousemove', onDocumentMouseMove, false );

    }

    const onDocumentMouseMove = ( event: any ) => {

      event.preventDefault();

      mouse.x = ( event.clientX / container.clientWidth ) * 2 - 1;
      mouse.y = - ( event.clientY / container.clientHeight ) * 2 + 1;

    }

    const onWindowResize = () => {

      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();

      renderer.setSize( container.clientWidth, container.clientHeight );

    }

    const animate = () => {

      requestAnimationFrame( animate );

      render();
      // stats.update();

    }

    const render = () => {

      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.001;

      var geometry = particles.geometry;
      var attributes = geometry.attributes;

      raycaster.setFromCamera( mouse, camera );

      intersects = raycaster.intersectObject( particles );

      if ( intersects.length > 0 ) {

        if ( INTERSECTED != intersects[ 0 ].index ) {

          attributes.size.array[ INTERSECTED ] = PARTICLE_SIZE;

          INTERSECTED = intersects[ 0 ].index;

          attributes.size.array[ INTERSECTED ] = PARTICLE_SIZE * 1.25;
          attributes.size.needsUpdate = true;

        }

      } else if ( INTERSECTED !== null ) {

        attributes.size.array[ INTERSECTED ] = PARTICLE_SIZE;
        attributes.size.needsUpdate = true;
        INTERSECTED = null;

      }
      renderer.render( scene, camera );
    }

    init();
    animate();
  }, []);

  return (
    <div className={clsx(classes.root, className)} ref={ref}/>
  )
}