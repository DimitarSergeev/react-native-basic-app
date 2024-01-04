import React from "react";
import { StyleSheet, View, Image } from "react-native";
import PagerView from "react-native-pager-view";

const ProductPagerView = ({ images }) => {
  return (
    <View>
      <PagerView
        style={{
          flex: 1,
          width: "100%",
          height: 400,
        }}
        initialPage={0}
        collapsable={false}
      >
        {images.map((image, index) => {
          return (
            // <View
            //   key={index}
            //   style={{
            //     justifyContent: "center",
            //     alignItems: "center",
            //   }}
            // >
              <Image
                source={{ uri: image }}
                resizeMode="contain"
                style={{
                  width: 350,
                  height: 350,
                }}
              />
            // </View>
          );
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
