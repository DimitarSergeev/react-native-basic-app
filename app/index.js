import { useEffect, useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES, icons, images } from "../constants";
import {
  Products,
  PopularProducts,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import useFetch from "../hook/useFetch";
const Home = () => {
  const [activeCategory, setActiveCategory] = useState("smartphones");
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { data, loading, error, refetch } = useFetch("", "product_cat");
  useEffect(() => {
    if (data) {
      setActiveCategory(data[0]?.id);
    }
  }, [data]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
            search={search}
            setSearch={setSearch}
            handleSearch={() => {
              if (search) {
                router.push(`/search/${search}`);
              }
            }}
            data={data}
          />
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <>
              <PopularProducts
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
              />
              <Products
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
              />
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
