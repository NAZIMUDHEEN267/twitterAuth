import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import styles from "./Home.styles";
import Icon from "react-native-vector-icons/Feather";
import twitter from "Images/twitter.png";

class Home extends Component {
    render() {
        return (
            <View>
                {/* nav */}
                <View style={styles.nav}>
                    <TouchableOpacity>
                        <Icon name="user" size={25} />
                    </TouchableOpacity>
                    <Image source={twitter} style={styles.navIconSize} />
                    <TouchableOpacity>
                        <Icon name="star" size={25} />
                    </TouchableOpacity>
                </View>
                {/* scrollView */}
                {/* news */}
                {/* footernav */}
            </View>
        )
    }
}

export default Home