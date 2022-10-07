import React, { FC, useEffect, useState } from 'react';
import { Image } from 'react-native';


const CardImage: FC<{ userId: number }> = ({ userId }) => {
    const [imgUrl, setImgUrl] = useState<string>('');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${userId}/photos`)
            .then(response => response.json())
            .then(result => setImgUrl(result[0].url))
            .catch(() => console.warn('error loading image'))
    }, [])

    return (
        <Image
            source={imgUrl ? {uri: imgUrl} : require('../assets/ImgPlaceholder.jpg')}
            style={{ width: 150, height: 150, marginBottom: 16 }} 
            resizeMode='contain'
            onError={(e) => console.warn(e)}
        />
    );
}
 
export default CardImage;