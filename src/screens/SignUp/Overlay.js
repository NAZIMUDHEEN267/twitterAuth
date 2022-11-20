import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';
import React, { Component } from 'react';
import Icon from "react-native-vector-icons/AntDesign";
import globalStyle from "../Global.styles";

export default class Overlay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            emoji: "",
            code: "",
            input: ""
        }
    }

    // data fetching 
    componentDidMount() {
        const data = require("../../data/countryCode.json");
        this.countries = data['countries'];
        this.countryList = this.countries;
    }

    call = (item) => this.props.cb(item)

    // render item method => showing country list
    renderItem({ item }) {
        return (
            <TouchableOpacity style={styles.list} onPress={(item) => this.call(item)}>
                <View style={styles.listItem}>
                    <Text style={styles.emoji}>{item.emoji}</Text>
                    <Text style={styles.phone}>{item.phone}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            </TouchableOpacity>)
    }

    // keyextractor method for flatlist
    keyExtractor = (_, index) => index.toString()

    // searching method for search an item from json file
    searching(input) {
        this.countryList = this.countries.filter(item => {

            const itemName = item.name.toLowerCase();
            const itemInput = input.toLowerCase();

            if (itemName.indexOf(itemInput) > -1 || item.phone.indexOf(input) > -1) {
                return true;
            }
        })

        this.setState({ input });
    }

    render() {
        // when the "show" prop is true then show the elements / otherwise don't
        if (this.props.show) {
            return (
                <View style={[styles.container]}>
                    <View style={styles.overlay}>
                        <Icon name="close" size={30} style={styles.icon} onPress={this.props.close}/>
                        <View style={globalStyle.search}>
                            <Icon name="search1" size={20} style={{ marginRight: 10 }} />
                            <TextInput placeholder="search..." onChangeText={(text) => this.searching(text)} value={this.state.input} />
                        </View>

                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.countryList}
                            renderItem={this.renderItem}
                        />
                    </View>
                </View>
            )
        } else {
            return null;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        elevation: 10,
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#666",
    },
    overlay: {
        paddingTop: 65,
        height: "90%",
        width: "85%",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 8
    },
    icon: {
        position: "absolute",
        top: 10,
        left: 10
    },
    list: {
        height: 50,
        width: "100%",
        marginBottom: 8,
        borderColor: "#999",
        borderWidth: 1,
    },
    listItem: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    emoji: {
        marginLeft: 10
    },
    phone: {
        marginRight: 15,
        marginLeft: 15
    },
    name: {
        fontWeight: "600"
    }
});