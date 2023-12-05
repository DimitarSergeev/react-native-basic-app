import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES, icons, images } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
const Home = () => {
  const [activeCategory, setActiveCategory] = useState("smartphones");
  const router = useRouter();
  const [search, setSearch] = useState("");

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
          />
          <Popularjobs
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
          />
          <Nearbyjobs
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
