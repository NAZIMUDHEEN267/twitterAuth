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
import axios from 'axios';
import { API_ROOT, API_KEY, API_PER_PAGE } from "react-native-dotenv";
import TextPost from './TextPost';
import ImgPost from './ImgPost';

class Home extends Component {

    state = {
        data0: [],
        data1: [],
        data2: [],
        news: []
    };

    postMaker() {
        this.state.data1.forEach((source) => {
            let randomNum = Math.round(Math.random() * 100);
            const textComp = <TextPost source={source} />;
            const imgComp = <ImgPost />;

            if (randomNum % 2 === 0) {
                this.setState({ news: [...this.state.news, textComp] });
            } else {
                this.setState({ news: [...this.state.news, imgComp] });
            }
        })
    }


    componentDidMount() {
        // fetching data with 3 api calls
        try {
          Promise.all([
                axios.get(`${API_ROOT}photos${API_KEY}${API_PER_PAGE}&page=1`),
                axios.get(`${API_ROOT}photos${API_KEY}${API_PER_PAGE}&page=2`),
                axios.get(`${API_ROOT}photos${API_KEY}${API_PER_PAGE}&page=3`)
            ]).then(data => {
                data.forEach((source, i) => {
                    this.setState({ [`data${i}`]: [...source.data]})
                });
                this.postMaker();
            })
        } catch (err) {
            console.log(err);
        }
    }

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
                <View style={styles.scrollContainer}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            this.state.data0.map((image, i) => {
                                return (
                                    <View style={styles.scroll_parent} key={i.toString()}>
                                        <TouchableOpacity style={styles.scroll_child} activeOpacity={.6}>
                                            <Image source={{ uri: image.urls.small }} style={styles.scrollItem_img} />
                                        </TouchableOpacity>
                                        <Text style={styles.scroll_text}>{image.user.first_name}</Text>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                {/* news */}
                <View style={styles.news}>
                    {this.state.news}
                </View>
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