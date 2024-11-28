import {Card} from 'antd';

function Price() {
  return (
    <div style={{paddingTop:30,width:"100%"}}>
      <div style={{padding:"0 100px"}}>
        {/* 卡片 */}
        <div style={{padding:"0 20px" ,width:"33.3332%"}}>
        {/* 上侧绿色 */}
        <div style={{backgroundColor:"#22C6AC",borderRadius:"15px 15px 0 0",
           borderTop: "3px solid #F1F1F4",  // 上边框
  borderLeft: "3px solid #F1F1F4",  // 左边框
  borderRight: "3px solid #F1F1F4", // 右边框
  padding:"15px 30px",display:"flex",alignContent:"center"
        }}>
          <span style={{textAlign:"center",fontSize:"18px",color:"#FFFFFF",margin:"auto",width:"100%"}}>
            <strong>Includes All FeedbackFive Features!</strong>
          </span>
        </div>
        {/* 下侧内容 */}
        <Card style={{borderRadius:"0 0 15px 15px"}} hoverable>
          <div style={{padding:"20px 10px"}}>
          <img style={{height:60,maxWidth:"100%",width:"auto"}} src="https://www.ecomengine.com/hubfs/brand-identity/logos/sellerpulse-logos/sellerpulse-logo.png" alt="" />
          </div>
        </Card>
        </div>


      </div>
    </div>
  );
}

export default Price;