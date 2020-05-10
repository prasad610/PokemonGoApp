import {StyleSheet} from 'react-native';
import constants from '../../utility/Constants';

export default StyleSheet.create({
  text: {alignSelf: 'flex-end'},
  textInput: {padding: 10, borderWidth: 2, marginVertical: 10},
  header: {padding: 20},
  picker: {padding: 10},
  app: {margin: '2%'},
  button: {margin: '2%'},
  link: {alignSelf: 'flex-end', color: 'blue', marginBottom: '3%'},
  logo: {marginHorizontal: 'auto', alignSelf: 'center'},
  error: {alignSelf: 'center', color: 'red', padding: 5},
  search: {flex: 1, flexDirection: 'column'},
  viewTrade: {flexDirection: 'row', borderWidth: 2},
  iconStyle: {
    color: constants.colors.ICONCOLOR,
    padding: 10,
    backgroundColor: constants.colors.ICONBACKGROUNDCOLOR,
  },
  senderView: {alignItems: 'flex-end', padding: '2%', marginLeft: '20%'},
  senderMessage: {
    padding: 10,
    backgroundColor: 'green',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    color: '#ebebeb',
  },
  recieverView: {alignItems: 'flex-start', padding: '2%', marginRight: '20%'},
  recieverMessage: {
    padding: 10,
    backgroundColor: 'green',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    color: '#ebebeb',
  },
  addButton: {
    position: 'absolute',
    bottom: '8%',
    right: '3%',
  },
  addIcon: {
    color: 'green',
    fontSize: 50,
  },
  recieverList: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#D3D3D3',
    // elevation: 2,
    justifyContent: 'space-around',
  },
  recieverNameView: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  credit: {lineHeight: 25, textAlign: 'justify'},
  creditContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  tradeCard: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderColor: 'transparent',
    elevation: 2,
    justifyContent: 'space-around',
  },
  scrollView:{paddingTop: 10}
});
