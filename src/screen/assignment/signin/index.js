import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./style";
import Button from "../../../component/button";
import Input from "../../../component/input";

const Signin = ({navigation}) => {
    const onSignUp = () => {
        navigation.navigate("SignUp");
    };

    return (
        <View style = {styles.container}>
            <Image
                resizeMode = "contain"
                style = {styles.img}
                source = {require('../../../image/welcome.jpg')}/>
            
            <Text style = {styles.titleText}>Chào mừng bạn</Text>
            <Text style = {[styles.titleText, styles.centerTitle]}>Hãy đăng nhập tài khoản</Text>
        
            <Input label = "Email"/>
            <Input label = "Password"/>
            <Button
                style = {styles.button}
                title = "Sign In"></Button>

            <Text style = {styles.footerText}>
                Don't have an account?
                <Text
                    onPress = {onSignUp}
                    style = {styles.footerLink}>
                        Sign Up
                    </Text>
            </Text>
        </View>
    );
};

export default Signin;