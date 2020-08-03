import React from 'react';

const data = [{
  name: '谷歌',
  img: '/home/static/images/picture/new-sem-img4.jpg',
},{
  name: '360搜索',
  img: '/home/static/images/picture/new-sem-img5.jpg',
},{
  name: '搜狗搜索',
  img: '/home/static/images/picture/new-sem-img6.jpg',
},{
  name: '必应',
  img: '/home/static/images/picture/new-sem-img7.jpg',
},{
  name: '神马',
  img: '/home/static/images/picture/new-sem-img8.jpg',
}]

export default () => {
  return (
    <div className="tent7">
      <div className="col_title">我们的伙伴</div>
      <h3 className="new-index-piece-title2 new-index-piece-title">感谢一路有你们</h3>
      <div className="w1200">
        <ul className="partner">
          {
            data.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item.img} alt={item.name}/>
                  <p>{item.name}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}