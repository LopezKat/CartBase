import React from 'react';
import { Header, Body, Title, Left } from 'native-base';
import BackButton from './back-button';
import HomeButton from './home-button';

const CustomHeader = (props) => {
    const { navigation } = props;
    return (
        <Header>
            <Left>
                {props.hasBackButton ?
                    <BackButton navigation={ navigation } /> 
                    :
                    <HomeButton navigation={ navigation } />
                }
            </Left>
            <Body>
                <Title>{props.title}</Title>
            </Body>
        </Header>
    );
}

export default CustomHeader;
