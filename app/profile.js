import { View, Text, ScrollView } from "react-native";
import { COLORS } from "../constants";
import { Stack } from "expo-router";
import { useState } from "react";
import LoginRegister from "../components/auth/LoginRegister";

const Profile = () => {

 
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: COLORS.lightWhite, paddingTop: 0 }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.tertiary },
          headerShadowVisible: false,

          headerTitle: "",
        }}
      />
      <LoginRegister />
    </ScrollView>
  );
};
export default Profile;
