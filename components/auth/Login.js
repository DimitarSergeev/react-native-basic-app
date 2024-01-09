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

const Login = ({ handleActiveTab }) => {
  const router = useRouter();
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
          <View style={{ alignSelf: "flex-start" }}>
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
        <View style={styles.formContainer}>
          <Text style={styles.title}>Вход</Text>
          <Text style={styles.subTitle}>
            Влезте в акаунта си, за да продължите
          </Text>

          <TextInput placeholder="john@email.com" style={styles.textInput} />

          <TextInput placeholder="*******" style={styles.textInput} />

          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => alert("1")}
          >
            <Text style={styles.forgotPasswordText}>Забравена парола?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Влез</Text>
          </TouchableOpacity>

          <View style={styles.singUpBtn} onPress={() => alert("1")}>
            <Text style={styles.singUpBtnText}>
              Нямате акаунт? Можете да се регистрирате{" "}
              <TouchableOpacity style={styles.linkContainer}>
                <Text style={styles.linkText}>тук.</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
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
    height: 300,
  },
  logo: {
    resizeMode: "contain",
    height: 200,
  },
  formContainer: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingVertical: 30,
    paddingHorizontal: 22,
    marginTop: -25,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: COLORS.Black,
  },
  subTitle: {
    color: COLORS.gray2,
    fontWeight: "500",
  },
  textInput: {
    borderColor: COLORS.gray2,
    padding: 10,
    width: "100%",
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "#FFF",
    paddingStart: 20,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 10,
  },
  forgotPasswordText: {
    color: COLORS.gray,
    fontWeight: "500",
  },
  submitButton: {
    backgroundColor: COLORS.tertiary,
    width: "100%",
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  submitButtonText: {
    color: COLORS.white,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  singUpBtn: {
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 50,
    flex: 1,
  },
  singUpBtnText: {
    color: COLORS.gray,
    fontWeight: "500",
    textAlign: "center",
  },
  linkContainer: {
    alignItems: "center",
    paddingTop: 10,
  },
  linkText: {
    textDecorationLine: "underline",
    color: COLORS.tertiary,
    fontWeight: "500",
  },
});
export default Login;
