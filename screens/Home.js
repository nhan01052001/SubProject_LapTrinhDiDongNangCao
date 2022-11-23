import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Alert,
  Pressable,
} from "react-native";
import {
  CameraIcon,
  OptionIcon,
  SearchICon,
} from "../components/IconBottomTabs";
import BrandBar from "../components/BrandBar";
import ProductBar from "../components/ProductBar";
import { DATA_SHOE } from "../data/data";

const size = 22;

const DATA_SHOE2 = [
  {
    id: 1,
    name: "Adidas Superstar",
    brand: "Adidas",
    price: 100,
    remainingAmount: 100,
    quantitySold: 200,
    statusHear: true,
    size: [36, 37, 38, 39, 40, 41],
    evaluate: 4.7,
    img: require("../assets/Adidas/Giay_Superstar_trang_EG4958_01_standard-removebg-preview.png"),
  },
  {
    id: 2,
    name: "Adidas Duramo SL",
    brand: "Adidas",
    price: 100,
    remainingAmount: 100,
    quantitySold: 200,
    statusHear: false,
    size: [36, 37, 38, 39, 40, 41],
    evaluate: 4.7,
    img: require("../assets/Adidas/giay-duramo-sl-djen-gv7124-01-standard-removebg-preview.png"),
  },
  {
    id: 3,
    name: "Adidas Stan Smith",
    brand: "Adidas",
    price: 120,
    remainingAmount: 87,
    quantitySold: 1400,
    statusHear: false,
    size: [36, 37, 38, 39, 40, 41],
    evaluate: 4.6,
    img: require("../assets/Adidas/Giay_Stan_Smith_trang_FX5502_01_standard-removebg-preview.png"),
  },
  {
    id: 4,
    name: "Adidas NMD_R1 Primeblue",
    brand: "Adidas",
    price: 119,
    remainingAmount: 457,
    quantitySold: 2346,
    statusHear: false,
    size: [36, 37, 38, 39, 40, 41],
    evaluate: 4.7,
    img: require("../assets/Adidas/Giay_NMD_R1_Primeblue_DJen_GZ9258_01_standard-removebg-preview.png"),
  },
  {
    id: 5,
    name: "Adidas Forum 84",
    brand: "Adidas",
    price: 150,
    remainingAmount: 86,
    quantitySold: 345,
    statusHear: false,
    size: [36, 37, 38, 39, 40, 41],
    evaluate: 4.8,
    img: require("../assets/Adidas/Forum.png"),
  },
  {
    id: 6,
    name: "Nike Air Force 1 Mid QS",
    brand: "Nike",
    price: 150,
    remainingAmount: 45,
    quantitySold: 347,
    statusHear: false,
    size: [36, 37, 38, 39, 40, 41],
    evaluate: 4.7,
    img: require("../assets/Nike/air-force-1-mid-qs-shoes-Bxtdl9-removebg-preview.png"),
  },
  {
    id: 7,
    name: "Nike Air Force 1",
    brand: "Nike",
    price: 100,
    remainingAmount: 1553,
    quantitySold: 402,
    statusHear: false,
    size: [36, 37, 38, 39, 40, 41],
    evaluate: 4.9,
    img: require("../assets/Nike/air-force-1-07-shoes-WrLlWX-removebg-preview.png"),
  },
  {
    id: 8,
    name: "Nike Air Zoom Pegasus 38",
    brand: "Nike",
    price: 149,
    remainingAmount: 987,
    quantitySold: 102,
    statusHear: false,
    size: [31, 32, 33, 34, 35, 36, 37],
    evaluate: 4.7,
    img: require("../assets/Nike/air-zoom-pegasus-38-road-running-shoes-Hmsj6Q-removebg-preview.png"),
  },
  {
    id: 9,
    name: "Nike Air Jordan 1 Low UNC",
    brand: "Nike",
    price: 200,
    remainingAmount: 2302,
    quantitySold: 123,
    statusHear: false,
    size: [35, 36, 37, 38, 39, 40, 41],
    evaluate: 4.8,
    img: require("../assets/Nike/air-jordan-1-low-unc-2021-553558-144-1-removebg-preview.png"),
  },
  {
    id: 15,
    name: "Unisex converse Chuck Taylor All Start",
    brand: "Converse",
    price: 1235,
    remainingAmount: 242,
    quantitySold: 200,
    statusHear: false,
    size: [36, 37, 38, 39, 40, 41],
    evaluate: 4.8,
    img: require("../assets/Converse/giay-sneaker-unisex-converse-chuck-taylor-all-star-1970s-all-hi-white_0-removebg-preview.png"),
  },
  {
    id: 10,
    name: "Unisex converse Chuck Taylor All Start",
    brand: "Converse",
    price: 69,
    remainingAmount: 1236,
    quantitySold: 244,
    statusHear: false,
    size: [36, 37, 38, 39, 40, 41],
    evaluate: 4.8,
    img: require("../assets/Converse/giay-sneaker-unisex-converse-chuck-taylor-all-star-classic-hi-1645555468781_0-removebg-preview.png"),
  },
  {
    id: 11,
    name: "Converse Chuck 70s High AllWhite",
    brand: "Converse",
    price: 60,
    remainingAmount: 473,
    quantitySold: 322,
    statusHear: false,
    size: [36, 37, 38, 39, 40, 41],
    evaluate: 4.8,
    img: require("../assets/Converse/allwhite.png"),
  },
  {
    id: 12,
    name: "Converse Chuck 70s Low Black White",
    brand: "Converse",
    price: 50,
    remainingAmount: 1005,
    quantitySold: 124,
    statusHear: false,
    size: [36, 37, 38, 39, 40, 41],
    evaluate: 4.8,
    img: require("../assets/Converse/lowblack.png"),
  },
  {
    id: 13,
    name: "Converse Vans Old School",
    brand: "Converse",
    price: 59,
    remainingAmount: 2231,
    quantitySold: 124,
    statusHear: false,
    size: [36, 37, 38, 39, 40, 41],
    evaluate: 4.9,
    img: require("../assets/Converse/vans.png"),
  },
  {
    id: 14,
    name: "Supreme x Nike Air More Uptempo sneakers",
    brand: "Supreme",
    price: 1567,
    remainingAmount: 21,
    quantitySold: 11,
    statusHear: false,
    size: [36, 37, 38, 39, 40, 41],
    evaluate: 4.6,
    img: require("../assets/Supreme/duyetfashion-supreme-x-nike-air-more-uptempo-metallic-gold-902290-700-duyet-fashion-1-jpeg-removebg-preview.png"),
  },
  {
    id: 16,
    name: "Supreme x Nike Air More Uptempo sneakers",
    brand: "Supreme",
    price: 599,
    remainingAmount: 12,
    quantitySold: 5,
    statusHear: false,
    size: [36, 37, 38, 39, 40, 41],
    evaluate: 4.5,
    img: require("../assets/Supreme/nike-air-more-uptempo-supreme-do-trang-nam-nu-removebg-preview.png"),
  },
  {
    id: 17,
    name: "PUMA Rebound LayUp Lo Toddler",
    brand: "Puma",
    price: 45,
    remainingAmount: 72,
    quantitySold: 51,
    statusHear: false,
    size: [36, 37, 38, 39, 40, 41],
    evaluate: 4.6,
    img: require("../assets/Puma/PUMA-Rebound-LayUp-Lo-Toddler-Shoes-removebg-preview.png"),
  },
  {
    id: 18,
    name: "PUMA Smash v2 Buck AC Little Kids",
    brand: "Puma",
    price: 40,
    remainingAmount: 24,
    quantitySold: 16,
    statusHear: false,
    size: [36, 37, 38, 39, 40, 41],
    evaluate: 4.6,
    img: require("../assets/Puma/PUMA-Smash-v2-Buck-AC-Little-Kids_-Shoes-removebg-preview.png"),
  },
];

