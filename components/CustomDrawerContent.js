import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { useRouter } from "expo-router/src/hooks";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomDrawerContent(props) {
  const router = useRouter();
  const { top, bottom } = useSafeAreaInsets();

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
        <DrawerItemList {...props} />
        <DrawerItem label="Изход" onPress={() => router.replace("/")} />
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
