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
} from "../components/IconBottomTabs";
import Size from "../components/Size";
import { DATA_SHOE } from "../data/data";
import Color from "../components/Color";
import ViewMoreText from "react-native-view-more-text";

const size = 22;

const DATA_COLOR = [
  {
    id: 1,
    colorName: "red",
  },
  {
    id: 2,
    colorName: "yellow",
  },
  {
    id: 3,
    colorName: "blue",
  },
  {
    id: 4,
    colorName: "pink",
  },
  {
    id: 5,
    colorName: "white",
  },
  {
    id: 6,
    colorName: "black",
  },
  {
    id: 7,
    colorName: "violet",
  },
];

export const DetailProduct = ({ navigation, route }) => {
  const id = route.params;
  const [product, setProduct] = useState(DATA_SHOE.find((o) => o.id === id.id));
  const [size, setSize] = useState(product.size);
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(product.price);

  useEffect(() => {
    console.log(id.id);
    const getProduct = () => {
      //setProduct(DATA_SHOE.find((o) => o.id === id.id));
      console.log(product);
      console.log(size);
    };
    getProduct();
  }, []);

  const renderViewMore = (onPress) => {
    return (
      <Text onPress={onPress} style={{ color: "blue", paddingLeft: 10 }}>
        View more
      </Text>
    );
  };

  const increasing = () => {
    setAmount(amount + 1);
    setPrice(price + product.price);
  };

  const reduce = () => {
    if (amount === 1) {
      Alert.alert("Số lượng sản phẩm phải lớn hơn hoặc bằng 1!");
    } else {
      setAmount(amount - 1);
      setPrice(price - product.price);
    }
  };

  const renderViewLess = (onPress) => {
    return (
      <Text onPress={onPress} style={{ color: "blue", paddingLeft: 10 }}>
        View less
      </Text>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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
            Detail Product
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={{ height: "40%" }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={product.img}
            //resizeMode="contain"
          />
        </View>
        <ScrollView
          style={{
            // height: "60%",
            backgroundColor: "#e3e1e1",
            borderTopLeftRadius: "34",
            borderTopRightRadius: "34",
            padding: 24,
          }}
        >
          {/* Ten bran va danh gia */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <Text style={{ color: "#949292", fontSize: 16, fontWeight: "600" }}>
              {product.brand}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#000", fontSize: 16, marginRight: 5 }}>
                {product.evaluate}
              </Text>
              <StarGoldIcon color="#3ea31f" size={16} />
            </View>
          </View>
          {/* Ten san pham va gia tien */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <Text style={{ color: "#000", fontSize: 22, fontWeight: "700" }}>
              {product.name}
            </Text>

            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "#3ea31f",
                  fontSize: 20,
                  fontWeight: "700",
                  marginRight: 5,
                }}
              >
                $
              </Text>
              <Text style={{ color: "#000", fontSize: 20, fontWeight: "700" }}>
                {price}
              </Text>
            </View>
          </View>
          {/* so luong */}
          <View
            style={{
              marginBottom: 24,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "#000", fontSize: 18, fontWeight: "700" }}>
              Amount
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                onPress={reduce}
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#63d689",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <MinusIcon color="#000" size={26} /> */}
                <Text style={{ fontSize: 26 }}>-</Text>
              </TouchableOpacity>
              <View
                style={{
                  width: 50,
                  paddingVertical: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  height: 30,
                  borderWidth: 1,
                  borderColor: "#000",
                  marginHorizontal: 10,
                }}
              >
                <Text>{amount}</Text>
              </View>
              <TouchableOpacity
                onPress={increasing}
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#63d689",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AddNewIcon color="#000" size={13} />
              </TouchableOpacity>
            </View>
          </View>
          {/* Cac loai size */}
          <View style={{ marginBottom: 24 }}>
            <Text style={{ color: "#000", fontSize: 18, fontWeight: "700" }}>
              Size
            </Text>
            <FlatList
              data={size}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item}
              renderItem={({ item }) => <Size listSize={item} />}
            />
          </View>
          {/* color */}
          <View style={{ marginBottom: 24 }}>
            <Text style={{ color: "#000", fontSize: 18, fontWeight: "700" }}>
              Color
            </Text>
            <View style={{ paddingLeft: 10 }}>
              <FlatList
                data={DATA_COLOR}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Color colorName={item} />}
              />
            </View>
          </View>
          {/* Description */}
          <View style={{ marginBottom: 50 }}>
            <Text style={{ color: "#000", fontSize: 18, fontWeight: "700" }}>
              Description
            </Text>
            <ViewMoreText
              numberOfLines={3}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}
              textStyle={{ paddingLeft: 10, marginTop: 5 }}
            >
              <Text
                style={{ fontSize: "16", color: "#000", fontWeight: "500" }}
              >
                Lorem ipsum dolor sit amet, in quo dolorum ponderum, nam veri
                molestie constituto eu. Eum enim tantas sadipscing ne, ut omnes
                malorum nostrum cum. Errem populo qui ne, ea ipsum antiopam
                definitionem eos.
              </Text>
            </ViewMoreText>
          </View>

          {/* Button */}
          <View
            style={{
              width: "100%",
              marginBottom: 100,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity style={styles.btn}>
              <CartIcon color="#000" size={22} />
              <Text style={styles.textBtn}>Add To Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <PayUpIcon color="#000" size={24} />
              <Text style={styles.textBtn}>Pay Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
