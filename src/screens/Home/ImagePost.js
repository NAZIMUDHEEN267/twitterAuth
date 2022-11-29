import { View, Text, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import PostIcons from './PostIcons';
import He from "../../assets/Images/twitterBg.png"

export class ImagePost extends Component {

    constructor(props) {
        super(props);

        const { urls, user, description } = this.props.source;
        this.img = urls;
        this.name = user.name;
        this.username = user.username;
        this.date = user.updated_at.slice(5, 10).split("-").join("/");
        this.description = description ? description : "some random words";
    }

    render() {
        return (
            <View style={styles.text_container}>
                {/* profile picture */}
                <View style={styles.user_profile}>
                    <Image source={{ uri: this.props.userImg || this.img.small }} style={styles.user_img} />
                </View>
                <View style={styles.user_content}>
                    {/* username */}
                    <View style={styles.user_detail}>
                        <Text style={styles.username}>{this.name}</Text>
                        <Text style={{ fontSize: 12 }}>{`@${this.username}`}</Text>
                        <Text style={styles.post_date}>. {this.date}</Text>
                    </View>

                    {/* post description */}
                    <Text style={styles.post_description}>{this.description} + </Text>

                    {/* image */}
                    <Image source={{uri: this.img.regular}} style={styles.post_image}/>

                    {/* post component */}
                    <PostIcons />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text_container: {
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 6
    },
    user_profile: {
        flex: .15,
        marginRight: 10
    },
    user_img: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    user_content: {
        flex: .83,
        padding: 2
    },
    user_detail: {
        flexDirection: "row"
    },
    username: {
        fontWeight: "600",
        marginRight: 5,
        color: "#333"
    },
    post_date: {
        color: "#888",
        fontSize: 12,
        marginLeft: 5
    },
    post_description: {
        lineHeight: 19,
        color: "#666"
    },
    post_image: {
        width: "80%",
        height: 200,
        marginVertical: 10
    }
});

export default ImagePost;