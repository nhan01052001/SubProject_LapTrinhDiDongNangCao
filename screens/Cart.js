import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CartBar from "../components/CartBar";
import { BackIcon } from "../components/IconBottomTabs";
import { DATA_CART } from "../data/dataCart";
import { PayUpIcon } from "../components/IconBottomTabs";
import { ListContext } from "./DetailProduct";
import { useIsFocused } from "@react-navigation/native";
import { List } from "react-native-paper";

export const Cart = () => {
  const [value, setValue] = useState(0);
  const [tongTien, setTongTien] = useState(0);
  const [listCart, setListCart] = useState();

  useEffect(() => {
    const test = () => {
      setValue(1);
      console.log("1");
    };
    test();
  }, [value]);

  useEffect(() => {
    setTongTien(0);
    const getTongTien = () => {
      setTongTien(0);
      for (let i = 0; i < DATA_CART.length; i++) {
        setTongTien(DATA_CART[i].price + tongTien);
      }
    };
    getTongTien();
  }, [DATA_CART]);

  useEffect(() => {
    const getList = () => {
      setListCart(DATA_CART);
    };

    getList();
  }, [DATA_CART]);

  const increasing = () => {};

  return (
    <SafeAreaView style={styles.container}>
      {/* tar bar */}
      <View style={styles.tabBarChat}>
        <Text style={{ fontSize: "22", fontWeight: "500", color: "#000" }}>
          Cart
        </Text>
      </View>
      {/* danh sach */}
      <View style={{ height: "100%" }}>
        <View style={{ marginBottom: 70, height: "80%" }}>
          <FlatList
            data={listCart}
            // showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{ paddingBottom: "" }}
            // columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CartBar cart={item} onPress={() => increasing()} />
            )}
          />
          {/* <TouchableOpacity style={styles.btn}>
            <PayUpIcon color="#000" size={24} />
            <Text style={styles.textBtn}>Pay Up</Text>
          </TouchableOpacity> */}
        </View>

        <View
          style={{
            height: "20%",
            width: "100%",
            position: "absolute",
            bottom: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 24,
          }}
        >
          <Text style={{ color: "#000", fontSize: 16, fontWeight: "700" }}>
            Selected Item (1)
          </Text>
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
            <Text style={{ color: "#000", fontSize: 16, fontWeight: "700" }}>
              {tongTien}
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
  },

  tabBarChat: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  btn: {
    width: "40%",
    paddingVertical: 15,
    backgroundColor: "#63d689",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    flexDirection: "row",
  },
});
