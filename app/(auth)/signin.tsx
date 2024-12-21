import { EmailFilled, PassLock } from "@/assets/icons/icons";
import { ReactElement, useEffect, useState } from "react";
import { ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { User } from "iconsax-react-native"
import { Link } from "expo-router";
import useAuth from "@/hooks/useAuth";

export default function Signup() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useAuth();

  



  return (
    <SafeAreaView className="flex-1 bg-white p-4">
        <Text className="text-center text-blue-400 font-semibold"> Sign up</Text>
      <View className="flex-row justify-center">
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?ga=GA1.1.1313358536.1732799604&semt=ais_hybrid",
          }}
          style={{
            width: 300,
            height: 300,
          }}
        ></ImageBackground>
      </View>
      <View>
        <Text className="text-4xl text-gray-500">Let's get you started</Text>
        <Text className="text-gray-400">By creating a new account</Text>
      </View>
      <View className="flex-col gap-4 pt-[2rem]">
        <View className="flex-row gap-2 bg-gray-100 p-3 rounded-lg">
            <View className="pt-1">
            <User size="30" color="#9ca3af"/>
            </View>
            <TextInput placeholder="Username" onChangeText={setUsername}/>
        </View>
        <View className="flex-row gap-2 bg-gray-100 p-3 rounded-lg">
            <View className="pt-1">
                <EmailFilled width="32" height="32"/>
            </View>
            <TextInput placeholder="Email" onChangeText={setEmail}/>
        </View>
        <View className="flex-row gap-2 bg-gray-100 p-3 rounded-lg">
            <View className="pt-1">
                <PassLock width="32" height="32"/>
            </View>
            <TextInput placeholder="Password" onChangeText={setPassword}/>
        </View>
        <TouchableOpacity className="bg-blue-500 p-6 rounded-lg mt-4" onPress={() => signup(username, email, password)}>
            <Text className="text-center text-white">Sign up</Text>
        </TouchableOpacity>
        <Text className="text-center text-gray-400">Already have an acoount? <Link href={"/(auth)/signup"} className="text-blue-500 font-semibold">Sign in</Link></Text>
      </View>
    </SafeAreaView>
  );
}
