import {Card,Button} from 'antd';
import   styled  from 'styled-components';
import {CheckOutlined} from '@ant-design/icons';
const NoPaddingCard = styled(Card)`
  .ant-card-body{
    padding: 0;
    }
`;

function Price() {
  return (
    <div style={{paddingTop:30,width:"100%"}}>
      <div style={{padding:"0 100px" ,display:"flex",justifyContent:"space-between"}}>
        {/* 卡片 */}
        <div style={{padding:"0 20px" ,minWidth:330,width:"33.3332%"}}>
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
        <NoPaddingCard style={{borderRadius:"0 0 15px 15px",padding:0}} hoverable>
          {/* 图标 */}
          <div style={{padding:"20px 10px",display:"flex",justifyContent:"center"}}>
          <img style={{height:60,maxWidth:"100%",width:"auto"}} src="https://www.ecomengine.com/hubfs/brand-identity/logos/sellerpulse-logos/sellerpulse-logo.png" alt="" />
          </div>
          {/* 文字 */}
          <div style={{backgroundColor:"#233565",padding:"20px"}}>
            <h4 style={{fontSize:"18px",margin:"0",color:"white",textAlign:"center",}}>
              Operational Analytics
            </h4>
          </div>
          <div style={{marginTop:"30px"}}>
          <p style={{lineHeight:"1"}}>Starting at</p>
          </div>
          <div style={{padding:"0 20px"}}>
            <span style={{fontSize:"60px",color:"#233565",textAlign:"center",display:"block",lineHeight:"1"}}> $299</span>
          </div>
          <div style={{padding:"20px 0 20px 10%"}}>
         <ul>
          <li style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"16px",marginBottom:"10px"}}>
            <CheckOutlined style={{color:"#22C6AC",fontWeight:900,marginRight:"10px"}}/>
             Buy Box Report  
          </li>
                    <li style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"16px",marginBottom:"10px"}}>
            <CheckOutlined style={{color:"#22C6AC",fontWeight:900,marginRight:"10px"}}/>
             Inventory Planning   
          </li>
                    <li style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"16px",marginBottom:"10px"}}>
            <CheckOutlined style={{color:"#22C6AC",fontWeight:900,marginRight:"10px"}}/>
              FBA Fee Insights and Alerts
          </li>
                    <li style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"16px",marginBottom:"10px"}}>
            <CheckOutlined style={{color:"#22C6AC",fontWeight:900,marginRight:"10px"}}/>
              SKU Economics Report
          </li>
                              <li style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"16px",marginBottom:"10px"}}>
            <CheckOutlined style={{color:"#22C6AC",fontWeight:900,marginRight:"10px"}}/>
           All FeedbackFive Features Included
          </li>
         </ul>
          </div>
                   <div style={{display:"flex",justifyContent:"center",paddingBottom:"50px"}}>
      <Button type="primary"style={{width:"75%",height:"50px",backgroundColor:"#f46c0b"}} >FREE TRIAL</Button>
         </div>
        </NoPaddingCard>
        </div>

        {/* 第二个卡片 */}
                <div style={{padding:"0 20px" ,minWidth:330,width:"33.3332%"}}>
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
        <NoPaddingCard style={{borderRadius:"0 0 15px 15px",padding:0}} hoverable>
          {/* 图标 */}
          <div style={{padding:"20px 10px",display:"flex",justifyContent:"center"}}>
          <img style={{height:60,maxWidth:"100%",width:"auto"}} src="https://www.ecomengine.com/hubfs/brand-identity/logos/sellerpulse-logos/sellerpulse-logo.png" alt="" />
          </div>
          {/* 文字 */}
          <div style={{backgroundColor:"#233565",padding:"20px"}}>
            <h4 style={{fontSize:"18px",margin:"0",color:"white",textAlign:"center",}}>
              Operational Analytics
            </h4>
          </div>
          <div style={{marginTop:"30px"}}>
          <p style={{lineHeight:"1"}}>Starting at</p>
          </div>
          <div style={{padding:"0 20px"}}>
            <span style={{fontSize:"60px",color:"#233565",textAlign:"center",display:"block",lineHeight:"1"}}> $299</span>
          </div>
          <div style={{padding:"20px 0 20px 10%"}}>
         <ul>
          <li style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"16px",marginBottom:"10px"}}>
            <CheckOutlined style={{color:"#22C6AC",fontWeight:900,marginRight:"10px"}}/>
             Buy Box Report  
          </li>
                    <li style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"16px",marginBottom:"10px"}}>
            <CheckOutlined style={{color:"#22C6AC",fontWeight:900,marginRight:"10px"}}/>
             Inventory Planning   
          </li>
                    <li style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"16px",marginBottom:"10px"}}>
            <CheckOutlined style={{color:"#22C6AC",fontWeight:900,marginRight:"10px"}}/>
              FBA Fee Insights and Alerts
          </li>
                    <li style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"16px",marginBottom:"10px"}}>
            <CheckOutlined style={{color:"#22C6AC",fontWeight:900,marginRight:"10px"}}/>
              SKU Economics Report
          </li>
                              <li style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"16px",marginBottom:"10px"}}>
            <CheckOutlined style={{color:"#22C6AC",fontWeight:900,marginRight:"10px"}}/>
           All FeedbackFive Features Included
          </li>
         </ul>
          </div>
                   <div style={{display:"flex",justifyContent:"center",paddingBottom:"50px"}}>
      <Button type="primary"style={{width:"75%",height:"50px",backgroundColor:"#f46c0b"}} >FREE TRIAL</Button>
         </div>
        </NoPaddingCard>
        </div>
        {/* 第三个 */}
                <div style={{padding:"0 20px" ,minWidth:330,width:"33.3332%"}}>
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
        <NoPaddingCard style={{borderRadius:"0 0 15px 15px",padding:0}} hoverable>
          {/* 图标 */}
          <div style={{padding:"20px 10px",display:"flex",justifyContent:"center"}}>
          <img style={{height:60,maxWidth:"100%",width:"auto"}} src="https://www.ecomengine.com/hubfs/brand-identity/logos/sellerpulse-logos/sellerpulse-logo.png" alt="" />
          </div>
          {/* 文字 */}
          <div style={{backgroundColor:"#233565",padding:"20px"}}>
            <h4 style={{fontSize:"18px",margin:"0",color:"white",textAlign:"center",}}>
              Operational Analytics
            </h4>
          </div>
          <div style={{marginTop:"30px"}}>
          <p style={{lineHeight:"1"}}>Starting at</p>
          </div>
          <div style={{padding:"0 20px"}}>
            <span style={{fontSize:"60px",color:"#233565",textAlign:"center",display:"block",lineHeight:"1"}}> $299</span>
          </div>
          <div style={{padding:"20px 0 20px 10%"}}>
         <ul>
          <li style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"16px",marginBottom:"10px"}}>
            <CheckOutlined style={{color:"#22C6AC",fontWeight:900,marginRight:"10px"}}/>
             Buy Box Report  
          </li>
                    <li style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"16px",marginBottom:"10px"}}>
            <CheckOutlined style={{color:"#22C6AC",fontWeight:900,marginRight:"10px"}}/>
             Inventory Planning   
          </li>
                    <li style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"16px",marginBottom:"10px"}}>
            <CheckOutlined style={{color:"#22C6AC",fontWeight:900,marginRight:"10px"}}/>
              FBA Fee Insights and Alerts
          </li>
                    <li style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"16px",marginBottom:"10px"}}>
            <CheckOutlined style={{color:"#22C6AC",fontWeight:900,marginRight:"10px"}}/>
              SKU Economics Report
          </li>
                              <li style={{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:"16px",marginBottom:"10px"}}>
            <CheckOutlined style={{color:"#22C6AC",fontWeight:900,marginRight:"10px"}}/>
           All FeedbackFive Features Included
          </li>
         </ul>
          </div>
                   <div style={{display:"flex",justifyContent:"center",paddingBottom:"50px"}}>
      <Button type="primary"style={{width:"75%",height:"50px",backgroundColor:"#f46c0b"}} >FREE TRIAL</Button>
         </div>
        </NoPaddingCard>
        </div>
      </div>
    </div>
  );
}

export default Price;