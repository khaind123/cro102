import { View } from "react-native";
import { styles } from "./style";
import { useCallback, useEffect, useState } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";

const colors = ["red", "blue", "green", "yellow", "gray"];

export type UserType = {
    name: string;
};

export default function Main() {
    const [user, setUser] = useState<UserType> ({
        name: "Chưa có tên",
    });

    const [lastTimeUpdate, setLastTimeUpdate] = useState(
        "Bạn chưa cập nhật thông tin",
    );

    const [footerColor, setFooterColor] = useState(colors[0]);

    //Cập nhật thông tin
    const handleUpdateInfo = useCallback((_user: UserType) => {
        setUser(_user);
    }, []);

    //Hàm random màu cho footer
    const handleRandomColor = useCallback(() =>{
        const numberRan = Math.floor(Math.random() * colors.length);
        setFooterColor(colors[numberRan]);
    }, []);

    //Cập nhật thời gian sửa đổi mỗi khi user thay đổi
    useEffect(() => {
        const currentDate = new Date();
        const dateTime = currentDate.getDate() + "/" +
                        (currentDate.getMonth() + 1) + "/" +
                         currentDate.getFullYear();
        setLastTimeUpdate(dateTime);
    }, [user]);

    return (
        <View style = {styles.container}>
            <Header user = {user}/>
            <Body 
                // onUpdateInfo = {handleUpdateInfo}
                // onClickChangBgFooter = {handleRandomColor}
                  />
            <Footer timeUpdate = {lastTimeUpdate} backgroundColor = {footerColor}/>
        </View>
    );
};