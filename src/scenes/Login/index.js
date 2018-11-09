import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Body, Title } from 'native-base';

class Login extends Component {      
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Login</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Username" />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" />
                        </Item>
                        <Button rounded >
                            <Text> Iniciar Sesión </Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

export default Login;