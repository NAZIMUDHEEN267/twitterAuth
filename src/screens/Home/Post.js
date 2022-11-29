import { View, Text, Image } from 'react-native'
import React, { Component } from 'react'
import PostIcons from './PostIcons';
import globalStyle from '../Global.styles';

export class Post extends Component {

  constructor(props) {
    super(props);

    const { urls, user, alt_description } = this.props.source;
    this.img = urls.small;
    this.user = user;
    this.name = user.name;
    this.username = user.username;
    this.date = user.updated_at.slice(5, 10).split("-").join("/");
    this.description = alt_description ? alt_description : "some random words";
  }

  render() {
    return (
      <View style={globalStyle.text_container}>
        {/* profile picture */}
        <View style={globalStyle.user_profile}>
          <Image source={{ uri: this.img }} style={globalStyle.user_img} />
        </View>
        <View style={globalStyle.user_content}>
          {/* username */}
          <View style={globalStyle.user_detail}>
            <Text style={globalStyle.username}>{this.name}</Text>
            <Text style={{ fontSize: 12 }}>{`@${this.username}`}</Text>
            <Text style={globalStyle.post_date}>. {this.date}</Text>
          </View>

          {/* post description */}
          <Text style={globalStyle.post_description}>{this.description}</Text>

          {/* post component */}
          <PostIcons user={this.user}/>
        </View>
      </View>
    )
  }
}

export default Post;