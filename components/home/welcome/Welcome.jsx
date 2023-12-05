import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import styles from "./welcome.style";
import { useRouter } from "expo-router";
import { icons, SIZES } from "../../../constants";
const Welcome = ({
  search,
  setSearch,
  setActiveCategory,
  activeCategory,
  handleSearch,
}) => {
  const router = useRouter();

  const productCategories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",

    "automotive",
    "motorcycle",
    "lighting",
  ];
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Dimitar</Text>
        <Text style={styles.welcomeMessage}>Find your perfect product</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={(text) => {
              setSearch(text);
            }}
            placeholder="What are you looking for ?"
          />
        </View>

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => handleSearch()}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={productCategories}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeCategory, item)}
              onPress={() => {
                setActiveCategory(item);
                // router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeCategory, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
