import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import React, { Component } from 'react';
import styles from "./Home.styles";
import Icon from "react-native-vector-icons/Feather";
import twitter from "Images/twitter.png";
import Unsplash from 'unsplash-js';

class Home extends Component {

    render() {
        return (
            <View style={styles.parent}>
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
                <ScrollView style={styles.scrollContainer}>
                    {
                        Array.from("askdfjlasdkfsdfghsd").map((_, i) => {
                            return (
                                <TouchableOpacity style={styles.scrollItem} key={i}>
                                    <Image source={twitter} style={styles.scrollItem_img} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
                {/* news */}
                {/* footernav */}
                <View style={[styles.nav, styles.footer]}>
                    <TouchableOpacity>
                        <Icon name="home" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="hash" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="search" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="mail" size={25} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Home