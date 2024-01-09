import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { usePathname } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { useRouter } from "expo-router/src/hooks";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "../constants";

export default function CustomDrawerContent(props) {
  const router = useRouter();
  const { top, bottom } = useSafeAreaInsets();
  const pathName =  usePathname( );
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{
          backgroundColor: COLORS.tertiary,
          // backgroundColor: "#FFD9CC",
          paddingTop: top,
          height: "100%",
        }}
      >
        {/* <DrawerItemList {...props} /> */}
        <DrawerItem
          label="Начало"
          onPress={() => router.push("/")}
          icon={({ size, color }) => (
            <Ionicons
              name="home-outline"
              size={size}
              color={pathName === "/" ? "#000" : "#FFF"}
            />
          )}
          labelStyle={{ color: pathName === "/" ? "#000" : "#FFF" }}
          style={{
            backgroundColor: pathName === "/" ? "#FFF" : COLORS.tertiary,
            borderWidth: pathName === "/" ? 0 : 1,
            borderColor: "#FFF",
          }}
        />
        <DrawerItem
          label="Блог"
          onPress={() => router.push("/news")}
          icon={({ size, color }) => (
            <Ionicons
              name="newspaper-outline"
              size={size}
              color={pathName === "/news" ? "#000" : "#FFF"}
            />
          )}
          labelStyle={{ color: pathName === "/news" ? "#000" : "#FFF" }}
          style={{
            backgroundColor: pathName === "/news" ? "#FFF" : COLORS.tertiary,
            borderWidth: pathName === "/news" ? 0 : 1,
            borderColor: "#FFF",
          }}
        />
        <DrawerItem
          label="Количка"
          onPress={() => router.push("/cart")}
          icon={({ size, color }) => (
            <Ionicons
              name="cart-outline"
              size={size}
              color={pathName === "/cart" ? "#000" : "#FFF"}
            />
          )}
          labelStyle={{ color: pathName === "/cart" ? "#000" : "#FFF" }}
          style={{
            backgroundColor: pathName === "/cart" ? "#FFF" : COLORS.tertiary,
            borderWidth: pathName === "/cart" ? 0 : 1,
            borderColor: "#FFF",
          }}
        />
        <DrawerItem
          label="Профил"
          onPress={() => router.push("/profile")}
          icon={({ size, color }) => (
            <Ionicons
              name="person-outline"
              size={size}
              color={pathName === "/profile" ? "#000" : "#FFF"}
            />
          )}
          labelStyle={{ color: pathName === "/profile" ? "#000" : "#FFF" }}
          style={{
            backgroundColor: pathName === "/profile" ? "#FFF" : COLORS.tertiary,
            borderWidth: pathName === "/profile" ? 0 : 1,
            borderColor: "#FFF",
          }}
        />
        <DrawerItem
          label="Изход"
          icon={({ size, color }) => (
            <Ionicons
              name="exit-outline"
              size={size}
              color={pathName === "/profile" ? "#000" : "#FFF"}
            />
          )}
          onPress={() => router.push("/")}
          labelStyle={{ color: "#FFF" }}
          style={{
            borderWidth: 1,
            borderColor: "#FFF",
          }}
        />
      </DrawerContentScrollView>
      <View
        style={{
          padding: 20,
          paddingBottom: 20 + bottom,
          backgroundColor: COLORS.tertiary,
        }}
      >
        <Text style={{ color: "#FFF" }}>Footer</Text>
      </View>
    </View>
  );
}
