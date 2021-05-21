import React, { ReactElement } from 'react';
import { Container } from './styles';
import { UseLanguage } from '../../context/Lang';
import { Divider, Menu } from 'antd';
import { HomeOutlined, MessageOutlined, ContactsOutlined } from '@ant-design/icons';

const Home:React.FC = (): ReactElement => {
  const { t } = UseLanguage();

  function goTo() {
    console.log('iai');
  }
  return (
    <Container>
      <div className="head">
        <h1>{t('life of success')}</h1>
      </div>
      <Divider />
      <Menu onClick={goTo} mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          {t('home')}
        </Menu.Item>
        <Menu.Item key="about" icon={<MessageOutlined />}>
          {t('about')}
        </Menu.Item>
        <Menu.Item key="info" icon={<ContactsOutlined />}>
          {t('contact')}
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default Home;