const DATA = [
  {
    id: 1,
    brand: "All",
    statusChoose: false,
  },
  {
    id: 2,
    brand: "Best Sale",
    statusChoose: false,
    icon: require("../assets/best-price.png"),
  },
  {
    id: 3,
    brand: "Adidas",
    statusChoose: false,
    icon: require("../assets/Adidas/adidas.png"),
  },
  {
    id: 4,
    brand: "Nike",
    statusChoose: false,
    icon: require("../assets/Nike/nike.png"),
  },
  {
    id: 5,
    brand: "Converse",
    statusChoose: false,
    icon: require("../assets/Converse/converse.png"),
  },
  {
    id: 6,
    brand: "Supreme",
    statusChoose: false,
    icon: require("../assets/Supreme/Supreme.png"),
  },
  {
    id: 7,
    brand: "Puma",
    statusChoose: false,
    icon: require("../assets/Puma/puma.png"),
  },
];

export const Home = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [listProduct, setListProduct] = useState();
  const [brand, setBrand] = useState("All");
  const [logo, setLogo] = useState();
  const [bestSale, setBestSale] = useState();
  const [listDefault, setListDefault] = useState();

  useEffect(() => {
    const setValue = () => {
      setListProduct(DATA_SHOE);
      setListDefault(DATA_SHOE);
    };
    setValue();
  }, []);

  function search(nameKey, myArray) {
    const arr = [];
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i].brand === nameKey) {
        arr.push(myArray[i]);
      }
    }
    return arr;
  }

  function sort() {
    const arrSort = [];
    DATA_SHOE.sort((a, b) => b.quantitySold - a.quantitySold);
    DATA_SHOE.forEach((e) => {
      // console.log(`${e.id} ${e.name} ${e.quantitySold}`);
      arrSort.push({
        id: `${e.id}`,
        name: `${e.name}`,
        brand: `${e.brand}`,
        price: `${e.price}`,
        remainingAmount: `${e.remainingAmount}`,
        quantitySold: `${e.quantitySold}`,
        statusHear: `${e.statusHear}`,
        size: `${e.size}`,
        evaluate: `${e.evaluate}`,
        img: `${e.img}`,
      });
    });
    return arrSort;
  }

  function sortId() {
    const arrSort = [];
    DATA_SHOE.sort((a, b) => a.id - b.id);
    DATA_SHOE.forEach((e) => {
      // console.log(`${e.id} ${e.name} ${e.quantitySold}`);
      arrSort.push({
        id: `${e.id}`,
        name: `${e.name}`,
        brand: `${e.brand}`,
        price: `${e.price}`,
        remainingAmount: `${e.remainingAmount}`,
        quantitySold: `${e.quantitySold}`,
        statusHear: `${e.statusHear}`,
        size: `${e.size}`,
        evaluate: `${e.evaluate}`,
        img: `${e.img}`,
      });
    });
    return arrSort;
  }

  const handleClickBranBar = (item) => {
    setBrand(item.brand);
    setLogo(item.icon);

    if (item.id === 1) {
      setListProduct(DATA_SHOE);
      console.log(sortId());
    } else if (item.id === 2) {
      setListProduct(sort());
      console.log("---------------------------------");
      console.log(listDefault);
      console.log("---------------------------------");
    } else {
      const obj = search(item.brand, DATA_SHOE);

      setListProduct(obj);

      console.log(obj);
    }
  };

  const clickProduct = (item) => {
    navigation.navigate("DetailProduct", {
      id: item.id,
    });
    // console.log(item.id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.optionAndMe}>
          <TouchableOpacity style={{ position: "absolute", left: 0 }}>
            <OptionIcon color="#000" size={30} />
          </TouchableOpacity>
          <View style={styles.aMess_avt}>
            <Image
              source={require("../assets/bg1-removebg-preview.png")}
              style={styles.wrapAvatarZL}
              // resizeMode="contain"
            />
            <Text>WellCome</Text>
            <Text>Nhân</Text>
          </View>
        </View>
        <Pressable
          onPress={() => navigation.navigate("Search")}
          style={{
            backgroundColor: "#fff",
            marginTop: 50,
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
          {/* <TextInput
            value={value}
            onChangeText={(obj) => setValue(obj)}
            placeholder="Search here"
            placeholderTextColor="#000"
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "#000",
              padding: 12,
              width: "80%",
            }}
          /> */}
          <View
            style={{
              padding: 12,
              width: "80%",
            }}
          >
            <Text style={{ ontSize: 16, fontWeight: "500", color: "#000" }}>
              Search here
            </Text>
          </View>
          <CameraIcon color="#000" size={30} />
        </Pressable>
        <View
          style={{
            backgroundColor: "#fff",
            marginTop: 24,
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "center",
            height: 45,
            borderRadius: 20,
            paddingLeft: 10,
            width: "100%",
            borderColor: "#000",
            borderWidth: 1,
          }}
        >
          <FlatList
            data={DATA}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <BrandBar infor={item} onPress={() => handleClickBranBar(item)} />
            )}
          />
        </View>
      </View>
      <View style={styles.content}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: "20",
              fontWeight: "700",
              marginLeft: 24,
              marginVertical: 12,
              marginRight: 10,
            }}
          >
            {brand} Product
          </Text>
          <Image source={logo} />
        </View>
        <FlatList
          data={listProduct}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductBar product={item} onPress={() => clickProduct(item)} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    height: "35%",
    borderBottomWidth: 1,
    padding: 24,
    justifyContent: "space-around",
  },

  content: {
    height: "65%",
  },

  aMess_avt: {
    justifyContent: "center",
    alignItems: "center",
    // width: "15%",
    position: "absolute",
    right: 0,
  },

  wrapAvatarZL: {
    width: 50,
    height: 50,
    borderRadius: 500,
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 10,
  },

  optionAndMe: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 0,
  },
});
