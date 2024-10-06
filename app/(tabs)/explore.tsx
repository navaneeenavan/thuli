import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import tw from "twrnc";

export default function TabTwoScreen() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [isListening, setIsListening] = useState(false);

  // Simulated voice input
  const startListening = async () => {
    setIsListening(true);
    const mockVoiceInput = "mountains"; // Example voice input for demo purposes
    setQuery(mockVoiceInput); // Update the text input with the mock voice input
    fetchUnsplashImages(mockVoiceInput); // Fetch Unsplash images using the mock voice input
    setIsListening(false);
  };

  // Fetch images from Unsplash API
  const fetchUnsplashImages = async (searchQuery) => {
    try {
      // Google Gemini API request to clean up the search query
      const url =
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyCcpvCHpUEUagN5OCzkD17wInXFTabpQRQ";

      const headers = { "Content-Type": "application/json" };

      const data = {
        contents: [
          {
            parts: [
              {
                text: `return only the redefined version such that the query will be understandable for the Unsplash API of the following query: "${searchQuery}"`,
              },
            ],
          },
        ],
      };

      const geminiresponse = await axios.post(url, data, {
        headers: headers,
      });

      const extractedQuery = geminiresponse.data.candidates[0].content.parts[0].text;
      const cleanedQuery = extractedQuery.replace(/json\n|/g, "").trim();
      console.log("Gemini Cleaned Query:", cleanedQuery);

      // Fetch images from Unsplash using the cleaned query
      const unsplashResponse = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            query: cleanedQuery,
            client_id: "rRs1886F-QwY224AacS91QZqKPwiTRzImkAFQGrhgr4", // Your Unsplash API access key
          },
        }
      );
      setImages(unsplashResponse.data.results); // Set images to display them
      console.log("Unsplash Images:", unsplashResponse.data.results);
    } catch (error) {
      console.error("Error fetching images or cleaning query:", error.message);
    }
  };

  // Handle user input (text search)
  const handleTextSearch = () => {
    fetchUnsplashImages(query);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`p-4`}>
        {/* Search Bar */}
        <View style={tw`flex-row items-center bg-gray-100 p-3 rounded-lg`}>
          <TextInput
            style={tw`flex-1 text-lg`}
            placeholder="Search Unsplash..."
            value={query}
            onChangeText={(text) => setQuery(text)}
          />
          <TouchableOpacity onPress={handleTextSearch}>
            <Ionicons name="search" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Voice Search Button */}
        <TouchableOpacity
          onPress={isListening ? null : startListening} // Disable button while "listening"
          style={tw`mt-4 bg-blue-500 p-3 rounded-lg items-center flex-row justify-center`}
        >
          <Ionicons
            name={isListening ? "mic-off" : "mic"}
            size={24}
            color="#fff"
            style={tw`mr-2`}
          />
          <Text style={tw`text-white text-lg`}>
            {isListening ? "Listening..." : "Use Voice Search"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Display Results */}
      <ScrollView style={tw`mx-4 mt-5`}>
        {images.map((image) => (
          <View
            key={image.id}
            style={tw`bg-white p-4 rounded-lg shadow-md mb-4`}
          >
            <Image
              source={{ uri: image.urls.small }}
              style={tw`w-full h-48 object-cover rounded-lg`}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>
              {image.user.name}
            </Text>
            <View style={tw`flex-row flex-wrap`}>
              {image.tags &&
                image.tags.map((tag, index) => (
                  <Text key={index} style={tw`text-gray-500 mr-2`}>
                    #{tag.title}
                  </Text>
                ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}