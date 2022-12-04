import { View, Text } from 'react-native'
import DrawerStyle from './Drawer.style'

const Bookmarks = () => {
  return (
    <View style={DrawerStyle.container}>
      <Text style={DrawerStyle.text}>Bookmarks</Text>
    </View>
  )
}

export default Bookmarks