import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { ListingType } from "@/types/listingType";
import Color from "@/constant/Color";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  listings: any[];
};
const Listings = ({ listings }: Props) => {
  const renderItems: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.item}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
          />
          <View style={styles.bookmark}>
            <Ionicons name="bookmarks" size={20}></Ionicons>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={listings}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default Listings;

const styles = StyleSheet.create({
    item:{
        backgroundColor: Color.white,
        padding:10,
        borderRadius:10,
        marginRight:20,
        width: 220,
    },
    image:{
        width: 200,
        height:200,
        borderRadius:10,
        marginBottom:30
    },
    bookmark:{
        position:'absolute',
        top:185,
        right:30,
        backgroundColor:Color.primaryColor,
        padding:10,
        borderRadius:30,
        borderWidth:2,
        borderColor:"#ffffff",
    }
});


