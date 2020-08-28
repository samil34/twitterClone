import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILD,

    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILD,

    BASE_URL
} from './types'
import AsyncStorage from '@react-native-community/async-storage'


import { Alert } from 'react-native'
import {post } from './api'

//bu iki api isteğini tek yerde birleştirilebilir.
//daha kolay yönetmek için
//çünkü login ve register istekleri benzer parametler içeriyor

export const login = (params) => {
    return (dispatch) => {
       
     
     if(params.email != '' && params.password != '') {
         if(validateEmail(params.email)) {
           // console.log('Gelen Data: ', params);
            
          //actions->api kısmına gidecek
          //kodu tek bir topladık api içinde  
          //bütün axios işlemlerini tekilleştirmiş olduk
           post(
               BASE_URL.concat('/login'),//postmandeki yapılan işlem gibi url tek yerde tanımlamak
               params,
               dispatch,
               LOGIN_START,
               LOGIN_SUCCESS,
               LOGIN_FAILD
           )

         }else{
            Alert.alert('UYARI', 'Lütfen geçerli bir email giriniz')
         }
        

     }else{
        Alert.alert('UYARI', 'Lütfen bütün alanaları doldurunuz.')
     } 

     
    }
}


export const register = (params) => {
    return (dispatch) => {
       
     
     if(params.email != '' && params.password != '' && params.firstName != '' && params.lastName != '') {
         if(validateEmail(params.email)) {
           // console.log('Gelen Data: ', params);

           
           post(
            BASE_URL.concat('/register'),
            params,
            dispatch,
            REGISTER_START,
            REGISTER_SUCCESS,
            REGISTER_FAILD
        )


         }else{
            Alert.alert('UYARI', 'Lütfen geçerli bir email giriniz')
         }
        

     }else{
        Alert.alert('UYARI', 'Lütfen bütün alanaları doldurunuz.')
     } 

     
    }
}



function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

