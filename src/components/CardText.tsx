import React, { FC, ReactNode } from 'react';
import { Text } from 'react-native'

const CardText: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Text className='text-base font-extrabold mb-4'>{ children }</Text>
    )
}

export default CardText;