import React from 'react';
import { View, Text,TouchableOpacity,StyleSheet } from "react-native";

const style = StyleSheet.create({
    link: {
        padding:10,        
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'transparent'
    },
    linktext: {
        fontWeight: 'bold',
        color: 'rgb(147, 147, 147)',
    }
});

export default class About extends React.Component {

    constructor (props) {
        super(props)
    }

    render() {
        return (
                <View>
                    <Text> About Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus dolorum fugiat modi dolore porro laboriosam architecto cupiditate veniam, illo animi dolores? Animi corporis, officiis natus aut architecto totam dolor sint.</Text>
                    <TouchableOpacity
                            style={style.link}
                            onPress={() => this.props.navigation.navigate("Home")}
                            underlayColor='#fff'>
                            <Text style={style.linktext}>Revenir à l'accueil</Text>
                    </TouchableOpacity>
                </View>
        )
    } 
}