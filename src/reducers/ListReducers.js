import {
   LIST_START,
   LIST_SUCCESS,
   LIST_FAILD
  } from '../actions/types';
  import AsyncStorage from '@react-native-community/async-storage'
  
  const INITIAL_STATE = {
  
    loadingCharacter: false,
    characters: [] //null yerine boş bir array döndürüldü çünkü flatlist null'ı anlamaz
  };
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
  
     
      case LIST_START:
        return {
          ...state,
          loadingCharacter: true,
        };
  
      
      case LIST_SUCCESS:
        return {
          ...state,
          loadingCharacter: false, //sipinner artık dönmüyor
          characters: action.payload.characters// burada gelen payloadı user'a yazıyouz //user dolu geliyor
        };
  
      
      case LIST_FAILD:
        return {
          ...state,
          loadingCharacter: false,
        };
  
  
  
  
  
      default:
        return state;
    }
  };