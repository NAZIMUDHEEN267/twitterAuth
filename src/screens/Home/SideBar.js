import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated
} from 'react-native';
import { useRef, useContext } from 'react';
import User from "Images/user.png";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import AntiDesign from "react-native-vector-icons/AntDesign";
import MaterialCm from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableHighlight } from 'react-native-gesture-handler';
import userContext from 'Auth/context';

const SideBar = (props) => {

  const linkOne = useRef(new Animated.Value(-70)).current;
  const context = useContext(userContext);
  console.log(context);
  
  context.open = props.navigation.openDrawer;

  function linkOneAnim() {
    Animated.timing(linkOne, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }

  return (
    <View style={styles.sideBar_container}>
      {/* top view */}
      <View style={[styles.user_details, styles.border_bottom]}>
        <View style={styles.user_profile}>
          <Image source={User} style={styles.user_profile_image} />
          <View style={styles.user_profile_menu}>
            <TouchableHighlight style={{ padding: 15 }}>
              <Entypo name="dots-three-vertical" size={22} style={{ borderRadius: 20 }} />
            </TouchableHighlight>
          </View>
        </View>
        <View>
          <Text style={styles.username}>Username</Text>
          <Text style={styles.tw_username}>@Username</Text>
        </View>
        <View style={styles.follow}>
          <Text style={styles.following}>988 Following</Text>
          <Text style={styles.follwers}>32 Followers</Text>
        </View>
      </View>
      {/* center view */}
      <View style={[styles.links, styles.border_bottom]}>
        <TouchableOpacity style={styles.link_container} >
          <Feather name="user" size={22} style={styles.link_icon} onPress={() => props.navigation.navigate("Main")}/>
          <Text style={styles.link_text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link_container} >
          <MaterialCm name="message-processing-outline" size={22} style={styles.link_icon} />
          <Text style={styles.link_text}>Topics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link_container} >
          <Feather name="bookmark" size={22} style={styles.link_icon} />
          <Text style={styles.link_text}>Bookmarks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link_container} >
          <MaterialCm name="newspaper-variant-outline" size={22} style={styles.link_icon} />
          <Text style={styles.link_text}>Lists</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link_container}>
          <MaterialCm name="account-heart-outline" size={22} style={styles.link_icon} />
          <Text style={styles.link_text}>Twitter Circle</Text>
        </TouchableOpacity>
      </View>
      {/* footer view */}
      <View style={styles.app_utils}>
        <View style={styles.dropdowns}>
          <TouchableOpacity style={[styles.link_container, styles.util_btn]} onPress={linkOneAnim}>
            <Text style={styles.util_text}>Creator Studio</Text>
            <AntiDesign name="down" style={styles.util_icon} size={13} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.link_container, styles.util_btn]}>
            <Text style={styles.util_text}>Professional Tools</Text>
            <AntiDesign name="down" style={styles.util_icon} size={13} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.link_container, styles.util_btn]} onPress={linkOneAnim}>
            <Text style={styles.util_text}>Settings & Support</Text>
            <AntiDesign name="down" style={styles.util_icon} size={13} />
          </TouchableOpacity>
        </View>
      </View>

      {/* footer sidebar */}
      <View style={styles.footer_sidebar}>
        <MaterialCm name="lightbulb-on" size={30} />
        <TouchableOpacity onPress={() => context.login("Login")}>
          <MaterialCm name="logout" size={28} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SideBar;

const styles = StyleSheet.create({
  sideBar_container: {
    padding: 20,
    flex: 1
  },
  user_details: {
    flex: 1
  },
  border_bottom: {
    borderBottomColor: "#afc9b6",
    borderBottomWidth: 0.5,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  user_profile: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10
  },
  user_profile_image: {
    backgroundColor: "yellow",
    borderRadius: 25,
    height: 50,
    width: 50
  },
  user_profile_menu: {
    borderRadius: 30,
    overflow: "hidden"
  },
  username: {
    fontWeight: "600",
    fontSize: 15,
    color: "#333"
  },
  tw_username: {
    fontSize: 13
  },
  follow: {
    marginTop: 10,
    flexDirection: "row"
  },
  following: {
    marginRight: 10,
    fontSize: 12,
    color: "#333"
  },
  follwers: {
    fontSize: 12,
    color: "#333"
  },
  links: {
    flex: 2,
    paddingVertical: 10,
    justifyContent: "space-between"
  },
  link_container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center"
  },
  link_icon: {
    color: "#333",
    marginRight: 10,
    fontWeight: "500"
  },
  link_text: {
    color: "#333",
    fontSize: 20,
    fontWeight: "700"
  },
  app_utils: {
    flex: 2
  },
  dropdowns: {
    marginVertical: 10
  },
  util_btn: {
    justifyContent: "space-between"
  },
  util_icon: {
    color: "#333"
  },
  util_text: {
    fontWeight: "600",
    fontSize: 15,
    color: "#333"
  },
  footer_sidebar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  }
})