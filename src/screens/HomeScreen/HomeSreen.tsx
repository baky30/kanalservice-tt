import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, useWindowDimensions, View } from 'react-native';
import UserCard from '../../components/UserCard';
import { IUser } from '../../interfaces';
import { IPadWidth } from '../../constants';


const HomeScreen = () => {
    const [users, setUsers] = useState<IUser[] | null>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => {
                setUsers(result)
            }).catch(() => console.warn('error loading users'))
    }, [])


    return users ? (
        <FlatList
            data={users}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <UserCard user={item} />}
            className='px-4 py-2.5'
            contentContainerStyle={{ paddingBottom: 16 }}
        />
    ) : <ActivityIndicator size={'large'} color='#27569C' className='mt-14' />
}

export default HomeScreen;
