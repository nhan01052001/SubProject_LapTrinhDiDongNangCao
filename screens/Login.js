import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";
import { useTogglePasswordVisibility } from "../utils/useTogglePasswordVisibility";
import { Feather } from "@expo/vector-icons";
import { EmailIcon, LockIcon } from "../components/IconBottomTabs";

const { width } = Dimensions.get("window");

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

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

      <View style={styles.body}>
        <Text style={{ color: "#000", fontSize: 30, fontWeight: "700" }}>
          Login
        </Text>

        <View style={{ marginVertical: 24 }}>
          <Text style={styles.aboveInput}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            placeholder="Email"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <View
            style={{
              position: "absolute",
              left: 10,
              bottom: 12,
            }}
          >
            <EmailIcon color="#000" size={30} />
          </View>
        </View>

        <View>
          <Text style={styles.aboveInput}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            secureTextEntry={passwordVisibility}
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            enablesReturnKeyAutomatically
            onChangeText={(text) => {
              setPassword(text);
            }}
            placeholder="Password"
          />
          <View
            style={{
              position: "absolute",
              left: 10,
              bottom: 12,
            }}
          >
            <LockIcon color="#000" size={30} />
          </View>
          <Pressable onPress={handlePasswordVisibility}>
            <Feather
              name={rightIcon}
              size={22}
              color="#232323"
              style={{
                width: 50,
                position: "absolute",
                right: 0,
                bottom: 10,
              }}
            />
          </Pressable>
        </View>
        <View
          style={{
            alignItems: "center",
            marginVertical: 30,
          }}
        >
          <TouchableOpacity>
            <Text style={{ fontSize: 18 }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#2a271c",
            paddingVertical: 15,
            marginHorizontal: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            marginBottom: 30,
          }}
          onPress={() => navigation.replace("BottomTasNavigator")}
        >
          <Text style={{ color: "#fff", fontSize: 24, fontWeight: "700" }}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "#000", fontSize: 14 }}>
            Don't have an Account?
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: "#000",
                marginLeft: 5,
                fontWeight: "700",
                fontSize: 16,
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
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
          style={{ width: "30%", height: 1, backgroundColor: "#000" }}
        ></View>
        <View>
          <Text
            style={{ fontSize: 14, fontWeight: "700", marginHorizontal: 24 }}
          >
            or
          </Text>
        </View>
        <View
          style={{ width: "30%", height: 1, backgroundColor: "#000" }}
        ></View>
      </View>

      <View style={styles.footer}>
        <View style={styles.avatarProfile}>
          <Image
            style={styles.image}
            source={require("../assets/facebook.png")}
            resizeMode={"contain"}
          />
          <Image
            style={styles.image}
            source={require("../assets/logogoogle.png")}
            resizeMode={"contain"}
          />
          <Image
            style={styles.image}
            source={require("../assets/twitter.png")}
            resizeMode={"contain"}
          />
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

  logo: {
    width: 200,
    height: 100,
  },
  body: {
    height: "65%",
    padding: 24,
    justifyContent: "center",
  },

  footer: {
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
    // borderBottomColor: "grey",
    // borderBottomWidth: 2,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 24,
    padding: 15,
    paddingLeft: 50,
  },

  aboveInput: {
    color: "#000",
    fontSize: 18,
    marginLeft: 16,
    marginBottom: 10,
    fontWeight: "500",
  },

  avatarProfile: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
