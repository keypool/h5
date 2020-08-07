const {spawn} = require('child_process');
let reBuilding = false;
let reBuildCode = 0;
let reBuildData = '';

const cmdStr = 'cd ./public/home && npm install --registry=https://registry.npm.taobao.org/ && npm run export-cb';
// const cmdStr = 'cd ../home && npm install && npm run export-cb';

const reBuildHome = () => {
  console.log(reBuilding);
  if(reBuilding){
    // return new Promise((resolve) => {
    //   const interval = setInterval(() => {
    //     if(!reBuilding){
    //       clearInterval(interval);
    //       if(reBuildCode !== 0){
    //         resolve({success: false, code: reBuildCode, error: '异常退出'});
    //       }
    //       resolve({success: true, code: reBuildCode});
    //     }
    //   }, 5000);
    // })
  }else{
    reBuilding = true;
    reBuildData = '';
    const reBuildHomeSpawn = spawn(cmdStr, [], {shell: true});
    return new Promise((resolve) => {
      reBuildHomeSpawn.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        reBuildData += data.toString();
      });
    
      reBuildHomeSpawn.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });
      
      reBuildHomeSpawn.on('close', (code) => {
        console.log(`子进程退出，退出码 ${code}`);
        reBuildCode = code;
        reBuilding = false;
        // if(code !== 0){
        //   resolve({success: false, code, error: '异常退出'});
        // }
        // resolve({success: true, code});
      });
    })
  }
}

const getReBuildHomeStatus = () => {
  return {success: true, reBuilding, reBuildCode, reBuildData};
}

module.exports = {
  reBuildHome,
  getReBuildHomeStatus
}