import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CustomHeader from './button/custom-header';

class Terms extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (props) => (
                <CustomHeader
                    title={'Términos y condiciones'}
                    navigation={navigation}
                    hasBackButton={props.navigation.state.routes.length > 1}
                />
            )
        }
    }

    render() {
        return (
            <View>
                <Text>Términos y condiciones</Text>
            </View>
        );
    }
}

export default Terms;
