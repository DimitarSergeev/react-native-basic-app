import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState, useCallback } from "react";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";

import { COLORS, SIZES, icons } from "../../constants";

import useFetch from "../../hook/useFetch";
import ProductPagerView from "../../components/jobdetails/pagerView/PagerView";

const ProductDetails = () => {
  const {id} = useLocalSearchParams();
  const router = useRouter();
  const { data, loading, error, refetch } = useFetch(id, "current_product");
  const tabs = ["About", "Specifics"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const displayTabContent = () => {
    switch (selectedTab) {
      case "Specifics":
        return <Specifics title={"Specifics"} product={data} />
        break;
      case "About":
        return <ProductPagerView images={data.images}/>
        break;
      default:
        break;
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerBackVisible: false,
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={refetch}
              colors={[COLORS.primary]}
              progressBackgroundColor={COLORS.lightWhite}
            />
          }
        >
          {loading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong...</Text>
          ) : data.length == 0 ? (
            <Text>No data found</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company product={data} />
              <JobTabs
                selectedTab={selectedTab}
                tabs={tabs}
                setSelectedTab={setSelectedTab}
              />
              {displayTabContent(selectedTab, data)}
            </View>
          )}
        </ScrollView>
        <JobFooter />
      </>
    </SafeAreaView>
  );
};

export default ProductDetails;
