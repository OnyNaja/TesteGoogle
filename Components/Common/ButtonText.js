import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    link: {
        padding:10,        
        backgroundColor:'transparent',
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'transparent'
    },
    linktext: {
        fontWeight: 'bold',
        color: 'rgb(147, 147, 147)',
    }
});

const Bouton = (props) => {
    const {id,title,to,navigation} = props;

    return (
        <TouchableOpacity
                style={style.link}
                onPress={() => navigation.navigate(to)}
                underlayColor='#fff'>
                <Text style={style.linktext}>{title}</Text>
        </TouchableOpacity>
        
    )
}

export default Bouton;