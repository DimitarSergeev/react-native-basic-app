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
          backgroundColor: "#FFD9CC",
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
              color={pathName === "/" ? "#FFF" : color}
            />
          )}
          labelStyle={{ color: pathName === "/" ? "#FFF" : "#000" }}
          style={{ backgroundColor: pathName === "/" ? "#FF7754" : "#FFD9CC" }}
        />
        <DrawerItem
          label="Блог"
          onPress={() => router.push("/news")}
          icon={({ size, color }) => (
            <Ionicons
              name="newspaper-outline"
              size={size}
              color={pathName === "/news" ? "#FFF" : color}
            />
          )}
          labelStyle={{ color: pathName === "/news" ? "#FFF" : "#000" }}
          style={{
            backgroundColor: pathName === "/news" ? "#FF7754" : "#FFD9CC",
          }}
        />
        <DrawerItem
          label="Количка"
          onPress={() => router.push("/cart")}
          icon={({ size, color }) => (
            <Ionicons
              name="cart-outline"
              size={size}
              color={pathName === "/cart" ? "#FFF" : color}
            />
          )}
          labelStyle={{ color: pathName === "/cart" ? "#FFF" : "#000" }}
          style={{
            backgroundColor: pathName === "/cart" ? "#FF7754" : "#FFD9CC",
          }}
        />
        <DrawerItem
          label="Профил"
          onPress={() => router.push("/profile")}
          icon={({ size, color }) => (
            <Ionicons
              name="person-outline"
              size={size}
              color={pathName === "/profile" ? "#FFF" : color}
            />
          )}
          labelStyle={{ color: pathName === "/profile" ? "#FFF" : "#000" }}
          style={{
            backgroundColor: pathName === "/profile" ? "#FF7754" : "#FFD9CC",
          }}
        />
        <DrawerItem label="Изход" onPress={() => router.push("/")} />
      </DrawerContentScrollView>
      <View
        style={{
          padding: 20,
          paddingBottom: 20 + bottom,
          backgroundColor: "#FFD9CC",
        }}
      >
        <Text>Footer</Text>
      </View>
    </View>
  );
}
