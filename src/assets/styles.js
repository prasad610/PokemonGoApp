import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5F3F5',
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: '30%',
    bottom: 30,
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: '150%',
    height: '150%',
    /* backgroundColor:'black' */
  },
  TextColors:{
    color: 'red'
  },
  Add_Trainer_Code:{
    backgroundColor: 'rgba(100,100,100,0.1)'
  },
  CardViewStyle:{
    flex: 1,
    width: '100%'
  }
});