import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
const ProductCard = ({ item, handleNavigate }) => {
  return (
    <View style={{ flexDirection: "row", height: 200, gap: 12 }}>
      <TouchableOpacity
        onPress={() => handleNavigate()}
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          borderRadius: 24,
        }}
      >
        <Image
          source={{
            uri: item?.images[0].src,
          }}
          resizeMode="cover"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
        <View
          style={{
            position: "absolute",
            left: 12,
            bottom: 12,
            paddingHorizontal: 12,
            paddingVertical: 8,
            backgroundColor: "rgba(0,0,0,0.25)",
            borderRadius: 100,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "600", color: "#fff" }}>
            {Number(item?.price).toFixed(2)} лв.
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            right: 12,
            bottom: 12,
            paddingHorizontal: 12,
            paddingVertical: 8,
            backgroundColor: "#000",
            borderRadius: 100,
            justifyContent: "space-between",
            maxWidth: 260,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "600", color: "#fff" }}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
