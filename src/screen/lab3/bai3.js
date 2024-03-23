import React, { useRef } from "react";
import { ScrollView, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { styles } from "./style";

const data = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
];

const Header_Max_Height = 240;
const Header_Min_Height = 120;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;

const DynamicHeader = (AnimatedValue) => {

    const AnimatedHeaderHeight = value.interpolate({
        InputRange: [0, Scroll_Distance],
        OutputRange: [Header_Max_Height, Header_Min_Height],
        Extrapolate: 'clamp',  
    });

    const AnimatedHeaderColor = value.interpolate({
        InputRange: [0, Scroll_Distance],
        OutputRange: [Header_Max_Height, Header_Min_Height],
        Extrapolate: 'clamp',
    });

    return (
        <Animated.View
            style = {[
                styles.header,{
                    height: AnimatedHeaderHeight,
                    backgroundColor: AnimatedHeaderColor,
                },
            ]}>
            <Text style = {styles.title}>Header Content</Text>
        </Animated.View>
    );
};

const L3B3 = () => {
    const scrollOffSetY = useRef(new Animated.Value(0)).current;

    return (
        <View>
            <DynamicHeader value = {scrollOffSetY}/>
            <ScrollView scrollEventThrottle = {5}
                        showsVerticalScrollIndicator = {false}
                        onScroll = {Animated.event([
                {nativeEvent: {contentOffset: {y: scrollOffSetY}}},
                ], {
                    useNativeDriver: false,
                })}>
                    {data.map(val => {
                    return (
                        <View style = {styles.data}>
                            <Text style = {styles.sub}>{val.id}</Text>
                        </View>
                    );
                })}
        </ScrollView>
        </View>
    );
}

export default L3B3;