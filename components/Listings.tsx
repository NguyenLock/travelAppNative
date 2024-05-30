import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ListingType } from "@/types/listingType";
import Color from "@/constant/Color";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

type Props = {
  listings: any[];
  category: string;
};
const Listings = ({ listings, category }: Props) => {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    console.log('Update Listing');
    setLoading(true);

    setTimeout(()=>{
      setLoading(false);
    }, 200)
  }, [category])
  const renderItems: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <View style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.bookmark}>
            <Ionicons
              name="bookmark-outline"
              size={20}
              color={Color.white}
            ></Ionicons>
          </View>
          <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
            {item.name}
          </Text>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <FontAwesome5 name='map-marker-alt' size={10} color={Color.primaryColor}/>
              <Text style={styles.itemLocationTxt}>{item.location}</Text>
            </View>
            <Text style={styles.itemPriceTxt}>${item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
      </Link>
    );
  };
  return (
    <View>
      <FlatList
        data={loading ? [] : listings}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default Listings;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    width: 220,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  bookmark: {
    position: "absolute",
    top: 185,
    right: 30,
    backgroundColor: Color.primaryColor,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#ffffff",
  },
  itemTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: Color.black,
    marginBottom: 10,
  },
  itemLocationTxt:{
    fontSize:12,
    marginLeft:5
  },
  itemPriceTxt: {
    fontSize:12,
    fontWeight:'600',
    color:Color.primaryColor
  },
})