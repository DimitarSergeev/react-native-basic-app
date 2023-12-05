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
import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";

import PopularJobCard from "../../common/cards/popular/PopularJobCard";

import useFetch from "../../../hook/useFetch";
const Popularjobs = ({ setActiveCategory, activeCategory }) => {
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
        <Text style={styles.headerTitle}>Popular Products</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>View all</Text>
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
              <PopularJobCard item={item} handleCardPress={() => {}} />
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

export default Popularjobs;
