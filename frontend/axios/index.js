// ✨ implement axiosWithAuth  //
import axios from "axios";



<<<<<<< HEAD
 export const axiosWithAuth = () => {
    axios.post('http://localhost:9000/api/login', credentials)
    .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        })
    .catch(err => console.log(err))
}
=======
export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseUrl: 'http://localhost:9000/api',
        headers: { authorization: token},
    });
};
>>>>>>> bfdac2864898b5f5516c754a633acf1ae9478beb
