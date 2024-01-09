import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../constants";


const LoginForm = ({handleActiveTab}) => {
 
    return (
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
            <TouchableOpacity
              style={styles.linkContainer}
              onPress={() => handleActiveTab("register")}
            >
              <Text style={styles.linkText}> тук.</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
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
    borderWidth: 1,
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
export default LoginForm