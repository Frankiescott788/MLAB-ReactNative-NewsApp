import { AuthContext } from "@/context/auth";
import { Redirect, Stack } from "expo-router";
import { useContext } from "react";

export default function Auth_Layout () {

    const { isAuthenticated } = useContext(AuthContext);
    
      if(isAuthenticated) {
        return <Redirect href={"/(tabs)"}/>
      }

    return (
        <Stack screenOptions={{ headerShown : false }}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="signin"/>
            <Stack.Screen name="signup"/>
        </Stack>
    )
}