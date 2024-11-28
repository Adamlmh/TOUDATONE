import { useTranslation } from 'react-i18next';
import React from 'react';
import { Layout, Button} from 'antd';
import {TranslationOutlined,CommentOutlined  } from '@ant-design/icons';
import Mmenu from './menu'
import { Outlet,useNavigate } from "react-router-dom";

const { Header, Content, Footer, } = Layout;
const App: React.FC = () => {
  const { t, i18n } = useTranslation(); // 初始化 useTranslation 钩子  
  const navigate = useNavigate();
  // 切换语言的方法
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang); // 切换语言
  };


  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          backgroundColor: '#ffffff',
          top: 0,
          zIndex: 1,
          width: '100%',
          minHeight: 95,
        }}>

        <div style={{
          margin: "auto",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 1260,
          height:"100%",
          marginLeft:"auto",
          marginRight:"auto",
          padding: '20px 30px'
          }}>
        <div className="demo-logo"
          style={{
            width:"23.404255317%",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
              maxWidth: 100,
              cursor: 'pointer',
          }} onClick={() => navigate('/home')}>
          <img src="../logo192.png" alt="logo"
            style={{
              
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%"
            }} />
        </div>
        <div       style={{
        width:"40.425531911%",
        borderBottom: 'none',
        display: 'flex',
        alignItems: 'center',
        paddingBottom:5,
        
      }}>
<Mmenu
    />
        </div>

    <div style={{ width:"31.914893614%",maxHeight:"100%",overflow:"hidden"}}>
        
          <Button type="primary" icon={<TranslationOutlined />} onClick={toggleLanguage} style={{
           minWidth: 120,
         
           borderRadius:4,
           lineHeight:25,
          }}>
            {t('changeLanguage')}
            
        </Button>
                 
          <Button type="primary" icon={<CommentOutlined />} onClick={toggleLanguage} style={{
              backgroundColor: '#F57E29', 
           borderColor: '#F57E29',
               minWidth: 120,
           borderRadius:4,
           lineHeight:25,
           marginLeft:20,
          
          }}>
            {t('Contact us')}
        </Button>
    </div>
 
        </div>

      </Header>
      <Content >

         <Outlet></Outlet>

      </Content>
      <Footer style={{ textAlign: 'center' }}>
         {t('footer.copyright', { year: new Date().getFullYear() })}
      </Footer>
    </Layout>);

};

export default App;