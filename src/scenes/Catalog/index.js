import React, { Component } from 'react'
import { Container, Content, List, ListItem, Left, Icon, Header, Text, Body, Title, Right, Thumbnail, Button } from 'native-base';

import HttpProduct from "../../services/Product/http-products";

class Catalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productList: [],
        }
    }
    componentDidMount = () => {
        this.getProducts();
    }
    /**
     * Metodo para Obtener los Productos de nuestra Api
     */
    async getProducts() {
        const data = await HttpProduct.getProducts();
        this.setState({
            productList: data
        });
        console.log(data);
    }

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => navigation.openDrawer()}
                        >
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Lista de Productos</Title>
                    </Body>
                </Header>                
                <Content>
                    <List
                        dataArray={this.state.productList}
                        renderRow={(item) =>
                            <ListItem button
                                onPress={() => navigation.navigate('DetailScreen', {id: item._id})}
                            >
                                <Left>
                                    <Thumbnail source={{ uri: item.avatar }} />
                                    <Text>{item.name}</Text>
                                </Left>
                                <Text>{item.price}</Text>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                        }
                        keyExtractor={(item) => item._id}
                    >
                    </List>
                </Content>
            </Container>
        );
    }
}
export default Catalog;