import { View, Text, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import PostIcons from './PostIcons';
import globalStyle from '../Global.styles';

export class ImagePost extends Component {

    constructor(props) {
        super(props);

        const { urls, user, description } = this.props.source;
        this.img = urls;
        this.user = user;
        this.name = user.name;
        this.username = user.username;
        this.date = user.updated_at.slice(5, 10).split("-").join("/");
        this.description = description ? description : "some random words";
    }

    render() {
        return (
            <View style={globalStyle.text_container}>
                {/* profile picture */}
                <View style={globalStyle.user_profile}>
                    <Image source={{ uri: this.props.userImg || this.img.small }} style={globalStyle.user_img} />
                </View>
                
                <View style={globalStyle.user_content}>
                    {/* username */}
                    <View style={globalStyle.user_detail}>
                        <Text style={globalStyle.username}>{this.name}</Text>
                        <Text style={{ fontSize: 12 }}>{`@${this.username}`}</Text>
                        <Text style={globalStyle.post_date}>. {this.date}</Text>
                    </View>

                    {/* post description */}
                    <Text style={globalStyle.post_description}>{this.description} + </Text>

                    {/* image */}
                    <Image source={{uri: this.img.regular}} style={styles.post_image}/>

                    {/* post component */}
                    <PostIcons user={this.user} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    post_image: {
        width: "80%",
        height: 200,
        marginVertical: 10,
        borderRadius: 10
    }
});

export default ImagePost;