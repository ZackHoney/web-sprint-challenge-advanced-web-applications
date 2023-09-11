// ✨ implement axiosWithAuth
import React from "react";
import axios from "axios";

const credentials = {
    username: 'qwe',
    password: '12345678'
  }


 export const axiosWithAuth = () => {
    axios.post('http://localhost:9000/api/login', credentials)
    .then(res => {
        localStorage.setItem('token', res.data.token)
        })
    .catch(err => console.log(err))
}
