import React, { createContext, useState, Dispatch, SetStateAction } from "react";

interface IUser {
    login: string
    password: string
}

interface IContext {
    user: IUser
    setUser: Dispatch<SetStateAction<IUser>>
}

const UserContext = createContext<IContext | null>(null);


const UserProvider = ({ children }) => {
    const [user, setUser] = useState<null | IUser>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext };