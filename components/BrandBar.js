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
} from "react-native";
import { NikeIcon } from "./IconBottomTabs";

const size = 22;

const BrandBar = ({ infor, onPress }) => {
  const [statusClick, setStatusClick] = useState(false);

  const find = () => {
    console.log("onPress.brand");
    if (statusClick === true) {
      setStatusClick(false);
    } else {
      setStatusClick(true);
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        infor.statusChoose === false
          ? styles.container
          : [styles.container, { backgroundColor: "red" }]
      }
    >
      {/* <NikeIcon color="#000" size={size} /> */}
      <Image source={infor.icon} />
      <Text style={{ marginLeft: 5 }}>{infor.brand}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    height: 30,
    borderRadius: 30,
    marginRight: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
});

export default BrandBar;
