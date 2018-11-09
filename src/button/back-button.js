import React from 'react';
import { Button, Icon } from 'native-base';

const BackButton = props => (
    <Button
        transparent
        onPress={() => props.navigation.goBack(null)}
    >
        <Icon name="arrow-back" />
    </Button>
);

export default BackButton;
