import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../../assets/css/index.css';
import Bouton from '../../Components/Common/ButtonText';

const MenuTop = (props) => {
    const menulist = props.menu;
    const navigation = props.navigation;
    return (
        <View style={{ flex:1, flexDirection:"row", justifyContent:"end"}}>
            { menulist.map( (item) => (
                <Bouton
                    key={item.id}
                    {...props}
                    {...item}                    
                />
            ))}
        </View>
    )
};

export default MenuTop;
