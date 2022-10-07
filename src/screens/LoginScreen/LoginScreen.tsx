import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import FormInput from '../../components/FormInput';
import { UserContext } from '../../context/UserContext';
import { LOGIN, PASSWORD } from '../../constants';

const LoginScreen: React.FC<{ navigation: NativeStackNavigationProp<any> }> = ({ navigation }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const { setUser } = useContext(UserContext);

    const onSubmit = () => {
        if(login === LOGIN && password === PASSWORD) {
            setUser({ login, password });

            navigation.navigate('Home');
        } else {
            setLogin('');
            setPassword('');
            setError(true);
        }
    }

    const onInputChange = (text: string, type: 'login' | 'password') => {
        if (error && text) setError(false);

        if (type === 'login') setLogin(text);
        else setPassword(text);
    }

    return (
        <View className='flex-1 bg-white p-4'>
            <View className='border-4 border-blue rounded-md pb-8 px-8'>
                <Text className='text-center text-xl text-blue font-bold py-3'>Authorization</Text>
                <FormInput
                    type='login'
                    value={login}
                    onChangeText={onInputChange}
                    error={error}
                />
                <FormInput
                    type='password'
                    value={password}
                    onChangeText={onInputChange}
                    secureTextEntry
                    error={error}
                />
                <TouchableOpacity
                    className='bg-cream items-center rounded-[5px] py-3 md:min-w-[213px] md:self-center'
                    onPress={onSubmit}
                >
                    <Text className='text-xl font-bold'>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen;