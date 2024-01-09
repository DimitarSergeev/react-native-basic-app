import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS, icons } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../common/form/Input";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../common/header/ScreenHeaderBtn";
import LoginForm from "./LoginForm";
import { useState } from "react";
import RegisterForm from "./RegisterForm";

const LoginRegister = () => {
  const router = useRouter();
   const [activeTab, setActiveTab] = useState("login");
   const handleActiveTab = (tab) => {
     setActiveTab(tab);
   };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: "",
        }}
      />
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View
            style={{
              alignSelf: "flex-start",
              position: "absolute",
              top: 12,
              left: 12,
            }}
          >
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          </View>
          <Image
            source={require("../../assets/images/logo-mc.png")}
            style={styles.logo}
          />
        </View>
        {activeTab == "login" ? (
          <LoginForm handleActiveTab={handleActiveTab} />
        ) : (
          <RegisterForm handleActiveTab={handleActiveTab} />
        )
        }
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 4,
    backgroundColor: COLORS.tertiary,
    height: 320,
    position: "relative",
  },
  logo: {
    resizeMode: "contain",
    height: 200,
  },
 
});
export default LoginRegister;
