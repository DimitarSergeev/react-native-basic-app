import { View, Text, ScrollView } from "react-native";
import { COLORS } from "../constants";
import { Stack } from "expo-router";
import { useState } from "react";
import Login from "../components/auth/Login";

const Profile = () => {

  const [activeTab, setActiveTab] = useState("login");
  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite,paddingTop: 0 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.tertiary },
          headerShadowVisible: false,

          headerTitle: "",
        }}
      />
      {activeTab === "login" && <Login handleActiveTab={handleActiveTab} />}
    </ScrollView>
  );
};
export default Profile;
