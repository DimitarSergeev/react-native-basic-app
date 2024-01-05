import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularProductCard.style";

const PopularProductCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{ uri: item.thumbnail }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.title.rendered}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.description}
        </Text>
        <Text style={styles.location}>{item.price} $</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularProductCard;
