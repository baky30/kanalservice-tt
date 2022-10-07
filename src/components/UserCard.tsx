import React, { FC, useEffect, useState } from 'react';
import { useWindowDimensions, View } from 'react-native'
import { IPadWidth } from '../constants';
import { IUser } from '../interfaces';
import CardImage from './CardImage';
import CardText from './CardText';

interface IPost {
    id: number
    title: string
    body: string
}

const UserCard: FC<{ user: IUser }> = ({ user }) => {
    const [post, setPost] = useState<IPost | null>(null)
    const { width } = useWindowDimensions();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(response => response.json())
            .then(result => setPost(result[0]))
            .catch(() => console.warn('error to load post data'))
    }, [])

    return (
        <View className='border-4 border-blue rounded-md py-3 px-4 mb-2.5'>
            { width > IPadWidth && <CardImage userId={user.id} /> }
            <CardText>Author: {user.name}</CardText>
            <CardText>Company: {user.company.name}</CardText>
            <CardText>Title: {post && post.title}</CardText>
        </View>
    )
}

export default UserCard;