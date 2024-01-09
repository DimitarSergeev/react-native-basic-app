import { useState } from "react";
import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";

const DropDown = ({ data,label }) => {
    const [isFocus, setIsFocus] = useState(false);
  return (
    <View
      style={{
        marginBottom: 10,
        paddingHorizontal: 16,
      }}
    >
      <Text style={{ marginVertical: 5, fontSize: 14, color: COLORS.gray2 }}>
        {label}
      </Text>
      <View
        style={{
          height: 55,
          backgroundColor: COLORS.light,
          flexDirection: "row",
          paddingHorizontal: 15,
          alignItems: "center",
          //   borderWidth: 0.5,
          backgroundColor: COLORS.backgroundLight,
          color: COLORS.gray,
        }}
      >
        <Dropdown
          data={data}
          placeholderStyle={{ fontSize: 16 }}
          selectedTextStyle={{ fontSize: 16 }}
          inputSearchStyle={{
            height: 40,
            fontSize: 16,
          }}
          iconStyle={{ width: 20, height: 20 }}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={''}
          icon
          searchPlaceholder="Търсене..."
          // value={country}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          // onChange={(item) => {
          //   setIsFocus(false);
          // }}
          renderLeftIcon={() => (
            <Ionicons
              style={{
                fontSize: 22,
                marginRight: 10,
                backgroundColor: isFocus
                  ? COLORS.tertiary
                  : COLORS.backgroundMedium,
                padding: 5,
                borderRadius: 10,
              }}
              color={COLORS.white}
              name="compass-outline"
            />
          )}
          style={{ width: "100%" }}
        />
      </View>
    </View>
  );
};

export default DropDown;
