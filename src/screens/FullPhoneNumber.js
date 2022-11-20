import { Text, View, FlatList, StyleSheet } from 'react-native'
import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
    Input,
    Button,
    Overlay,
    ListItem,
    SearchBar,
} from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";


export default class FullPhoneNumber extends Component {

    static propTypes = {
        onchangeText: PropTypes.func,
        errorMessage: PropTypes.string,
        placeholder: PropTypes.string
    }

    static defaultProps = {
        errorMessage: "",
        placeholder: "Phone number"
    }

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
            search: "",
            emoji: "",
            code: "+91"
        }
    }

    componentDidMount() {
        const countries = require("../data/countryCode.json");
        this.co = countries["countries"]
        this.list = this.co
    }

    selectCountry() {
        this.setState({ isVisible: true })
    }

    closeOverlay = () => this.setState({ isVisible: false });

    renderItem = ({ item }) => (
        <ListItem
            title={item.name}
            subtitle={item.phone}
            leftAvatar={{ title: item.emoji }}
            onPress={() => this.selectedCountry(item)}
            bottomDivider
        />
    )

    updateSearch = (search) => {
        this.list = this.co.filter(item => {
            const itemName = item.name.toLowerCase(); // afghanistan
            const itemCode = item.phone.toLowerCase(); // +93
            const textData = search.toLowerCase();

            if (itemName.indexOf(textData) > -1 || itemCode.indexOf(textData) > -1) {
                return true;
            }
        })
        this.setState({ search });
    }

    inputTextChange = (text) => {
        const number = this.state.code + text;
        this.props.onChangeText(number);
    }

    render() {

        const { search } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.buttonViewStyle}>
                    <Button
                        buttonStyle={styles.buttonStyle}
                        titleStyle={styles.buttonTitleStyle}
                        title={this.state.emoji + " " + this.state.code}
                        onPress={() => this.selectCountry()}
                        containerStyle={styles.buttonContainerStyle}
                    />
                </View>

                <View style={styles.inputViewStyle}>
                    <Input
                        keyboardType='number-pad'
                        placeholder={this.props.placeholder}
                        inputStyle={styles.inputStyle}
                        containerStyle={styles.inputContainerStyle}
                        onchangeText={text => this.inputTextChange(text)}
                        errorMessage={this.props.errorMessage}
                    />
                </View>

                <Overlay
                    fullScreen
                    isVisible={this.state.isVisible}
                    onBackdropPress={this.closeOverlay}
                >

                    <View>
                        <Icon
                            name="close"
                            size={30}
                            onPress={this.closeOverlay}
                        />

                        <SearchBar
                            placeholder="Search by country or code"
                            onChangeText={this.updateSearch}
                            value={search}
                            containerStyle={styles.searchBarContainerStyle}
                            inputContainerStyle={styles.searchBarInputContainerStyle}
                            inputStyle={styles.searchBarInputStyle}
                        />

                        <FlatList
                            keyboardShouldPersistTaps="handled"
                            keyExtractor={this.keyExtractor}
                            data={this.list}
                            renderItem={this.renderItem}
                        />
                    </View>
                </Overlay>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "white",
        height: 50
    },
    buttonTitleStyle: {
        color: "black",
        fontSize: 20,
        justifyContent: "center"
    },
    buttonViewStyle: { flex: .3 },
    container: {
        alignItems: "center",
        backgroundColor: "white",
        flexDirection: "row",
        margin: 20,
        marginRight: 20
    },
    inputStyle: {
        fontSize: 20
    },
    inputViewStyle: {
        alignItems: "flex-start",
        justifyContent: "center",
        flex: .7,
        marginTop: 20
    },
    searchBarContainerStyle: {
        backgroundColor: "white",
        borderBottomColor: "white",
        borderTopColor: "white"
    },
    searchBarInputContainerStyle: {
        backgroundColor: "white"
    },
    searchBarInputStyle: {
        color: "black"
    }
});
