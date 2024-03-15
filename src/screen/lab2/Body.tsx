import { Text, View } from "react-native";
import { UserType } from "./Main";


//     onUpdateInfo: (user: UserType) => void;
//     onClickChangBgFooter: () => void;
// };

// export const Body: FC<BodyType> = memo(props => {
//     const {onUpdateInfo, onClickChangBgFooter} = props;

//     const {name, setName} = useState('');
//     const {linkImage, setLinkImage} = useState('');

//     const handleChangeInfo = () => {
//         if (name.length > 0 && linkImage > 0) {
//             onUpdateInfo({name, avatar: linkImage});
//         } else {
//             ToastAndroid.show("Không được để trống", ToastAndroid.SHORT);
//         }
//     }
// });

export const Body = () => {
    return (
        <View style = {{height: 590}}>
            <Text>Body</Text>
        </View>
    );
}; 