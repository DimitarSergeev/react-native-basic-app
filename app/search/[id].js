import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { Text, SafeAreaView } from "react-native";
import axios from "axios";

import { ScreenHeaderBtn, ProductCard } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import styles from "../../styles/search";
import useFetch from "../../hook/useFetch";

const ProductSearch = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const productPerPage = 1;
  const [page, setPage] = useState(1);
  const { data, loading, error, refetch } = useFetch(id, "search");
  const [pageResults, setPageResults] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    if (data?.products) {
      const calculatedPages = Math.ceil(data.products.length / productPerPage);
      setPages(calculatedPages);
      handleSearch();
    }
  }, [data, page]);
  const handleSearch = async () => {
    let products = [...data?.products];
    const startIndex = (page - 1) * productPerPage;
    const endIndex = startIndex + productPerPage;

    // Slice the products based on the current page and products per page
    const pageResults = products.slice(startIndex, endIndex);

    setPageResults(pageResults);
  };

  const handlePagination = (direction) => {
    if (direction === "left" && page > 1) {
      setPage(page - 1);
    } else if (direction === "right" && page < pages) {
      setPage(page + 1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />

      <FlatList
        data={pageResults}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            key={item.id}
            handleNavigate={() => router.push(`/product-details/${item.id}`)}
          />
        )}
        keyExtractor={(item) => item.job_id}
        contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
        ListHeaderComponent={() => (
          <>
            <View style={styles.container}>
              <Text style={styles.searchTitle}>{id}</Text>
            </View>
            <View style={styles.loaderContainer}>
              {loading ? (
                <ActivityIndicator size="large" color={COLORS.tertiary} />
              ) : (
                error && <Text>Oops something went wrong</Text>
              )}
            </View>
          </>
        )}
        ListFooterComponent={() => (
          <View style={styles.footerContainer}>
            {page > 1 && (
              <TouchableOpacity
                style={styles.paginationButton}
                onPress={() => handlePagination("left")}
              >
                <Image
                  source={icons.chevronLeft}
                  style={styles.paginationImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            <View style={styles.paginationTextBox}>
              <Text style={styles.paginationText}>{page}</Text>
            </View>
            {page < pages && (
              <TouchableOpacity
                style={styles.paginationButton}
                onPress={() => handlePagination("right")}
              >
                <Image
                  source={icons.chevronRight}
                  style={styles.paginationImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ProductSearch;
