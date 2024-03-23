import React from "react";
import { styles } from "./style";
import { Image, Pressable, Text, View } from "react-native";

const AuthHeader = ({title, onBackPress}) => {
    return (
        <View style = {styles.container}>
            <Pressable onPress = {onBackPress}>
                <Image
                    style = {styles.iconBack}
                    source = {require('../../image/back_icon.png')}></Image>
            </Pressable>
            <Text style = {styles.title}>{title}</Text>
        </View>
    );
};

export default AuthHeader;