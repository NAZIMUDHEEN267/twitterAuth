import { View, Text } from 'react-native'
import DrawerStyle from './Drawer.style'

const Profile = () => {
    return (
        <View style={DrawerStyle.container}>
            <Text style={DrawerStyle.text}>Profile</Text>
        </View>
    )
}

export default Profile