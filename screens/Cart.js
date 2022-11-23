import React, { useEffect, useState } from "react";
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

export const Cart = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const test = () => {
      setValue(1);
      console.log("1");
    };
    test();
  }, [value]);

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
            data={DATA_CART}
            // showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{ paddingBottom: "" }}
            // columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CartBar cart={item} />}
          />
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
              Tong tien
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
});
