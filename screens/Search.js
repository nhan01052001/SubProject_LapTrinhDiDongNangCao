import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  TextInput,
  Alert,
} from "react-native";
import {
  AddNewIcon,
  BackIcon,
  CartIcon,
  MinusIcon,
  PayUpIcon,
  StarGoldIcon,
  SearchICon,
  CameraIcon,
} from "../components/IconBottomTabs";
import Size from "../components/Size";
import { DATA_SHOE } from "../data/data";
import Color from "../components/Color";
import ViewMoreText from "react-native-view-more-text";
import ProductBar from "../components/ProductBar";

const size = 22;

export const Search = ({ navigation }) => {
  const [valueSearch, setValueSearch] = useState("");
  const [listSearch, setListSearch] = useState([]);

  useEffect(() => {
    if (valueSearch === "") {
      setListSearch("");
    } else {
      var makeQuery = function (property, regexp) {
        // return a callback function for filter, see MDC docs for Array.filter
        return function (elem, index, array) {
          return elem[property].search(regexp) !== -1;
        };
      };

      var re = new RegExp(valueSearch, "i");

      var q = makeQuery("name", re);

      let length = DATA_SHOE.filter(q).length;
      setListSearch(DATA_SHOE.filter(q));

      console.log(listSearch);
    }
  }, [valueSearch]);

  const clickProduct = (item) => {
    navigation.navigate("DetailProduct", {
      id: item.id,
    });
    // console.log(item.id);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* tar bar */}
      <View style={styles.tabBarChat}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.goBack()}
        >
          <BackIcon color="#000" size={24} />
        </TouchableOpacity>
        <View
          style={{ width: "80%", alignItems: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: "22", fontWeight: "500", color: "#000" }}>
            Search
          </Text>
        </View>
      </View>
      {/* content */}
      <View style={{ padding: 24 }}>
        {/* search */}
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 20,
            paddingLeft: 10,
            width: "100%",
            borderColor: "#000",
            borderWidth: 1,
          }}
        >
          <SearchICon color="#000" size={22} />
          <TextInput
            value={valueSearch}
            onChangeText={(obj) => setValueSearch(obj)}
            placeholder="Search here"
            placeholderTextColor="#000"
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "#000",
              padding: 12,
              width: "80%",
            }}
          />
          <CameraIcon color="#000" size={30} />
        </View>
        <View style={{ marginVertical: 24 }}>
          <Text style={{ fontSize: 16, fontWeight: "700", color: "#000" }}>
            {" "}
            {listSearch.length} Result Found
          </Text>
        </View>
        {/* ket qua tim kiem */}
        <View style={{ height: "100%", width: "100%", paddingBottom: 10 }}>
          {listSearch.length === 0 ? (
            <View
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 24,
                  fontWeight: "700",
                  color: "#000",
                  opacity: 0.3,
                }}
              >
                No products found
              </Text>
            </View>
          ) : (
            <View style={{ width: "100%", height: "70%" }}>
              <FlatList
                data={listSearch}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
                columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <ProductBar
                    product={item}
                    onPress={() => clickProduct(item)}
                  />
                )}
              />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  tabBarChat: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  icon: {
    width: "10%",
    padding: 10,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'red',
  },

  content: {
    height: "100%",
    width: "100%",
  },

  textBtn: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 5,
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
