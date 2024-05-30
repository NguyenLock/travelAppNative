import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ListingDetail = () => {
    const {id} = useLocalSearchParams();
    return (
        <View>
            <Text>ListingDetail</Text>
        </View>
    )
}
export default ListingDetail;

const styles = StyleSheet.create({

});

