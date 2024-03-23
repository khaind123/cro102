import React from "react";
import Main from "./src/screen/lab2/Main";
import Work from "./src/screen/baitap";
import L3B1 from "./src/screen/lab3";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "./src/screen/assignment/signin";
import L3B3 from "./src/screen/lab3/bai3";
import L3B2 from "./src/screen/lab3/bai2";
import L4B1 from "./src/screen/lab4";
import Signup from "./src/screen/assignment/signup";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer independent = "true">
            <Stack.Navigator>
                <Stack.Screen name = "SignIn" component = {Signin} options = {{headerShown: false}}/>
                <Stack.Screen name = "SignUp" component = {Signup}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
    // return (
    //     <L3B2></L3B2>
    // );
};

export default App;
    
//git add .
//git commit -m "lab"
//git push -u origin main