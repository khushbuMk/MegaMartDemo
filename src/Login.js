import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LoginAPI from './LoginAPI';
import { Ionicons } from '@expo/vector-icons';
import { Images } from './constants';
import { ActivityIndicator } from 'react-native';

export default function Login({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        LoginAPI(setToken, username, password);
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Images.Logo} resizeMode={'contain'} />
            <Text style={styles.heading}>
                Welcome to {'\n'}
                Mega Mall
            </Text>

            <Text style={styles.label}>
                Email/ Phone
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter Mobile / Phone"
                    onChangeText={setUsername}
                    value={username}
                    style={{ flex: 1 }}
                />
            </View>

            <View style={styles.gap} />

            <Text style={styles.label}>
                Password
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter Password"
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={setPassword}
                    value={password}
                    style={{ flex: 1 }}
                />
                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <Ionicons
                        name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.gap} />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                {!isLoading ?
                    <Text style={styles.buttonText}>Sign In</Text>
                    :
                    <ActivityIndicator color='white' />
                }
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: 'white'
    },
    logo: {
        marginBottom: 20
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
        width: '100%',
    },
    label: {
        marginBottom: 10,
        width: '100%',
    },
    inputContainer: {
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
        padding: 10,
        marginVertical: 8,
        minWidth: 200,
        flexDirection: 'row',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gap: {
        height: 40,
    },
    button: {
        backgroundColor: '#3669C9',
        borderRadius: 10,
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
