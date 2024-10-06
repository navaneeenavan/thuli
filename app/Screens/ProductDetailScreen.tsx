import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import { useRouter } from "expo-router";

export default function ProductDetailScreen({ route }) {
  const product = {
    id: 1,
    name: "Aquamarine Stack",
    price: "₹47,500.00",
    image:
      "https://jewelleryphotographymumbai.in/blog/wp-content/uploads/2021/10/ecommerce-nacklace-photography-1024x1024.jpg",
    liked: false,
    is916: true,
    description:
      "Our simple gemstone stacker is sweet on its own or in multiples for a unique stack. Whether you choose.Our simple gemstone stacker is sweet on its own or in multiples for a unique stack. Whether you choose.Our simple gemstone stacker is sweet on its own or in multiples for a unique stack. Whether you choose.",
  };

  const [selectedSize, setSelectedSize] = useState("4.0"); // Default ring size
  const router = useRouter();
  const sizes = ["4.0", "4.5", "5.0", "5.5", "6.0", "6.5"];

  const relatedProducts = [
    {
      id: 1,
      name: "Radiant Weight Double Chain",
      price: "₹68,990.00",
      image:
        "https://sencowebfiles.s3.ap-south-1.amazonaws.com/products/kaBA4LmF69cD90f7upOi1ky4wjr1pN2GFNnjJUI6.jpeg",
    },
    {
      id: 2,
      name: "Light  Floral Pearl Necklace",
      price: "₹34,403.00",
      image:
        "https://cdn1.jewelxy.com/live/img/business_product/7OOQveQu2n_20220323155709.jpg",
    },
    {
      id: 3,
      name: "Minimalist Chain with Pendant",
      price: "₹45,000.00",
      image:
        "https://www.sneharateria.com/cdn/shop/products/GardenofEnchantment_800x.png?v=1613980058",
    },
  ];
  const otherProducts = [
    {
      id: 1,
      name: "Radiant Weight Double Chain",
      price: "₹68,990.00",
      image:
        "https://jewelleryphotographymumbai.in/blog/wp-content/uploads/2022/04/jewellery-photography-with-white-background.webp",
    },
    {
      id: 2,
      name: "Light  Floral Pearl Necklace",
      price: "₹34,403.00",
      image:
        "https://jewelleryphotographymumbai.in/blog/wp-content/uploads/2017/11/gold-jewelry-2920596_960_720.jpg",
    },
    {
      id: 3,
      name: "Minimalist Chain with Pendant",
      price: "₹45,000.00",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/10/356048362/FC/SN/XQ/161492056/wedding-jewellery-photography-services-500x500.jpg",
    },
  ];
  const skinTones = [
    "bg-[#F2D6CB]",
    "bg-[#E6A57E]",
    "bg-[#C68642]",
    "bg-[#8D5524]",
  ];
  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      {/* Custom Back Button */}

      {/* Product Image */}
      <View style={tw`p-4`}>
        <Image
          source={{ uri: product.image }}
          style={tw`w-full h-96 object-cover rounded-t-lg`}
        />
      </View>
      <View>
        <View style={tw`flex flex-row justify-center`}>
          <View style={tw`flex flex-col justify-center mb-5 gap-2`}>
            <View style={tw`flex flex-row `}>
              {skinTones.map((tone, index) => (
                <View
                  key={index}
                  style={tw`h-8 w-8  rounded-full ${tone}`}
                ></View>
              ))}
            </View>
            <Text style={tw`ml-8`}>Skin Tone</Text>
          </View>
        </View>
      </View>
      <View style={tw`p-4`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-xl font-bold`}>{product.name}</Text>
          <View style={tw`bg-gray-100 px-3 py-1 rounded-full`}>
            <Text style={tw`text-xl font-bold text-green-600`}>
              {product.price}
            </Text>
          </View>
        </View>
        <View style={tw`h-0.2 bg-gray-400 my-5`}></View>
        <Text style={tw`text-gray-500 mt-2`}>{product.description}</Text>
        <Text style={tw`mt-6 text-lg font-semibold`}> Size</Text>

        <View style={tw`flex-row flex-wrap mt-2`}>
          {sizes.map((size) => (
            <TouchableOpacity
              key={size}
              onPress={() => setSelectedSize(size)}
              style={[
                tw`border rounded-lg p-2 m-1`,
                size === selectedSize
                  ? tw`bg-green-100 border-green-600`
                  : tw`border-gray-300`,
              ]}
            >
              <Text
                style={
                  size === selectedSize ? tw`text-green-600` : tw`text-gray-600`
                }
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={tw`bg-white p-1 mt-5`}>
          <Text style={tw`text-lg font-semibold`}>Price Break Up</Text>
          <View style={tw`flex-row justify-between mt-4`}>
            <Text style={tw`text-gray-600`}>Gold Value</Text>
            <Text style={tw`text-black`}>₹37,479.68</Text>
          </View>
          <View style={tw`flex-row justify-between mt-2`}>
            <Text style={tw`text-gray-600`}>V.A</Text>
            <Text style={tw`text-black`}>₹8,245.53</Text>
          </View>
          <View style={tw`flex-row justify-between mt-2`}>
            <Text style={tw`text-gray-600`}>G.S.T 3%</Text>
            <Text style={tw`text-black`}>₹1,371.76</Text>
          </View>
          <View style={tw`h-0.2 bg-gray-400 my-5`}></View>
          <View style={tw`flex flex-row justify-between`}>
            <Text style={tw`text-black flex`}>Total</Text>
            <Text style={tw`text-black flex`}>₹47,571.76</Text>
          </View>
        </View>
        <View style={tw`mt-5`}>
          {/* Basic Information */}
          <View style={tw`mb-6`}>
            <View style={tw`flex-row items-center mb-2`}>
              <Ionicons
                name="information-circle-outline"
                size={24}
                color="black"
              />
              <Text style={tw`ml-2 text-lg font-bold text-brown-600`}>
                Basic Information
              </Text>
            </View>
            <View style={tw`bg-white p-4 rounded-lg`}>
              <View style={tw`flex-row justify-between mb-2`}>
                <Text style={tw`text-gray-600`}>SKU</Text>
                <Text style={tw`text-black`}>JAN00D</Text>
              </View>
              <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-gray-600`}>Quantity</Text>
                <Text style={tw`text-black`}>1</Text>
              </View>
            </View>
          </View>

          {/* Metal Information */}
          <View style={tw`mb-6`}>
            <View style={tw`flex-row items-center mb-2`}>
              <Ionicons name="cube-outline" size={24} color="black" />
              <Text style={tw`ml-2 text-lg font-bold text-brown-600`}>
                Metal Information
              </Text>
            </View>
            <View style={tw`bg-white p-4 rounded-lg`}>
              <View style={tw`flex-row justify-between mb-2`}>
                <Text style={tw`text-gray-600`}>Gold Purity</Text>
                <Text style={tw`text-black`}>22 KT</Text>
              </View>
              <View style={tw`flex-row justify-between mb-2`}>
                <Text style={tw`text-gray-600`}>Metal Color</Text>
                <Text style={tw`text-black`}>Yellow</Text>
              </View>
              <View style={tw`flex-row justify-between mb-2`}>
                <Text style={tw`text-gray-600`}>Item Gross Wt (gm)</Text>
                <Text style={tw`text-black`}>5.264</Text>
              </View>
              <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-gray-600`}>Item Net Wt (gm)</Text>
                <Text style={tw`text-black`}>5.264</Text>
              </View>
            </View>
          </View>

          {/* Product Dimension */}
          <View style={tw`mb-6`}>
            <View style={tw`flex-row items-center mb-2`}>
              <Ionicons name="resize-outline" size={24} color="black" />
              <Text style={tw`ml-2 text-lg font-bold text-brown-600`}>
                Product Dimension
              </Text>
            </View>
            <View style={tw`bg-white p-4 rounded-lg`}>
              <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-gray-600`}>Chain Length (cm)</Text>
                <Text style={tw`text-black`}>46</Text>
              </View>
            </View>
          </View>

          {/* Certification Details */}
          <View style={tw`mb-6`}>
            <View style={tw`flex-row items-center mb-2`}>
              <Ionicons name="ribbon-outline" size={24} color="black" />
              <Text style={tw`ml-2 text-lg font-bold text-brown-600`}>
                Certification Details
              </Text>
            </View>
            <View style={tw`bg-white p-4 rounded-lg`}>
              <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-gray-600`}>Metal Certification</Text>
                <Text style={tw`text-black`}>BIS HUID HALLMARKED 916</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={tw`p-4 mt-3`}>
          <TouchableOpacity
            onPress={() => alert("Added to cart")}
            style={tw` p-4 rounded-lg items-center flex-row justify-center bg-[#FFD700]`}
          >
            <Ionicons name="cart-outline" size={24} color="black" />
            <Text style={tw`text-black text-lg ml-2`}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={tw`p-4`}>
        <Text style={tw`text-lg font-semibold mb-2`}>Similar Products</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {relatedProducts.map((item) => (
            <View key={item.id} style={tw`bg-white shadow-md p-4 rounded-lg mr-4 w-48`}>
              <Image
                source={{ uri: item.image }}
                style={tw`w-full h-32 object-cover rounded-lg`}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.name}</Text>
              <Text style={tw`mt-1 text-gray-600`}>{item.price}</Text>
              <TouchableOpacity
                onPress={() => alert('Added to cart')}
                style={tw`mt-2 bg-green-600 p-2 rounded-lg flex-row justify-center items-center`}
              >
                <Ionicons name="cart-outline" size={20} color="white" />
                <Text style={tw`text-white ml-2`}>Add</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={tw`p-4`}>
        <Text style={tw`text-lg font-semibold mb-2`}>Other Products</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {otherProducts.map((item) => (
            <View key={item.id} style={tw`bg-white shadow-md p-4 rounded-lg mr-4 w-48`}>
              <Image
                source={{ uri: item.image }}
                style={tw`w-full h-32 object-cover rounded-lg`}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.name}</Text>
              <Text style={tw`mt-1 text-gray-600`}>{item.price}</Text>
              <TouchableOpacity
                onPress={() => alert('Added to cart')}
                style={tw`mt-2 bg-green-600 p-2 rounded-lg flex-row justify-center items-center`}
              >
                <Ionicons name="cart-outline" size={20} color="white" />
                <Text style={tw`text-white ml-2`}>Add</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      


      <View style={tw`p-4  mt-4 rounded-lg mt-2 flex items-center justify-center text-center`}>
        <Ionicons
          name="shield-checkmark-outline"
          size={24}
          color="black"
          style={tw` flex mb-2 justify-center`}
        />
        <Text style={tw`text-lg font-semibold mb-2`}>
          SAFE & SECURE DELIVERY
        </Text>
        <Text style={tw`text-gray-600 text-center`}>
          Your jewellery is the most prized possession and should be cared for
          well. We ensure a safe delivery only via trusted logistics services in
          India.
        </Text>
      </View>
    </ScrollView>
  );
}
