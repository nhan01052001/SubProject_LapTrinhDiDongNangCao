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
  Pressable,
} from "react-native";
import { HeartIcon, HeartRedIcon, StarGoldIcon } from "./IconBottomTabs";

const ProductBar = ({ product, onPress }) => {
  const [statusHeart, setStatusHeart] = useState(product.statusHear);

  const clickHeart = () => {
    if (statusHeart === true) {
      setStatusHeart(false);
      //   console.log("1");
      console.log(statusHeart);
    } else {
      setStatusHeart(true);
      //   console.log("2");
      console.log(statusHeart);
    }
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "45%",
        height: 200,
        borderRadius: 30,
        borderWidth: 1,
        marginTop: 20,
        backgroundColor: "#eceaeb",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        // marginBottom: 50,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "60%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={product.img}
          //resizeMode="contain"
        />
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 5,
            top: 10,
            //backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={clickHeart}
        >
          {statusHeart === true ? (
            <View
              style={{
                position: "absolute",
                top: -1,
                right: -8,
              }}
            >
              <HeartRedIcon color="red" size={30} />
            </View>
          ) : (
            <View style={{}}>
              <HeartIcon color="#000" size={22} />
            </View>
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          justifyContent: "space-around",
          //   alignItems: "center",
          width: "100%",
          height: "40%",
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
          paddingHorizontal: 10,
        }}
      >
        <View
          style={{ justifyContent: "flex-start", alignItems: "flex-start" }}
        >
          <Text numberOfLines={1} style={{ fontSize: "16", fontWeight: "500" }}>
            {product.name}
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "40%",
              borderRightWidth: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ marginRight: 5 }}>{product.evaluate}</Text>
            <StarGoldIcon color="#f2bc3f" size={16} />
          </View>
          <View style={{ width: "60%", alignItems: "center" }}>
            <Text> {product.quantitySold} sold</Text>
          </View>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "#000",
            }}
          >
            $ {product.price}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductBar;
