import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
    ActivityIndicator
} from 'react-native';
import React, { Component } from 'react';
import styles from "./Home.styles";
import Icon from "react-native-vector-icons/Feather";
import twitter from "Images/twitter.png";
import axios from 'axios';
import { API_ROOT, API_KEY, API_PER_PAGE } from "react-native-dotenv";
import TextPost from './Post';
import ImagePost from './ImagePost';

class Home extends Component {

    state = {
        data0: [],
        data1: [],
        data2: [],
        news: [],
        loading: false,
        count: 10
    };

    // get random number
    randomNum = () => Math.round(Math.random() * 30);

    // listing components to news state
    postMaker() {
       this.state.data1.forEach((source, i) => {
        if(this.randomNum() % 2 === 0) {
            const textComp = <TextPost source={source} key={source.id} />
            this.setState({news: [...this.state.news, textComp]});
        } else {
            const imgComp = <ImagePost source={this.state.data2[i]} userImg={source.urls.small} key={source.id}/>
            this.setState({news: [...this.state.news, imgComp]});
        }
       });
        this.setState({ loading: false });
    }

    // data fetching through api
    dataLoad(){
        this.setState({ loading: true });
        try {
            Promise.all([
                axios.get(`${API_ROOT}photos${API_KEY}${API_PER_PAGE}&page=${this.randomNum()}`),
                axios.get(`${API_ROOT}photos${API_KEY}${API_PER_PAGE}&page=${this.randomNum()}`),
                axios.get(`${API_ROOT}photos${API_KEY}${API_PER_PAGE}&page=${this.randomNum()}`)
            ]).then(data => {
                data.length = this.state.count
                data.forEach((source, i) => {
                    this.setState({ [`data${i}`]: [...source.data] });
                });
                this.postMaker();
            })
        } catch (err) {
            console.log(err);
        }
    }

    // data refetching
    refetch() {
        this.setState({count: this.state.count + 10})
        this.dataLoad();
    }

    // fetching data with 3 api calls
    componentDidMount() {
      this.dataLoad();
    }

    footerIndicator() {
        return (
            <View style={styles.loader}>
               {
                this.state.loading ? (
                        <ActivityIndicator
                            size={"large"}
                            color={"blue"}
                        />
                ) : null
               }
            </View>
        )
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
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
                        {
                            this.state.data0.map((image, i) => {
                                {/* user name */}
                                const name = image.user.first_name;
                                return (
                                    <View style={styles.scroll_parent} key={i.toString()}>
                                        <TouchableOpacity style={styles.scroll_child} activeOpacity={.6}>
                                            <Image source={{ uri: image.urls.small }} style={styles.scrollItem_img} />
                                        </TouchableOpacity>
                                        <Text style={styles.scroll_text}>{name.length > 7 ? name.slice(7) : name}</Text>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                {/* news */}
                <View style={styles.news}>
                    <FlatList
                        data={this.state.news}
                        renderItem={({ item }) => item}
                        keyExtractor={(_, i) => i.toString()}
                        onEndReached={this.refetch.bind(this)}
                        ListFooterComponent={this.footerIndicator.bind(this)}
                    />
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
