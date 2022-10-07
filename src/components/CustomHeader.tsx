import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { UserContext } from '../context/UserContext';

const { width, height } = Dimensions.get('window')

const CustomHeader = () => {
    const { user, setUser } = useContext(UserContext);
    const navigation = useNavigation();

    const logoutHandler = () => {
        setUser(null);
        navigation.goBack();
    }
    
    return (
        <View className='py-9 px-4 bg-cream flex-row justify-between'>
            <View className='flex-row items-center'>
                <Image style={styles.img} source={require('../assets/LogoIcon.png')} resizeMode='contain' />
                <Text className='text-xl font-extrabold ml-3 text-transparent md:text-black'>Каналсервис</Text>
            </View>
            { user && 
                <TouchableOpacity onPress={logoutHandler}>
                    <Image
                        style={styles.img}
                        source={require('../assets/ExitIcon.png')}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 63,
        height: 63
    }
})

export default CustomHeader;