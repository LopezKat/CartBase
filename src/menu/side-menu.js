import React, { Component } from 'react';
import {ImageBackground,StyleSheet, Image} from 'react-native';
import {Container, Content, List, ListItem, Left, Icon, Right, Text} from 'native-base';

const routes=[
    {
        screen: 'HomeScreen',
        title: 'Inicio',
        icon: 'home'
    },
    {
        screen: 'SettingStack',
        title: 'Settings',
        icon: 'settings'
    }
];

class SideMenu extends Component {
  render() {
      const { navigation } = this.props;
    return (
      <Container>
          <Content>
              <ImageBackground source={{uri: 'https://images.template.net/wp-content/uploads/2015/08/Free-Abstract-Artistic-Grey-Background.png'}}
                style={styles.imageBackground}
              >
                <Image 
                    source={{uri: 'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg'}}
                    style={styles.avatar}
                />
              </ImageBackground>              
              <List 
                dataArray={routes}
                renderRow = {item => {
                    return (
                        <ListItem
                            button
                            onPress={()=> navigation.navigate(item.screen)}
                        >
                            <Left>
                                <Icon name={ item.icon }/>
                                <Text>{ item.title }</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                    );
                }}
              />
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    imageBackground:{
        flex: 1,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar:{
        height: 70,
        width: 70,
        borderRadius: 35,
    }
});

export default SideMenu;
