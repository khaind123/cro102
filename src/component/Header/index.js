import React, { useState } from "react";
import Input from "../input";
import { styles } from "./style";
import { Image, Text, View } from "react-native";
import { Pressable } from "react-native";

const Header = ({ title, onBackPress, onLogout, showLogout, showSearch, onSearch, keyword, showBack }) => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const onSearchClick = () => {
        setShowSearchInput(s => !s)
    }

    return (
        <View style = {styles.mainContainer}>
            <View style = {styles.container}>
                {showBack ? (
                    <Pressable hitSlop = {20} onPress = {onBackPress}>
                        <Image style = {styles.icon} source = {require('../../image/back.png')}/>
                    </Pressable>
                ) : showSearch ? (
                    <Pressable hitSlop = {20} onPress = {onSearchClick}>
                        <Image style = {styles.icon} source = {require('../../image/search.png')}/>
                    </Pressable>
                ) : <View style = {styles.space}/>}

                <Text style = {styles.title}>{title}</Text>

                {showLogout ? (
                    <Pressable hitSlop = {20} onPress = {onLogout}>
                        <Image style = {styles.icon} source = {require('../../image/logout.png')}/>
                    </Pressable>
                ) : <View style = {styles.space}/>}
            </View>

            {showSearchInput ? (
                <Input onChangeText = {onSearch} value = {keyword} placeholder = "Type your keyword..."/>
            ) : null}
        </View>
    )
}

export default React.memo(Header);