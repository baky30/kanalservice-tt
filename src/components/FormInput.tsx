import React, { Dispatch, SetStateAction } from 'react';
import { View, TextInput, Text } from 'react-native';

interface IFormInput {
    type: 'login' | 'password'
    value: string
    onChangeText: (text: string, type: 'login' | 'password') => void
    secureTextEntry?: boolean
    error?: boolean
}

const FormInput: React.FC<IFormInput> = ({ type, value, onChangeText, secureTextEntry, error }) => {
    return (
        <View className='mb-6 md:flex-row md:items-center md:justify-between'>
            <Text className='font-bold text-xl mb-2'>{type}</Text>
            <TextInput
                value={value}
                className={`border-4 ${error ? 'border-red' : 'border-blue bg-gray'} rounded-[10px] p-2 items-center md:w-3/4`}
                onChangeText={text => onChangeText(text, type)}
                autoComplete={"off"}
                autoCapitalize={'none'}
                secureTextEntry={secureTextEntry}
                placeholder={error ? 'Wrong login or password' : ''}
                placeholderTextColor={'#F44336'}
            />
        </View>
    );
}
 
export default FormInput;