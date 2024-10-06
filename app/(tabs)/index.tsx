import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, SafeAreaView, Text, View, ScrollView, TouchableOpacity } from "react-native";
import tw from "twrnc";

export default function HomeScreen() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Aquamarine Stack",
      price: "$255.00",
      image: "https://jewelleryphotographymumbai.in/blog/wp-content/uploads/2021/10/ecommerce-nacklace-photography-1024x1024.jpg",
      liked: false,
      is916 : true
    },
    {
      id: 2,
      name: "Gold Diamond",
      price: "$300.00",
      image: "https://jewelleryphotographymumbai.in/blog/wp-content/uploads/2021/11/ring-photography-for-ecommerce-platform.jpg",
      liked: false,
      is916 : false
    },
    {
      id: 3,
      name: "Green Earrings",
      price: "$190.00",
      image: "https://i.pinimg.com/originals/55/61/7d/55617d321f690bee67b399d767843a5f.jpg",
      liked: false,
      is916 : true
    },
    {
      id: 4,
      name: "Gold Bracelet",
      price: "$340.00",
      image: "https://thumbs.dreamstime.com/b/gold-jewelry-golden-bracelets-isolated-white-background-30439023.jpg",
      liked: false,
      is916 : true
    },
    {
      id: 5,
      name: "Green Earrings",
      price: "$190.00",
      image: "https://i.pinimg.com/originals/55/61/7d/55617d321f690bee67b399d767843a5f.jpg",
      liked: false,
      is916 : false
    },
    {
      id: 6,
      name: "Gold Bracelet",
      price: "$340.00",
      image: "https://thumbs.dreamstime.com/b/gold-jewelry-golden-bracelets-isolated-white-background-30439023.jpg",
      liked: false,
      is916 : true
    },
  ]);
  const [isAscending, setIsAscending] = useState(true);

  const toggleSort = () => {
    setIsAscending(!isAscending);
    // Implement sorting logic here
  };
  const toggleLike = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, liked: !product.liked } : product
      )
    );
  };
  const router = useRouter();  // Hook for navigation
  const categories = ["All", "Necklaces", "Earrings", "Rings", "Bracelets", "Watches", "Chains", "Bangles"];

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      {/* Header */}
      <View style={tw`flex-row justify-between items-center p-4`}>
        <View style={tw`flex flex-row gap-2`}>
        <Text style={tw`text-xl text-regular font-mono ml-3`}>{`< THULI />`}</Text>
        </View>
      
        <View style={tw`flex-row`}>
          <TouchableOpacity style={tw`mr-4`}>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
              }}
              style={tw`w-6 h-6`}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/709/709699.png",
              }}
              style={tw`w-6 h-6`}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Promo Banner */}
      <View style={tw`border border-gray-300 p-4 rounded-lg mx-4 mb-4 mt-2 flex-row justify-between items-center`}>
        <View>
          <Text style={tw`text-gray-500 text-lg font-bold`}>Get 20% Off for all Items</Text>
          <Text style={tw`text-gray-500`}>Promo until 20 May 2024</Text>
        </View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1611502723996-d76fc031e264?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          }}
          style={tw`w-16 h-16`}
        />
      </View>

      {/* Categories */}
      <View style={tw`flex flex-row `}>

      <ScrollView horizontal={true} style={tw`mx-5 mt-1`} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={tw`border border-gray-300 p-2 rounded-lg mr-2 h-8 items-center text-center`}>
            <Text>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style = {tw`mx-1`}>
      <TouchableOpacity 
        onPress={toggleSort} 
        style={tw`border border-gray-200 h-9 rounded-lg flex-row items-center justify-center p-2`}
      >
        <Ionicons
          name={isAscending ? "arrow-up" : "arrow-down"} // Icon changes based on the sorting order
          size={20} 
          color="black" 
        />
      </TouchableOpacity>
    </View>

      </View>

      

      {/* Products */}
      <ScrollView style={tw`mx-4 mt-5`}  showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row justify-between flex-wrap`}>
          {products.map((product) => (
            <TouchableOpacity
            key={product.id}
            style={tw`bg-white p-4 rounded-lg shadow-md w-[48%] mb-4`}
            onPress={() => router.push({
              pathname: '/Screens/ProductDetailScreen',
              params: product
            }) }
          >
              <Image
                source={{
                  uri: product.image,
                }}
                style={tw`w-full h-32 object-cover rounded-lg mt-3`}
              />
              <Text style={tw`mt-2 text-lg font-semibold mb-2`}>{product.name}</Text>
              <View style= {tw`w-full h-0.3 mb-1 bg-gray-200`}></View>
              <View style={tw`flex flex-row justify-between`}>
              
              {product.is916 && ( <Text style={tw`mt-1 text-gray-600`}>916</Text>)}
              <Text style={tw`mt-1 text-gray-600`}>{product.price}</Text>
             
              </View>
             
              <TouchableOpacity onPress={() => toggleLike(product.id)} style={tw`absolute top-2 right-2`}>
                <Image
                  source={{
                    uri: product.liked
                      ? "https://cdn-icons-png.flaticon.com/512/833/833472.png" 
                      : "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
                  }}
                  style={tw`w-6 h-6`}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}