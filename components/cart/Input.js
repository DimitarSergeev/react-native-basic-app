import { Ionicons } from "@expo/vector-icons";
import { View, Text, TextInput } from "react-native";
import { COLORS } from "../../constants";
import { useState } from "react";

const Input = ({ label, icon, onFocus }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{ marginBottom: 10, paddingHorizontal: 16 }}>
      <Text style={{ marginVertical: 5, fontSize: 14, color: COLORS.gray2 }}>
        {label}
      </Text>
      <View
        style={{
          height: 55,
          flexDirection: "row",
          paddingHorizontal: 15,
          alignItems: "center",
          //   borderWidth: 0.5,
          backgroundColor: COLORS.backgroundLight,
        }}
      >
        <Ionicons
          name={icon}
          style={{
            fontSize: 22,
            marginRight: 10,
            backgroundColor:isFocused ? COLORS.tertiary : COLORS.backgroundMedium,
            padding: 5,
            borderRadius: 10,
          }}
          color={COLORS.white}
        />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          style={{ color: COLORS.darkBlue, flex: 1 }}
        />
      </View>
      {/* {error && (
            <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 12 }}>
              {error}
            </Text>
          )} */}
    </View>
  );
};

export default Input;
