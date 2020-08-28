import {
    LIST_START ,
    LIST_SUCCESS,
    LIST_FAILD, 

    BASE_URL
} from './types'


import { Alert } from 'react-native'
import {get } from './api'

//bu iki api isteğini tek yerde birleştirilebilir.
//daha kolay yönetmek için
//çünkü login ve register istekleri benzer parametler içeriyor

export const getList = (params) => {
    return (dispatch) => {
       
        get( //bu methot apiye gidecek
            BASE_URL.concat('/api/characters'),
            params ? params : {},
            dispatch,
            LIST_START ,
            LIST_SUCCESS,
            LIST_FAILD
        )
     
    }
}



