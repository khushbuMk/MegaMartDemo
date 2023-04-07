import { ToastAndroid } from "react-native";
import AsyncStore from "./AsyncStore";
import { Platform } from "react-native";
import { Alert } from "react-native";

export default LoginAPI = async (setToken, email, password, setIsLoading) => {
    setIsLoading(true)
    try {
        const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const json = await response.json();
        let message;

        if (response.status === 400) {
            message = json.error
        }
        else if (response.status === 200) {
            message = json.token
            AsyncStore.storeToken(json.token);
            setToken(json.token)
        }
        else {
            message = json
        }

        Platform.OS === 'android' ?
            ToastAndroid.showWithGravityAndOffset(
                message,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
            )
            :
            Alert.alert(message)
        setIsLoading(false)
    }
    catch (error) {
        console.error(error)
        setIsLoading(false)
    }
}