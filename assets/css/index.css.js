import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  contentCenter:{
      flex:6,
      width:'100%',
      justifyContent:'center',
      textAlign: "center",
  },
  centerContent: {
        width: '60%',
        justifyContent: 'center',
        marginHorizontal: 'auto',
        alignText:"center"
  },
  imageLogo: {
      width:272,
      height:92,
      marginHorizontal: 'auto'
  },
  menuHeader: {
      flex:1,
      justifyContent: "end",
      width:'100%',
  },
  menuFooter: {
      flex:1,
      width:'100%',
      backgroundColor:'rgb(223, 223, 223)'
  },
  pageTitle: {
      textTransform: 'uppercase',
      fontSize: 22,
      fontColor: 'red'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    borderColor: "#909090"
  },
  boutontwo: {
        padding:15,        
        backgroundColor:'#ededed',
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'transparent',
        marginHorizontal: 10,
        width:'30%'
  },
  boutontwotext: {
      fontWeight: 'bold',
        color: 'rgb(45, 45, 45)',
  }
}) 

export default style;