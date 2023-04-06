import AsyncStorage from "@react-native-async-storage/async-storage";


// Storing the token
const storeToken = async (token) => {
    try {
        await AsyncStorage.setItem('@token_key', token);
        console.log('Token stored successfully.');
    } catch (e) {
        console.log('Failed to store the token:', e);
    }
};

// Retrieving the token
const retrieveToken = async () => {
    try {
        const token = await AsyncStorage.getItem('@token_key');
        console.log('Token retrieved successfully.');
        return token;
    } catch (e) {
        console.log('Failed to retrieve the token:', e);
    }
};

// Clear the token
const clearToken = async () => {
    try {
        const token = await AsyncStorage.removeItem('@token_key');
        console.log('Token removed successfully.');
        return token;
    } catch (e) {
        console.log('Failed to remove the token:', e);
    }
};

export default { storeToken, retrieveToken, clearToken };