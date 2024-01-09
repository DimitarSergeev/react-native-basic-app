import React from "react";
import { StyleSheet, View, Image } from "react-native";
import PagerView from "react-native-pager-view";

const ProductPagerView = ({ images }) => {
  return (
    <View style={{ flex: 1 }}>
      <PagerView
        initialPage={0}
        collapsable={false}
        style={{
          flex: 1,
          width: "100%",
          height: 400,
        }}
      >
        {images.map((image, i) => {
          return <Image key={i} source={{ uri: image.src }} style={{ flex: 1 }} />;
        })}
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});

export default ProductPagerView;
