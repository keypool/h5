import React from 'react';

const data = [{
  name: '栖巢咖啡',
  img1: '/home/static/images/partner/001.png',
  img2: '/home/static/images/partner/001-1.png',
},{
  name: '安徽农金',
  img1: '/home/static/images/partner/002.png',
  img2: '/home/static/images/partner/002-1.png',
},{
  name: '中酒连锁',
  img1: '/home/static/images/partner/003.png',
  img2: '/home/static/images/partner/003-1.png',
},{
  name: '普华科技',
  img1: '/home/static/images/partner/004.png',
  img2: '/home/static/images/partner/004-1.png',
},{
  name: '城建设计院',
  img1: '/home/static/images/partner/005.png',
  img2: '/home/static/images/partner/005-1.png',
},{
  name: '七禾田集团',
  img1: '/home/static/images/partner/006.png',
  img2: '/home/static/images/partner/006-1.png',
},{
  name: '美巢装饰',
  img1: '/home/static/images/partner/007.png',
  img2: '/home/static/images/partner/007-1.png',
},{
  name: '蚂蚁乐居',
  img1: '/home/static/images/partner/008.png',
  img2: '/home/static/images/partner/008-1.png',
},{
  name: '美菱生物医疗',
  img1: '/home/static/images/partner/009.png',
  img2: '/home/static/images/partner/009-1.png',
},{
  name: '百丽橱柜',
  img1: '/home/static/images/partner/010.png',
  img2: '/home/static/images/partner/010-1.png',
},{
  name: '大源集团',
  img1: '/home/static/images/partner/011.png',
  img2: '/home/static/images/partner/011-1.png',
},{
  name: '格美电器',
  img1: '/home/static/images/partner/012.png',
  img2: '/home/static/images/partner/012-1.png',
},{
  name: '骨味坊',
  img1: '/home/static/images/partner/013.png',
  img2: '/home/static/images/partner/013-1.png',
},{
  name: '六安图书馆',
  img1: '/home/static/images/partner/014.png',
  img2: '/home/static/images/partner/014-1.png',
},{
  name: '名流健康集团',
  img1: '/home/static/images/partner/015.png',
  img2: '/home/static/images/partner/015-1.png',
}]

export default () => {
  return (
    <div className="tent3">
      <div className="pagePartner">
        <div className="title wow fadeInUp" data-wow-offset="10" data-wow-delay="0.1s">
          <p>天蕾与客户共成长</p>
          没有短暂的客户，只有永远的朋友；我们服务中小企业，定位品质客户
        </div>
        <div className="list clear">
          <ul>
            {
              data.map((item, index) => {
                return (
                  <li key={item.name} className="wow fadeInUp" data-wow-offset="10" data-wow-delay={(0.1*(index+2))+"s"}>
                    <a title={item.name}>
                      <img className="img1" src={item.img1} alt={item.name} title={item.name}/>
                      <img className="img2" src={item.img2} alt={item.name} title={item.name}/>
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div> 
    </div>
  )
}