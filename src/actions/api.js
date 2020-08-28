
import axios from 'axios'
import {Alert } from 'react-native'
import * as RootNavigation from '../RootNavigation';

export const post = (url, params, dispatch,start, success, faild) => {
    console.log('giden url: =>', url);

    dispatch({  type: start })

    axios({
        method: 'post',
        url,//veritabanımızın adresi
        data: params
    }).then((response) =>{
        console.log('Gelen post Başarılı: =>', response.data); //api isteğinin başarılı olması demek
        dispatch({  type: success, payload: response.data }) //galiba diğer sayfaya girmeye yarıyor.ve giriş başaılı olursa login success
    
        RootNavigation.replace('Home')//useEffet yerine bunu yapıyoruz

    }).catch((err) => {                                            //geriye data döner
       console.log('Gelen post Hatalı: =>', err);
       Alert.alert('UYARI', 'İstek sırasında bir sorun oluştu')
       dispatch({  type: faild }) //galiba diğer sayfaya girmeye yarıyor.ve giriş başaılı olursa login success

    })
}

export const get = (url, params, dispatch,start, success, faild) => {
    console.log('giden url: =>', url);
    dispatch({  type: start })

    axios({
        method: 'get',
        url,//veritabanımızın adresi
        
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMzZmNjVkZWU1YTc3M2EyNzc0NzI3MyIsImlhdCI6MTU5ODM3MjQ5OCwiZXhwIjoxNTk4NTQ1Mjk4fQ.EKWtProeeQ0P9OG56uGv2xGjkKf5CdMtn0SH-mtejus'
        }
    }).then((response) =>{
        console.log('Gelen get Başarılı: =>', response.data); //api isteğinin başarılı olması demek
        dispatch({  type: success, payload: response.data }) //galiba diğer sayfaya girmeye yarıyor.ve giriş başaılı olursa login success
    
       
    }).catch((err) => {                                            //geriye data döner
       console.log('Gelen get Hatalı: =>', err);
       Alert.alert('UYARI', 'İstek sırasında bir sorun oluştu')
       dispatch({  type: faild }) //galiba diğer sayfaya girmeye yarıyor.ve giriş başaılı olursa login success

    })
}