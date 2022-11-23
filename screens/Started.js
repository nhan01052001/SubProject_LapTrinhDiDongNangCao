import React, { Fragment, Component } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import GlobalStyles from "../components/GlobalStyle";
import { NextIcon } from "../components/IconBottomTabs";

const { width } = Dimensions.get("window");

export const Started = ({ navigation }) => {
  return (
    <View style={[GlobalStyles.droidSafeArea]}>
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          //   showsButtons
          dot={
            <View
              style={{
                backgroundColor: "black",
                width: 8,
                height: 8,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: "red",
                width: 10,
                height: 10,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7,
              }}
            />
          }
          paginationStyle={{
            bottom: 30,
          }}
          loop={true}
          autoplay={true}
          autoplayTimeout={3}
        >
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("../assets/started1.jpg")}
              //   resizeMode={"cover"}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("../assets/started2.jpg")}
              //   resizeMode={"center"}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("../assets/started3.jpg")}
              //   resizeMode={"center"}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("../assets/started4.jpg")}
              //   resizeMode={"center"}
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require("../assets/started5.jpg")}
              //   resizeMode={"center"}
            />
          </View>
        </Swiper>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 10,
            // backgroundColor: "rgba(52, 52, 52, 0.8)",
            // paddingVertical: 20,
            paddingHorizontal: 30,
            borderRadius: 24,
            justifyContent: "center",
            alignItems: "center",
            right: 0,
          }}
          onPress={() => navigation.replace("HomePage")}
        >
          {/* <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
            Get Started
          </Text> */}
          <NextIcon color="#fff" size={50} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  wrapper: {},
  slide: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  image: {
    // width,
    height: "100%",
    width: "100%",
  },
  //   wrapBtn: {
  //     height: "30%",
  //     width,
  //   },
});
