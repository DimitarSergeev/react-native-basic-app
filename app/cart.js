import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { COLORS, images, icons, SIZES, FONT } from "../constants";
import { ScreenHeaderBtn } from "../components";
import { Stack, useNavigation } from "expo-router";
import Input from "../components/common/form/Input";
import DropDown from "../components/common/form/Dropdown";

const Cart = () => {
  //   <Ionicons name="trash-outline" size={24} color="Black" />
  const navigation = useNavigation();
  const onFocus = () => {
    console.log("focus");
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.white,
        position: "relative",
      }}
    >
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
           

            headerTitle: "",
          }}
        />
        <Text
          style={{
            fontSize: 20,
            color: COLORS.Black,
            fontWeight: 500,
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 10,
          }}
        >
          Моята Количка
        </Text>
        {/* Product Card */}
        <View style={{ paddingHorizontal: 16 }}>
          <TouchableOpacity
            style={{
              width: "100%",
              height: 100,
              marginVertical: 6,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "30%",
                height: 100,
                padding: 6,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.backgroundLight,
                borderRadius: 10,
                marginRight: 22,
              }}
            >
              <Image
                source={{
                  uri: "https://mon-cher.eu/wp-content/uploads/2023/12/B8065BE5-FFAD-425B-BEE3-A270AABDB067.jpeg",
                }}
                style={{ width: "100%", height: "100%", resizeMode: "contain" }}
              />
            </View>
            <View
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "space-around",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  maxWidth: "100%",
                  color: "#000",
                  fontWeight: 600,
                  letterSpacing: 1,
                }}
              >
                Име на продукта
              </Text>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#000",
                    fontWeight: 400,
                    maxWidth: "85%",
                    marginRight: 4,
                    color: COLORS.gray2,
                  }}
                >
                  Цена: 188 лв
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    color: "#000",
                    fontWeight: 400,
                    maxWidth: "85%",
                    marginRight: 4,
                    color: COLORS.gray2,
                  }}
                >
                  Размер: XL
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      borderRadius: 100,
                      marginRight: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: COLORS.backgroundMedium,
                      opacity: 0.5,
                    }}
                  >
                    <Ionicons name="remove" size={24} color={COLORS.gray2} />
                  </View>
                  <Text>1</Text>
                  <View
                    style={{
                      borderRadius: 100,
                      marginRight: 20,
                      marginLeft: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: COLORS.backgroundMedium,
                      opacity: 0.5,
                    }}
                  >
                    <Ionicons name="add" size={24} color={COLORS.gray2} />
                  </View>
                </View>
                <TouchableOpacity onPress={() => alert("remove")}>
                  <Ionicons
                    name="trash-outline"
                    size={24}
                    color="Black"
                    style={{
                      fontSize: 16,
                      padding: 8,
                      borderRadius: 100,
                      backgroundColor: COLORS.backgroundLight,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {/* Delivery information */}
        <View>
          <View style={{ paddingHorizontal: 16, marginVertical: 10 }}>
            <Text
              style={{ fontSize: 20, fontWeight: 600, color: COLORS.Black }}
            >
              Информация за доставка
            </Text>
          </View>

          <Input label="Имена *" icon="person-outline" onFocus={onFocus} />
          <Input
            label="Име на фирма (по избор)"
            icon="briefcase"
            onFocus={onFocus}
          />
          <DropDown
            data={[
              { label: "Албания", value: "Албания" },
              { label: "Андора", value: "Андора" },
              { label: "Армения", value: "Армения" },
              { label: "Австрия", value: "Австрия" },
              { label: "Азербайджан", value: "Азербайджан" },
              { label: "Беларус", value: "Беларус" },
              { label: "Белгия", value: "Белгия" },
              { label: "Босна и Херцеговина", value: "Босна и Херцеговина" },
              { label: "България", value: "България" },
              // Add more countries as needed
            ]}
            label="Държава *"
          />
          <Input label="Град *" icon="business-outline" onFocus={onFocus} />
          <Input label="Адрес *" icon="location" onFocus={onFocus} />
          <Input label="Пощенски код *" icon="flag-outline" onFocus={onFocus} />
          <Input
            label="Телефонен номер *"
            icon="phone-portrait-outline"
            onFocus={onFocus}
          />
          <Input label="Имейл адрес *" icon="mail-outline" onFocus={onFocus} />
        </View>
        {/* Order summary */}
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 40,
            marginBottom: 80,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: COLORS.Black,
              fontWeight: "500",
              letterSpacing: 1,
              marginBottom: 20,
            }}
          >
            Вашата поръчка
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                maxWidth: "80%",
                color: COLORS.Black,
                opacity: 0.5,
              }}
            >
              Сума на продукти
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                color: COLORS.Black,
                opacity: 0.8,
              }}
            >
              188.00 лв.
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 22,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                maxWidth: "80%",
                color: COLORS.Black,
                opacity: 0.5,
              }}
            >
              Доставка
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                color: COLORS.Black,
                opacity: 0.8,
              }}
            >
              5.50 лв.
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                maxWidth: "80%",
                color: COLORS.Black,
                opacity: 0.5,
              }}
            >
              Обща сума
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                color: COLORS.Black,
              }}
            >
              {(188 + 5.5).toFixed(2)} лв.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 10,
          height: "8%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => (total != 0 ? checkOut() : null)}
          style={{
            width: "90%",
            height: "90%",
            backgroundColor: COLORS.tertiary,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              letterSpacing: 1,
              color: COLORS.white,
              textTransform: "uppercase",
            }}
          >
            Завърши {(188 + 5.5).toFixed(2)} лв.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Cart;
