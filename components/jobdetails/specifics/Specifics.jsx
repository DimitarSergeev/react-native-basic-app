import React from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";

const Specifics = ({ title, product }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.pointsContainer}>
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>Rating: {product.rating}</Text>
        </View>
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>Brand: {product.brand}</Text>
        </View>
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>Price: {product.price} $</Text>
        </View>
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>Description: {product.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default Specifics;
