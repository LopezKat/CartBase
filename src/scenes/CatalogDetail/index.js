import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Button, Text, Title, Icon, Header, Right } from 'native-base';

import HttpProduct from "../../services/Product/http-products";
import CustomHeader from '../../button/custom-header';

import { connect } from 'react-redux';

class ProductDetail extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header: (props) => (
        <CustomHeader
          title={'Detalle de Productos'}
          navigation={navigation}
          hasBackButton={props.navigation.state.routes.length > 1}
        />
      )
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }

  componentDidMount = () => {
    id = this.props.navigation.getParam('id', 'no-data');
    this.getProductById(id);
  }

  async getProductById(id) {
    const data = await HttpProduct.getProductsById(id);
    this.setState({
      product: data
    })
    console.log(data);
  }

  render() {
    return (
      <Container>
        <Header>
          <Right>
            <ShoppingCartIcon />
          </Right>
        </Header>
        <Content style={styles.container}>
          <Image source={{ uri: this.state.product.avatar }}
            style={styles.avatar}
          />
          <Text> {this.state.product.brand} </Text>
          <Text> {this.state.product.name} </Text>
          <Text> $ {this.state.product.price} </Text>
          <Text> {this.state.product.description} </Text>
          <Button onPress={() => navigation.navigate('DetailScreen', { id: product._id })}>
            <Title>Comprar</Title>
          </Button>
          <Button onPressEvent={ this.props.addItemToCart } products={this.state.product._id} >            
            <Icon name="add-circle" />            
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
      addItemToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product })
  }
}

export default connect(null, mapDispatchToProps)(ProductDetail);
