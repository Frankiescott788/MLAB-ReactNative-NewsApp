import supabase from "@/supabase/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactElement, ReactNode, useEffect, useState } from "react";
import { User } from "@/types/types";

interface Children {
    children : ReactNode
}

export const AuthContext = createContext<any | null>(null)
const Authprovider = ({ children } : Children) : ReactElement => {
    
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const authenticate = async () : Promise<void> => {
            try {
                const auth_token = await AsyncStorage.getItem("auth_token");
                if(!auth_token) {
                    console.log("No Token provided");
                    return;
                }

                const { error, data } = await supabase.from("news_users").select().eq("_id", auth_token);

                if(error) {
                    console.log(error.message);
                    return;
                };

                if(data.length === 0) {
                    console.log("No user found");
                    return;
                }

                const user : User = data.at(0);
                setIsAuthenticated(true);

            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false);
            }
        }
        authenticate()
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            { children }
        </AuthContext.Provider>
    )
}

export default Authprovider