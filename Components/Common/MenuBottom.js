import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../assets/css/index.css';
import Bouton from '../../Components/Common/ButtonText';

const MenuFooter = (props) => {
    const {menuLeft, menuRight, navigation} = props;
    return (
        <View style={styles.menuFooter}>
            <View>
                <Bouton
                    key="1"
                    navigation={navigation}
                    title="France"
                    to="Home"                 
                />
            </View>
            <View style={{ flex:1, flexDirection:"row", borderColor:'rgb(196, 196, 196)',borderTopWidth:1}}>
                <View style={{ flex:1, flexDirection:"row", justifyContent:"start"}}>
                    { menuLeft.map( (item) => (
                        <Bouton
                            key={item.id}
                            {...props}
                            {...item}                    
                        />
                    ))}
                </View>
                <View style={{ flexDirection:"row",justifyContent:"center"}}>
                    <Text style={{ padding:10}}>Neutre en carbon depuis 2017</Text>
                </View>
                <View style={{ flex:1, flexDirection:"row", justifyContent:"end"}}>
                    { menuRight.map( (item) => (
                        <Bouton
                            key={item.id}
                            navigation={navigation}
                            {...props}
                            {...item}                    
                        />
                    ))}
                </View>
            </View>
            
        </View>
        
    )
};

export default MenuFooter;
