import AsyncStorage from '@react-native-community/async-storage';

export default {
  _storeData: async function _storeData(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      // Error saving data
      console.log('error in storing');
      console.log(error);
    }
  },
  _retriveData: async function _retrieveData(key) {
    try {
      return await AsyncStorage.getItem(key).then(value => {
        return value;
      });
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  },
};
