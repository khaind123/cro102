import React, { useState } from "react";
import { styles } from "./style";
import { Button, Text, View } from "react-native";
import AuthHeader from "../../../component/AuthHeader";
import Input from "../../../component/input";
import Checkbox from "../../../component/Checkbox";

const Signup = ({navigation}) => {
    const [checked, setChecked] = useState(false);
    const onSignIn = () => {
        navigation.navigate("SignIn");
    };

    const onBack = () => {
        navigation.goBack();
    };

    <View style = {styles.container}>
            <AuthHeader onBackPress = {onBack} title = "Sign Up"/>
            <Input label = "Name"/>
            <Input label = "Email"/>
            <Input label = "Password"/>
            <View style = {styles.checkRow}>
                <Checkbox checked = {checked} onCheck = {setChecked}></Checkbox>
                <Text style = {styles.checkText}>I agree with Terms & Privacy</Text>
            </View>
            <Button style = {styles.button} title = "Sign Up" onPress = {onSignIn}></Button>

            <Text style = {styles.footerText}>
                Already have an account?
                <Text 
                    onPress = {onSignIn}
                    style = {styles.footerLink}>
                    Sign In
                </Text>
            </Text>
        </View> 
}

export default Signup;