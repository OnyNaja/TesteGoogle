import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView,TextInput, Text, View, TouchableOpacity,Image } from 'react-native';

import styles from '../../assets/css/index.css';

import MenuTop from "../../Components/Common/MenuTop";
import MenuFooter from "../../Components/Common/MenuBottom";

import About from "../../Components/Pages/About";

export default class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      search : "",
      MenuTop: [
        {
          id: 1,
          title: "Gmail",
          to: "About",
          icone: ""
        },
        {
          id: 2,
          title: "Images",
          to: "About",
          icone: ""
        },
        {
          id: 3,
          title: "Drive",
          to: "About",
          icone: ""
        },
        {
          id: 4,
          title: "DropBox",
          to: "About",
          icone: ""
        },
      ],
      MenuFooterRight: [
          {
            id: 1,
            title: "Info consommateur",
            to: "About",
            icone: ""
          },
          {
            id: 2,
            title: "Confidentialité",
            to: "About",
            icone: ""
          },
          {
            id: 3,
            title: "Conditions",
            to: "About",
            icone: ""
          },
        ],
      MenuFooterLeft: [
          {
            id: 1,
            title: "A propos",
            to: "About",
            icone: ""
          },
          {
            id: 2,
            title: "Publicité",
            to: "About",
            icone: ""
          },
          {
            id: 3,
            title: "Entreprise",
            component: "About",
            icone: ""
          },
          {
            id: 4,
            title: "Comment fonctionne la recherche google?",
            to: "About",
            icone: ""
          },
        ]
    }
  }

  setSearch (v) {
    this.setState({"search":v})
  }
  render () {
      return (        
              <View style={styles.container}> 
                <View style={styles.menuHeader} >
                  <MenuTop menu={this.state.MenuTop} navigation={this.props.navigation}/>
                </View>
                <View style={styles.contentCenter}>
                  <View style={styles.centerContent}>
                    <Image
                      style={styles.imageLogo}
                      source={require('../../assets/img/Logo.png')}
                      resizeMode='cover'
                    />
                    <SafeAreaView>      
                      <TextInput
                        style={styles.input}
                        value={this.state.default}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                      />
                    </SafeAreaView>
                    <View style={{ flexDirection:"row",justifyContent:"center"}}>
                      <TouchableOpacity
                                style={styles.boutontwo}
                                onPress={() => this.props.navigation.navigate('Home')}>
                                <Text style={styles.boutontwotext}>Recherche google</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                                style={styles.boutontwo}
                                onPress={() => this.props.navigation.navigate('Home')}>
                                <Text style={styles.boutontwotext}>J'ai de la chance</Text>
                      </TouchableOpacity>                        
                    </View>
                  </View>                    
                </View>
                <View style={styles.menuFooter}>
                    <MenuFooter 
                      menuLeft={this.state.MenuFooterLeft} 
                      menuRight={this.state.MenuFooterRight}
                      navigation={this.props.navigation}
                    />
                </View>
              </View>
            );
  }
  
}

