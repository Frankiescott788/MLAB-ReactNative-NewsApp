import { News_clock, User_2, User_icon } from "@/assets/icons/icons";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Clock, SearchNormal1 } from "iconsax-react-native";
import useNews from "@/hooks/useNews";
import { useEffect } from "react";
import { formatDistanceToNow } from "date-fns";

export default function Home() {
  const { getNews, news } = useNews();

  useEffect(() => {
    getNews();
  }, []);

  return (
    <SafeAreaView className="flex-1 p-2 bg-white">
      <View>
        <View className="flex-row justify-between p-2 w-full">
          <View>
            <ImageBackground
              source={{
                uri: "https://i.pinimg.com/736x/8d/30/7f/8d307fd617cfa891caf1249bdf694925.jpg",
              }}
              height={20}
            ></ImageBackground>
          </View>
          <View>
            <User_icon width="38" height="38" />
          </View>
        </View>

        <ScrollView>
          <View style={{ paddingInline: 10 }}>
            <Text className="text-xl text-gray-400" style={styles.Poppins_Font}>
              Good Morning frankie
            </Text>
            <Text className="text-3xl" style={styles.Poppins_Font}>
              Explore Today's World News
            </Text>
          </View>

          <View
            className="flex-row gap-1 mx-5 rounded-lg mt-4 "
            style={{
              backgroundColor: "#f3f4f6",
              paddingTop: 5,
              paddingInline: 10,
              marginInline: 10,
            }}
          >
            <View className="mt-2" style={{}}>
              <SearchNormal1 size="25" color="#9ca3af" />
            </View>
            <TextInput
              className="w-full"
              placeholder="Search..."
              style={styles.Poppins_Font}
            />
          </View>

          <View className="p-3">
            <View>
              <Text className="text-xl" style={styles.Poppins_Font}>
                Recent news
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View className="flex-row gap-4 py-3">
                  <ImageBackground
                    source={{
                      uri: "https://e3.365dm.com/24/12/1600x900/skynews-elon-musk-farage-xxxx_6778807.jpg?20241218012321",
                    }}
                    className="h-[20rem] w-[25rem] object-cover relative"
                    borderRadius={5}
                  >
                    <View
                      className="absolute bottom-0 left-0 right-0"
                      // style={styles.recent_img}
                    >
                      <LinearGradient
                        colors={[
                          "transparent",
                          "rgba(0, 0, 0, 0.5)",
                          "rgba(0, 0, 0, 0.5)",
                          "rgba(0, 0, 0, 0.5)",
                        ]}
                        className="p-3"
                      >
                        <Text className="text-white">BCC</Text>
                        <Text
                          numberOfLines={2}
                          style={styles.Poppins_Font}
                          className="text-2xl text-white"
                        >
                          Nigel Farage meets Elon Musk and JD Vance at Trump's
                          home amid reports of potential £78m donation to Reform
                        </Text>
                      </LinearGradient>
                    </View>
                  </ImageBackground>
                  <ImageBackground
                    source={{
                      uri: "https://e3.365dm.com/24/12/768x432/sky-news-luigi-mangione-brian-thompson_6780659.jpg?20241219163042",
                    }}
                    className="h-[20rem] w-[25rem] object-cover relative"
                    borderRadius={10}
                  >
                    <View
                      className="absolute bottom-0 left-0 right-0"
                      // style={styles.recent_img}
                    >
                      <LinearGradient
                        colors={[
                          "transparent",
                          "rgba(0, 0, 0, 0.5)",
                          "rgba(0, 0, 0, 0.5)",
                          "rgba(0, 0, 0, 0.5)",
                        ]}
                        className="p-3"
                      >
                        <Text className="text-white">BCC</Text>
                        <Text numberOfLines={2} className="text-2xl text-white">
                          Nigel Farage meets Elon Musk and JD Vance at Trump's
                          home amid reports of potential £78m donation to Reform
                        </Text>
                      </LinearGradient>
                    </View>
                  </ImageBackground>
                </View>
              </ScrollView>
              <View>
                <View className="flex-row justify-between gap-2 px-0 py-2">
                  <Text className="text-xl" style={styles.Poppins_Font}>
                    Recommended
                  </Text>
                  <Text
                    className="text-xl underline text-gray-400"
                    style={styles.Poppins_Font}
                  >
                    See all
                  </Text>
                </View>
                <View className="flex-col gap-5 pb-20">
                  {news.slice(0, 5).map((article, i) => (
                    <View className="flex-row gap-2" key={i}>
                      <View>
                        <Image
                          source={
                            article.urlToImage
                              ? { uri: article.urlToImage }
                              : undefined
                          }
                          className="h-[8rem] w-[8rem] rounded-md"
                        />
                      </View>
                      <View className="py-2">
                        <View>
                          <User_2 width="20" height="20"/>
                        <Text className="text-gray-400 text-sm">
                          Author : {article.author}
                        </Text>
                        </View>
                        
                        <Text
                          className="w-[20rem] py-1 text-xl text-gray-700"
                          numberOfLines={2}
                          ellipsizeMode="tail"
                        >
                          {article.title}
                        </Text>
                        <View className="flex-row gap-1">
                          <View className="mt-2">
                          <News_clock width="17" height="17" />

                          </View>
                          <Text className="text-gray-400 text-sm mt-2">
                            {formatDistanceToNow(
                              new Date(article.publishedAt),
                              {
                                addSuffix: true,
                              }
                            )}
                          </Text>
                        </View>
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  recent_img: {
    backgroundColor: "rgba(0, 2, 0, 0.4)",
  },
  Poppins_Font: {
    fontFamily: "Poppins",
  },
});
