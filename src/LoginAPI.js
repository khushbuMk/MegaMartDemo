import AsyncStore from "./AsyncStore";

export default LoginAPI = async (setToken, email, password) => {
    await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            // email,
            // password
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        })
    })
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            AsyncStore.storeToken(data.token);
            setToken(data.token)
        })
        .catch(error => {
            console.error(error);
        });

}