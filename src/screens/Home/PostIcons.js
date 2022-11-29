import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

export class PostIcons extends Component {

    constructor(props) {
        super(props);

        const { total_collections, total_likes, total_photos } = this.props.user;
        this.message = total_collections;
        this.reTweet = total_photos;

        this.state = {
            messageClr: "",
            reTweetClr: "",
            likeClr: "",
            shareClr: "",
            icon: "hearto",
            likeCount: total_likes,
            liked: false
        };
    }

    messageClr = () => this.setState({messageClr: "black"})
    reTweetClr = () => this.setState({ reTweetClr: "black" })
    likeClr = () => {
        if(this.state.liked) {
            this.setState({ 
                likeClr: "#555", 
                likeCount: this.state.likeCount - 1,
                icon: "hearto",
                liked: false
            })
        } else {
            this.setState({ 
                likeClr: "crimson", 
                likeCount: this.state.likeCount + 1, 
                icon: "heart",
                liked: true 
            })
        }
    }
    shareClr = () => this.setState({ shareClr: "black" })

    render() {
        return (
            <View style={styles.icons_container}>
                <View style={styles.icon}>
                    <Feather name="message-circle" size={15} style={{color: this.state.messageClr}} onPress={this.messageClr}/>
                    <Text style={styles.count}>{this.message}</Text>
                </View>
                <View style={styles.icon}>
                    <AntDesign name="arrowsalt" size={15} style={{color: this.state.reTweet}} onPress={this.reTweetClr} />
                    <Text style={styles.count}>{this.reTweet}</Text>
                </View>
                <View style={styles.icon}>
                    <AntDesign name={this.state.icon} size={15} style={{color: this.state.likeClr}} onPress={this.likeClr} />
                    <Text style={styles.count}>{this.state.likeCount}</Text>
                </View>
                <View style={styles.icon}>
                    <Feather name="share" size={15} style={{color: this.state.shareClr}} onPress={this.shareClr} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icons_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 10
    },
    icon: {
        flexDirection: "row",
        alignItems: "center"
    },
    count: {
        fontSize: 10,
        marginLeft: 5
    }
})

export default PostIcons