import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTasNavigator from "./screens/BottomTabs.navigator";
import { Started } from "./screens/Started";
import { Login } from "./screens/Login";
import { HomePage } from "./screens/HomePage";
import { AddProduct } from "./screens/AddProduct";
import { DetailProduct } from "./screens/DetailProduct";
import { Search } from "./screens/Search";
import { Register } from "./screens/Register";
import SC_OTP from "./screens/OTP";

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Started"
        component={Started}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="MainStackScreen"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="BottomTasNavigator"
          component={BottomTasNavigator}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="OTP"
          component={SC_OTP}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
