import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";
// import CheckBox from "@react-native-community/checkbox";
import Checkbox from "expo-checkbox";
import { AddNewIcon } from "./IconBottomTabs";

const size = 22;

const CartBar = ({ cart }) => {
  const [isChecked, setChecked] = useState(false);
  const [amount, setAmount] = useState(1);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          //   marginBottom: 20,
        }}
      >
        {/* check box */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "10%",
          }}
        >
          <Checkbox
            style={{ borderColor: "#3ea31f" }}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#3ea31f" : undefined}
          />
        </View>
        {/* product */}
        <View
          style={{ width: "90%", flexDirection: "row", alignItems: "center" }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
              backgroundColor: "#fff",
            }}
          >
            <Image
              source={cart.img}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          {/* Thong tin khac */}
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: "#000", fontSize: 16, fontWeight: "600" }}>
              {cart.name}
            </Text>
            <Text
              style={{
                marginVertical: 10,
                color: "#000",
                fontSize: 16,
                opacity: 0.4,
              }}
            >
              Size 42
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ marginRight: 10 }}>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: "#f2bc3f",
                      fontSize: 16,
                      fontWeight: "700",
                      marginRight: 5,
                    }}
                  >
                    $
                  </Text>
                  <Text
                    style={{ color: "#000", fontSize: 16, fontWeight: "700" }}
                  >
                    {cart.price}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  //   onPress={reduce}
                  style={{
                    paddingHorizontal: 5,
                    backgroundColor: "#63d689",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* <MinusIcon color="#000" size={26} /> */}
                  <Text style={{ fontSize: 26 }}>-</Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: 30,
                    paddingVertical: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    height: 30,
                    borderWidth: 1,
                    borderColor: "#000",
                    marginHorizontal: 10,
                  }}
                >
                  <Text>{amount}</Text>
                </View>
                <TouchableOpacity
                  //   onPress={increasing}
                  style={{
                    paddingHorizontal: 5,
                    backgroundColor: "#63d689",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AddNewIcon color="#000" size={13} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export default CartBar;
