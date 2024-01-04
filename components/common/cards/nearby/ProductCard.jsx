import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./productCard.style";

const ProductCard = ({  item, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigate()}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{ uri: item.thumbnail }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.jobType} numberOfLines={1}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
