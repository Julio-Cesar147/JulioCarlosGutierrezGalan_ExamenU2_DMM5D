import { SectionList, Text, View, SafeAreaView, StyleSheet, StatusBar } from "react-native"
import Header from "../components/header"
import { Avatar, Card } from "@rneui/themed"
import React from "react"

const DATA = [
    {
      title: '',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
  ];
  

export default function Inicio () {
    return (
        <View>
            <Header />
            <SafeAreaView >
                <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                    <View >
                    <Text >{item}</Text>
                    </View>
                )}
                />
            </SafeAreaView>
        </View>  
    )
}