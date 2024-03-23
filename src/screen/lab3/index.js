import React from "react";
import { Button, View } from "react-native";
import { styles } from './style';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export default function L3B1() {
    const translateX = useSharedValue(0);

    const handlePress = () => {
        translateX.value += 50;
    };

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: withSpring(translateX.value * 2) }],
    }));

    return (
        <>
            <Animated.View style = {[styles.box, animatedStyles]}/>
            <View style = {styles.container}>
                <Button onPress = {handlePress} title = "Click me"/>
            </View>
        </>
    );
};