import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

import styles from "./popularProductCard.style";

const PopularProductCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 250,

        justifyContent: "space-between",
      }}
      onPress={() => handleCardPress(item)}
    >
      <View
        style={{
          aspectRatio: 1,
          position: "relative",
          overflow: "hidden",
          borderRadius: 24,
        }}
      >
        <Image
          source={{ uri: item?.images[0].src }}
          resizeMode="cover"
          style={StyleSheet.absoluteFill}
        />
      </View>
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            padding: 12,
          },
        ]}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            position: "absolute",
            bottom: 12,
            left: 12,
          }}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 16,
              fontWeight: "600",
              color: "#fff",
              textShadowColor: "rgba(0,0,0,0.2)",
              textShadowOffset: {
                height: 1,
                width: 0,
              },
              textShadowRadius: 4,
            }}
          >
            {item.name}
          </Text>
        </View>
        <View style={{ flex: 1 }} />
        <BlurView
          style={{
            flexDirection: "row",
            backgroundColor: "rgba(0,0,0,0.5)",
            alignItems: "center",
            padding: 6,
            borderRadius: 100,
            overflow: "hidden",
            width: 110,
            position: "absolute",
            top: 12,
            right: 12,
          }}
          intensity={20}
        >
          <Text
            style={{
              flex: 1,
              fontSize: 16,
              fontWeight: "600",
              color: "#fff",
              marginLeft: 8,
            }}
            numberOfLines={1}
          >
            {Number(item?.price).toFixed(2)} лв.
          </Text>
        </BlurView>
      </View>
    </TouchableOpacity>
  );
};

export default PopularProductCard;
