import { useTranslation } from 'react-i18next';
import React from 'react';
import './App.css'
import styled from 'styled-components';
import { Layout, Menu, theme, Button} from 'antd';
import {TranslationOutlined,CommentOutlined  } from '@ant-design/icons';
const { Header, Content, Footer, } = Layout;
const App: React.FC = () => {
  const { t, i18n } = useTranslation(); // 初始化 useTranslation 钩子
  const items =[
    {
      key: '1',
      label: (
        <span style={{ color: '#005995', fontWeight: 'bold', fontSize: '1.1rem' }}>
          {t('menu.nav1')}
        </span>
      ) // 为label添加样式
    },
    {
      key: '2',
      label: (
        <span style={{ color: '#005995', fontWeight: 'bold', fontSize: '1.1rem' }}>
          {t('menu.nav2')}
        </span>
      ) ,

    },
  ]
  
  // 切换语言的方法
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang); // 切换语言
  };
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();
const StyledMenu = styled(Menu)`
  .ant-menu-item:hover::after {
    border-bottom: 4px solid #F57E29 !important;
    
  }
  .ant-menu-item-selected::after {
    border-bottom: 4px solid #F57E29 !important;
    
  }
    .ant-menu-item{
    max-height: 60px;
    }
`;
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
              paddingLeft: 30,
              paddingRight: 30,
              paddingTop:20,
              paddingBottom:20
          }}>
        <div className="demo-logo"
          style={{
            width:"23.404255317%",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
              maxWidth: 100,
              cursor: 'pointer',
          }}>
          <img src="../logo192.png" alt="logo"
            style={{
              
              height: "auto",
              maxWidth: "100%",
              maxHeight: "100%"
            }} />
        </div>
<StyledMenu
      mode="horizontal"
      defaultSelectedKeys={['2']}
      items={items}
      style={{
        width:"40.425531911%",
        borderBottom: 'none',
        display: 'flex',
        alignItems: 'center',
        paddingBottom:5
      }}
    />
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
            联系我们
        </Button>
    </div>
 
        </div>

      </Header>
      <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            marginTop: 16,
            padding: 24,
            minHeight: 150,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}> 
          {t('content')}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
         {t('footer.copyright', { year: new Date().getFullYear() })}
      </Footer>
    </Layout>);

};

export default App;