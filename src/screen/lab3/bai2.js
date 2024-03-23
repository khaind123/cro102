import React from "react";
import { FlatList, View } from "react-native";
import { styles } from "./style";
import { useSharedValue } from "react-native-reanimated";

const data = new Array(50).fill(0).map((_, index) => ({id: index}));

export default function L3B2() {

  return (
    <View style = {styles.container2}>
      <FlatList data = {data}
                contentContainerStyle = {{paddingTop: 40}}
                renderItem = {() => {
                  return (
                      <View style = {{
                            width: '90%', 
                            height: 80, 
                            backgroundColor: 'blue',
                            alignSelf: 'center',
                            borderRadius: 15,
                            marginTop: 20,
                      }}/>
                  );
                }}/>
    </View>  
  );
}