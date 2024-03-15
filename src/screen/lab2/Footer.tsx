import { FC, memo } from "react";
import { Text, View, ViewStyle } from "react-native";
import { styles } from "./style";

type FooterType = {
    timeUpdate: string;
    backgroundColor: string;
};

export const Footer: FC<FooterType> = memo(props => {
    const {timeUpdate, backgroundColor} = props;

    return (
        <View style = {containerStyle({
            width: 400,
            height: 100,
            backgroundColor: backgroundColor,
            justifyContent: "center",
        })}>
            <Text style = {styles.text}>Thời gian bạn cập nhật thông tin: {timeUpdate}</Text>
        </View>
    );
}); 

//styleText này sẽ nhận tất cả các props style mà thẻ text có
const containerStyle = (props: ViewStyle) => ({
    ...props,
});