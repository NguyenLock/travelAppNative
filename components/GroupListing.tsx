import { View, Text, StyleSheet, FlatList, ListRenderItem, Image } from 'react-native'
import React from 'react';
import { GroupType } from '@/types/groupType';
import Color from '@/constant/Color';
import { Ionicons } from '@expo/vector-icons';


const GroupListing = ({listings}: {listings: GroupType[]}) => {
    const renderItem:ListRenderItem<GroupType> = ({item}) =>{
        return (
            <View style={styles.item}>
                <Image source={{uri: item.image}} style={styles.image}/>
                <View>
                    <Text style={styles.itemTxt}>{item.name}</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Ionicons name='star' size={20} color={Color.primaryColor}/>
                        <Text style={styles.itemRating}>{item.rating}</Text>
                        <Text style={styles.reviewsTxt}>{item.reviews}</Text>
                    </View>
                </View>
            </View>
        )
    }


  return (
    <View style={{marginTop:20}}>
      <Text style={styles.title}>Top Travel Group</Text>
      <FlatList data={listings} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false}></FlatList>
    </View>
  )
}

export default GroupListing

const styles = StyleSheet.create({
    item:{
        backgroundColor: Color.white,
        padding: 10,
        borderRadius:10,
        marginRight:20,
        flexDirection:'row',
        alignItems:'center',
    },
    image:{
        width: 80,
        height: 100,
        borderRadius: 10,
        marginRight: 10
    },
    title:{
        fontSize:22,
        fontWeight:800,
        color:Color.black,
        marginBottom:10,
    },
    itemTxt:{
        fontSize:14,
        fontWeight: 600,
        color: Color.black,
        marginBottom:8
    },
    itemRating:{
        fontSize:14,
        fontWeight:"600",
        color:Color.primaryColor,
        marginLeft:5
    },
    reviewsTxt:{
        fontSize:14,
        color:"#999"
    }
})