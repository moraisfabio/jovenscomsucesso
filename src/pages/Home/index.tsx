import React, { ReactElement } from 'react';
import { Container } from './styles';
import { UseLanguage } from '../../context/Lang';
import { Menu } from 'antd';
import { HomeOutlined, MessageOutlined, ContactsOutlined } from '@ant-design/icons';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { InputLabel } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Carousel } from 'antd';

import subH from '../../assets/logo.png';

const Home:React.FC = (): ReactElement => {
  const { t } = UseLanguage();

  function goTo() {
    console.log('iai');
  }

  return (
    <Container>
      {/* <Paper component="form"> */}
      <InputLabel className="input">
        {t('life of success')}
        <InputBase
          className="logo"
          placeholder={t('Search on Site')}
          inputProps={{ 'aria-label': 'search on site' }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>

        <Menu onClick={goTo} mode="horizontal" className="menu">
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
      </InputLabel>
      {/* </Paper> */}
      <Divider />
      <div className="subheader">
        <img src={subH} alt="logo" className="subheader" />
      </div>
      <div>
        <h1 style={{ textAlign: 'center' }}>The world largest selection of courses</h1>
      </div>
      <div style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Carousel autoplay>
          <Card className="cardH">
            <CardActionArea>
              <CardMedia
                className="media"
                image={subH}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species,
                  ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card className="cardH">
            <CardActionArea>
              <CardMedia
                className="media"
                image={subH}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  loremipsum
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Carousel>
      </div>

    </Container>
  );
};

export default Home;
