import React from 'react';
import { Button, View } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { styles } from './style';

export default function Work() {
    const width = useSharedValue(100);

    const BaiTap = () => {
        width.value = withSpring(width.value + 50);
    };

    return (
        <View style = {styles.container}>
            <Animated.View
                style = {{...styles.box, width}}/>
            <Button onPress = {BaiTap} title = "Click me"/>
        </View>
    );
}