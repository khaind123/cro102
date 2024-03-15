import { Image, Text, View } from "react-native";
import { UserType } from "./Main";
import { FC, memo } from "react";
import { styles } from "./style";

type HeaderType = {
    user : UserType;
};

export const Header: FC<HeaderType> = memo(props => {
    const {user} = props;
    console.log("re-render header")

    return (
        <View style = {styles.headerStyle}>
            <Image 
                resizeMode = "center"
                style = {styles.avatar}/>
            <View>
                <Text>Chào mừng</Text>
                <Text style = {styles.name}>{user.name}</Text>
            </View>
        </View>
    );
});