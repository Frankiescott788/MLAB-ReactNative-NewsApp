import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Image } from "react-native-svg";

export default function Start() {
    const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white p-3">
      <View>
        <View className="mt-8">
          <ImageBackground
            source={require("@/assets/images/start.png")}
            style={{ height: 450, width: 450 }}
          ></ImageBackground>
        </View>
        <View className="mt-[1rem] py-3">
          <Text className="text-5xl text-gray-500">
            Stay <Text className="text-blue-500">Informed</Text>, Stay Ahead!
          </Text>
          <Text className="text-gray-400">
            Access top stories from trusted sources around the globe.
          </Text>
        </View>

        <View className="py-5">
          <TouchableOpacity className="bg-blue-500 p-6 rounded-lg" onPress={() => router.navigate("/(auth)/signin")}>
            <Text className="text-center text-white">Get Started</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center gap-1 py-3">
          <View className="h-2 w-2 bg-gray-200 rounded-full"></View>
          <View className="h-2 w-2 bg-blue-500 rounded-full"></View>
          <View className="h-2 w-2 bg-gray-200 rounded-full"></View>
        </View>
      </View>
    </SafeAreaView>
  );
}
