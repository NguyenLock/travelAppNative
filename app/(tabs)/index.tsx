import Color from "@/constant/Color";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { SearchBar } from "react-native-screens";
import CategoryButton from "@/components/CategoryButton";
import { useState } from "react";
import Listings from "@/components/Listings";
import listingData from "@/data/destination.json";


const Page = () => {
  const headerHeight = useHeaderHeight();

  const [category, setCategory] = useState('All');
  const onCatChanged = (category: string)=>{
    console.log("Category: ", category);
    setCategory(category);
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=female",
                }}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: Color.white,
                padding: 10,
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="notifications" size={20} color={Color.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <Text style={styles.headingText}>Explore The Beautiful World!</Text>

        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={18} style={{marginRight: 5}} color={Color.black} />
            <TextInput placeholder="Search...." placeholderTextColor={"#D3D3D3"} />
          </View>
          <TouchableOpacity onPress={()=> {}}style={styles.filterBtn}>
            <Ionicons name="options" size={28} color={Color.white}/> 
          </TouchableOpacity>
        </View>
        <CategoryButton onCategoryChanged={onCatChanged}/>
        <Listings listings={listingData}/>
      </View>
    </>
  );
};
export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Color.bgColor,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "800",
    color: Color.black,
    marginTop: 10,
  },
  searchSectionWrapper:{
    flexDirection:'row',
    marginVertical:20,

  },
  searchBar:{
    flex:1,
    flexDirection:'row',
    backgroundColor:Color.white,
    padding: 16,
    borderRadius:10,
  },
  filterBtn:{
    backgroundColor:Color.primaryColor,
    padding:12,
    borderRadius:10,
    marginLeft:20,
  }
});
