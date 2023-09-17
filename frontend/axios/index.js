// ✨ implement axiosWithAuth
import React from "react";
import axios from "axios";

const credentials = {
    username: 'qwe',
    password: '12345678'
  }

  let token = '';

 export const axiosWithAuth = () => {
    axios.post('http://localhost:9000/api/login', credentials)
    .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        })
    .catch(err => console.log(err))
}
