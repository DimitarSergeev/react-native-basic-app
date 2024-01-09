import {
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState, useCallback } from "react";
import Icons from "@expo/vector-icons/MaterialIcons";
import BottomSheet from "@gorhom/bottom-sheet";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import HTML from "react-native-render-html";
import { StatusBar } from "expo-status-bar";
import { COLORS, icons } from "../../constants";
import useFetch from "../../hook/useFetch";
import ProductPagerView from "../../components/productdetails/pagerView/PagerView";
import { useTheme } from "@react-navigation/native";
const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { data, loading, error, refetch } = useFetch(id, "current_product");
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const [count, setCount] = useState(1);
  const [size, setSize] = useState('');
  const { width } = useWindowDimensions();
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.tertiary} />
      ) : error ? (
        <Text>Something went wrong...</Text>
      ) : data.length == 0 ? (
        <Text>No data found</Text>
      ) : (
        <ProductPagerView images={data.images || []} />
      )}
      <SafeAreaView
        edges={["top"]}
        style={{ position: "absolute", top: 0, left: 0, right: 0 }}
      >
        <StatusBar style="light" />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            gap: 8,
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff",
            }}
          >
            <Icons name="arrow-back" size={24} color={"#fff"} />
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff",
            }}
          >
            <Icons name="favorite-border" size={24} color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "#fff",
            }}
          >
            <Icons name="add-shopping-cart" size={24} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <BottomSheet
        detached
        snapPoints={[64, 500]}
        index={0}
        style={{ marginHorizontal: 20 }}
        bottomInset={insets.bottom + 20}
        backgroundStyle={{
          borderRadius: 24,
          backgroundColor: colors.background,
        }}
        handleIndicatorStyle={{
          backgroundColor: COLORS.tertiary,
        }}
      >
        <View style={{ padding: 16, gap: 16, flex: 1 }}>
          <Text style={{ fontSize: 20, fontWeight: "600", color: colors.text }}>
            {data?.name}
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              backgroundColor: COLORS.tertiary,
              padding: 6,
              borderRadius: 100,
              alignSelf: "flex-end",
              justifyContent: "space-between",
              width: "40%",
            }}
          >
            <TouchableOpacity
              onPress={() => setCount((count) => Math.max(1, count - 1))}
              style={{
                backgroundColor: colors.card,
                width: 34,
                aspectRatio: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 34,
              }}
            >
              <Icons name="remove" size={20} color={colors.text} />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: colors.background,
              }}
            >
              {count}
            </Text>
            <TouchableOpacity
              onPress={() => setCount((count) => Math.min(10, count + 1))}
              style={{
                backgroundColor: colors.card,
                width: 34,
                aspectRatio: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 34,
              }}
            >
              <Icons name="add" size={20} color={colors.text} />
            </TouchableOpacity>
          </View>

          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  flex: 1,
                  fontSize: 16,
                  fontWeight: "600",
                  color: colors.text,
                  textTransform: "uppercase",
                }}
              >
                Размери
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                gap: 6,
                marginTop: 6,
              }}
            >
              {data?.attributes &&
                data.attributes
                  .find((el) => el.name == "Размер")
                  .options.map((s, i) => (
                    <TouchableOpacity
                      key={i}
                      onPress={() => setSize(s)}
                      style={{
                        width: 44,
                        height: 44,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor:
                          s === size ? COLORS.tertiary : colors.card,
                        borderRadius: 44,
                      }}
                    >
                      <Text
                        style={{
                          color: s === size ? colors.card : colors.text,
                          fontWeight: "600",
                          fontSize: 16,
                        }}
                      >
                        {s}
                      </Text>
                    </TouchableOpacity>
                  ))}
            </View>
          </View>

          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                marginBottom: 6,
                color: colors.text,
              }}
            >
              Описание
            </Text>
            <HTML
              source={{ html: data?.description || "" }}
              style={{ color: colors.text, opacity: 0.75 }}
              contentWidth={width}
            />
          </View>

          <View style={{ flex: 1 }} />
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{ color: colors.text, opacity: 0.75, marginBottom: 4 }}
              >
                Цена
              </Text>
              <Text
                style={{ color: colors.text, fontSize: 18, fontWeight: "600" }}
              >
                {Number(data?.price).toFixed(2)} лв.
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: COLORS.tertiary,
                height: 64,
                borderRadius: 64,
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                flexDirection: "row",
                padding: 12,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  color: colors.background,
                  paddingHorizontal: 16,
                }}
              >
                Добави в количка
              </Text>

              <View
                style={{
                  backgroundColor: colors.card,
                  width: 40,
                  aspectRatio: 1,
                  borderRadius: 40,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icons name="arrow-forward" size={24} color={colors.text} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default ProductDetails;
