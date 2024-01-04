import React, { useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./popularProducts.style";
import { COLORS, SIZES } from "../../../constants";

import PopularProductCard from "../../common/cards/popular/PopularProductCard";

import useFetch from "../../../hook/useFetch";
const PopularProducts = ({ setActiveCategory, activeCategory }) => {
  const router = useRouter();
  const { data, isLoading, error, refetch } = useFetch(
    activeCategory,
    "products"
  );
  useEffect(() => {
    refetch();
  }, [activeCategory]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Популярни продукти</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Виж всички</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text style={styles.error}>Error fetching data</Text>
        ) : (
          <FlatList
            data={data.products}
            renderItem={({ item }) => (
              <PopularProductCard item={item} handleCardPress={() => {}} />
            )}
            keyExtractor={(item) => item?.id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default PopularProducts;
