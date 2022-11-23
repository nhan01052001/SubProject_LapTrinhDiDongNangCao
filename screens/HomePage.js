import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { DotIcon, ImgIcon } from "../components/IconBottomTabs";

export const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "15%",
        }}
      >
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "55%",
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/kkk-removebg-preview.png")}
            style={{ height: "100%", marginTop: -30 }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{ width: "30%", height: 1, backgroundColor: "#fff" }}
        ></View>
        <View>
          <Image
            source={require("../assets/record.png")}
            style={{ marginHorizontal: 10, width: 10, height: 10 }}
          />
        </View>
        <View
          style={{ width: "30%", height: 1, backgroundColor: "#fff" }}
        ></View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "30%",
          // backgroundColor: "red",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            paddingVertical: 15,
            paddingHorizontal: 70,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={{ color: "#2a271c", fontSize: 24, fontWeight: "700" }}>
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{ flexDirection: "row", position: "absolute", bottom: 10 }}
        >
          <Text style={{ color: "#fff" }}>Don't have an Account?</Text>
          <TouchableOpacity>
            <Text style={{ color: "#fff", marginLeft: 5 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a271c",
  },

  logo: {
    width: 200,
    height: 100,
  },
});
