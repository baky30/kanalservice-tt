import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen/HomeSreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import CustomHeader from "../components/CustomHeader";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ header: () => <CustomHeader /> }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default MainStack;