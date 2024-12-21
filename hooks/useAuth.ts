import supabase from "@/supabase/config"
import { User } from "@/types/types"
import * as Crypto from "expo-crypto";
import Asyncstorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { AuthContext } from "@/context/auth";

const useAuth = () => {

    const router = useRouter();
    const { setIsAuthenticated } = useContext(AuthContext);

    const hashpassword = async (pass : string) : Promise<string> => {
        const hashed_password = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, pass);
        return hashed_password;
    }

    const signup = async (username : string, email : string, password : string) : Promise<void> => {
        try {

            const hash_pass = await hashpassword(password);

            const gen_id = new Date().toISOString();
            const { error, data } = await supabase.from("news_users").insert(<User>{
                _id : gen_id,
                username,
                email,
                password : hash_pass
            });

            if(error) {
                console.log(error.message);
                return; 
            }

            await Asyncstorage.setItem("auth_token", gen_id);
            setIsAuthenticated(true);
            router.navigate("/(tabs)");

        } catch (error) {
            console.log(error);
        }
    }

    const sign_in = async (email : string, password : string) : Promise<void> => {
        try {
            
        const { data, status, error } = await supabase.from("news_users").select().eq("email", email);
       
        if(error) {
            console.log(error.message);
            return;
        };

        const user : User = data.at(0);
        
        const hash_pass = await hashpassword(password);

        const compare_passwords = hash_pass === user.password;

        if(!compare_passwords) {
            console.log("Wrong password");
            return;
        }

        await Asyncstorage.setItem("auth_token", user._id);
        setIsAuthenticated(true);

        router.navigate("/(tabs)");
        
        } catch (error) {
            console.log(error)
        }
    }

    return {signup, sign_in}
}

export default useAuth