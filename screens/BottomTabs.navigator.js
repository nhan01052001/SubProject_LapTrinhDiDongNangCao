import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "./Home";
import { Bell } from "./Bell";
import { Cart } from "./Cart";
import { ListOfMe } from "./ListOfMe";
import { AddNewIcon, CartIcon, HeartIcon } from "../components/IconBottomTabs";
import { HomeIcon } from "../components/IconBottomTabs";
import { BellIcon } from "../components/IconBottomTabs";
import { AddProduct } from "./AddProduct";

const BottomTabs = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const size = 27;

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={{
        backgroundColor: "red",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,
        bottom: 30,
        borderWidth: 5,
        borderColor: "#fff",
      }}
    >
      <AddNewIcon color={"#fff"} size={size} />
    </TouchableOpacity>
  );
};

const BottomTasNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "grey",
        tabBarShowLabel: true,

        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          paddingBottom: 5,
          height: 60,
          shadowColor: "black",
          marginHorizontal: 5,
          borderRadius: 20,
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.5,
          backgroundColor: "#2a271c",
        },
        tabBarIconStyle: {
          position: "relative",
          top: 10,
          bottom: 0,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "500",
        },

        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Home") {
            return <HomeIcon color={color} size={size} />;
          }

          if (route.name === "ListOfMe") {
            return <HeartIcon color={color} size={size} />;
          }

          // if (route.name === "AddProduct") {
          //   return <CustomButton />;
          // }

          if (route.name === "Cart") {
            return <CartIcon color={color} size={size} />;
          }

          if (route.name === "Bell") {
            return <BellIcon color={color} size={size} />;
          }
          return null;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, title: "" }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{ title: "", headerShown: false }}
      />
      <Tab.Screen
        name="AddProduct"
        component={AddProduct}
        options={{
          title: "",
          tabBarButton: (props) => <CustomButton {...props} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Bell"
        component={Bell}
        options={{ title: "", headerShown: false }}
      />
      <Tab.Screen
        name="ListOfMe"
        component={ListOfMe}
        options={{ headerShown: false, title: "" }}
      />
    </BottomTabs.Navigator>

    // <Tab.Navigator
    //   initialRouteName="Home"
    //   activeColor="red"
    //   shifting={true}
    //   barStyle={{
    //     backgroundColor: "#2a271c",
    //   }}
    // >
    //   <Tab.Screen
    //     name="Home"
    //     component={Home}
    //     options={{
    //       tabBarLabel: "",
    //       tabBarIcon: ({ color }) => <HomeIcon color={color} size={size} />,
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Cart"
    //     component={Cart}
    //     options={{
    //       tabBarLabel: "",
    //       tabBarIcon: ({ color }) => <CartIcon color={color} size={size} />,
    //     }}
    //   />
    //   <Tab.Screen
    //     name="AddProduct"
    //     component={AddProduct}
    //     options={{
    //       tabBarLabel: "",
    //       tabBarIcon: ({ color }) => <CustomButton />,
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Bell"
    //     component={Bell}
    //     options={{
    //       tabBarLabel: "",
    //       tabBarIcon: ({ color }) => <BellIcon color={color} size={size} />,
    //     }}
    //   />
    //   <Tab.Screen
    //     name="ListOfMe"
    //     component={ListOfMe}
    //     options={{
    //       tabBarLabel: "",
    //       tabBarIcon: ({ color }) => <HeartIcon color={color} size={size} />,
    //     }}
    //   />
    // </Tab.Navigator>
  );
};

export default BottomTasNavigator;
