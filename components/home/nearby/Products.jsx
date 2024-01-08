import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./productslist.style";
import { COLORS } from "../../../constants";


import useFetch from "../../../hook/useFetch";
import ProductCard from "../../common/cards/nearby/ProductCard";
const Products = ({  activeCategory }) => {
  const router = useRouter();
  const { data, loading, error, refetch } = useFetch(
    activeCategory,
    "products"
  );
   useEffect(() => {
     refetch();
   }, [activeCategory]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Продукти</Text>
        <TouchableOpacity
          onPress={() => router.push(`/products-list/${activeCategory}`)}
        >
          <Text style={styles.headerBtn}>Виж всички</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.tertiary} />
        ) : error ? (
          <Text style={styles.error}>Error fetching data</Text>
        ) : (
          data?.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              handleNavigate={() => router.push(`/product-details/${item.id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Products;
