import React, { Component } from 'react';
import { Container, Content, Text, Button } from 'native-base';
import CustomHeader from '../button/custom-header';


class Settings extends Component {
    //Sobrescribir navigationOptions de react-navigation
    static navigationOptions = ({ navigation }) => {
        return {
            header: (props) => (
                <CustomHeader
                    title={'Configuración'}
                    navigation={ navigation }
                    hasBackButton={ props.navigation.state.routes.length > 1 }
                />
            )
        }
    }

    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Content>
                    <Text>Configuración</Text>
                    <Button 
                        onPress={() => navigation.navigate('TermsScreen')}
                    >
                        <Text>Ir a Términos y condiciones</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default Settings;
