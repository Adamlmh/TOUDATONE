import { Card } from 'antd';
import {useTranslation} from 'react-i18next';
function Home() {
  const {t} = useTranslation();
  return <div
  style={{
    width: '100%',
  }}>
    <div style={{background:"linear-gradient(180deg, rgba(255,255,255,1) 32%, rgba(244,121,33,1) 100%)"
      ,minHeight:0,paddingTop:100,paddingBottom:100}}>
        <div style={{padding:"0 80px"}}>
          <div style={{display:"flex",justifyContent:"space-evenly",gap:40}}>
           {/* 左边图片 */}
            <div style={{flex:1}}>
             <img src="https://www.ecomengine.com/hubfs/images/decorative/detail/ecomengine-home-laptop-software-amazon.png" alt="" style={{maxWidth:"100%"}}/>
            </div>
            {/* 右边内容 */}
              <div style={{flex:1}}>
                {/* 字内容 */}
              <div>
                <h1 style={{fontSize:"3.2rem",letterSpacing:"-0.02em",lineHeight:1.1,
                  marginBottom:"0.8em",color:"#233565",fontWeight:700,marginTop:0
                }}>{t("Selling on Amazon, Simplified.")}</h1>
                <p style={{marginBottom:"1.8em",marginTop:0,color:"#2d3e50",lineHeight:1.7,
                  fontWeight:500,fontSize:"1.1rem"
                }}>{t("Selling on Amazon doesn’t have to be complicated. eComEngine offers flexible solutions designed to help you save time and maximize profits.")}</p>
              </div>
                {/* 卡片 */}
                  <Card  style={{ width: "100%",boxShadow:"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
                   marginBottom:20
                   }} hoverable >
                    <div style={{ display:"flex",justifyContent:"space-between"}}>
    {/* 图标 */}
    <div style={{width:"14.529914530000001%",display:"flex",alignItems:"center"}}>
      <div style={{padding:"0 25px"}}>
  <img style={{maxWidth:"100%",height:"auto"}} src="https://www.ecomengine.com/hs-fs/hubfs/images/2023-home/star-icon.png?width=242&height=234&name=star-icon.png" alt="" />
      </div>
      </div>
      {/* 文字 */}
    <div style={{width:"82.905982906%",fontSize:"1.1rem"}}>
    <strong>{t("Get Amazon Reviews")}</strong>
    <br />
    {t("Rank better, improve product visibility, and maximize your ad spend.")}
    <br />
    <a href="/get-amazon-reviews" style={{color:"#D44108 ",fontWeight:600,}}>{t("Automate Review Requests")} </a>
    </div>
 </div>
 

  </Card>
                  {/* 卡片 */}
                  <Card  style={{ width: "100%",boxShadow:"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
                   marginBottom:20
                   }} hoverable >
                    <div style={{ display:"flex",justifyContent:"space-between"}}>
    {/* 图标 */}
    <div style={{width:"14.529914530000001%",display:"flex",alignItems:"center"}}>
      <div style={{padding:"0 25px"}}>
  <img style={{maxWidth:"100%",height:"auto"}} src="https://www.ecomengine.com/hubfs/images/2023-home/pulse-icn.png" alt="" />
      </div>
      </div>
      {/* 文字 */}
    <div style={{width:"82.905982906%",fontSize:"1.1rem"}}>
    <strong>{t("Operational Analytics for FBA Sellers")}</strong>
    <br />
    {t("Get the SKU-level data you need to make faster and better decisions for your Amazon business.")}
    <br />
    <a href="/get-amazon-reviews" style={{color:"#D44108 ",fontWeight:600,}}>{t("Get Insights")}  </a>
    </div>
 </div>
 

  </Card>
                  {/* 卡片 */}
                  <Card  style={{ width: "100%",boxShadow:"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
                   marginBottom:20
                   }} hoverable >
                    <div style={{ display:"flex",justifyContent:"space-between"}}>
    {/* 图标 */}
    <div style={{width:"14.529914530000001%",display:"flex",alignItems:"center"}}>
      <div style={{padding:"0 25px"}}>
  <img style={{maxWidth:"100%",height:"auto"}} src="https://www.ecomengine.com/hs-fs/hubfs/images/2023-home/box-icn.png?width=150&height=126&name=box-icn.png" alt="" />
      </div>
      </div>
      {/* 文字 */}
    <div style={{width:"82.905982906%",fontSize:"1.1rem"}}>
    <strong>{t("Manage FBA Inventory")}</strong>
    <br />
{t("Get action items based on over 70 data points to help you move faster and stay in stock.")}
    <br />
    <a href="/get-amazon-reviews" style={{color:"#D44108 ",fontWeight:600,}}>{t("Streamline Inventory Management")} </a>
    </div>
 </div>
 

  </Card>
  
            </div>
          </div>
        </div>
    </div>
  </div>
}

export default Home;