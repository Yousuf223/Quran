import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { FlatList, Linking, Platform, Share, StyleSheet, Text, View } from 'react-native'
import { backgroundColor, textColor } from '../utils/them'
import RNUpiPayment from 'react-native-upi-payment';

const CustomDrawer = (props) => {

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Try out this app',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    function floo() {
        RNUpiPayment.initializePayment({
            vpa: '+923152520968@upi', // or can be john@ybl or mobileNo@upi
            payeeName: 'Payee Name',
            amount: '1',
            transactionRef: 'some-random-id'
        }, successCallback, failureCallback);
    }
    function failureCallback(data) {
        if (data['Status'] == "SUCCESS") {
            console.log(data)
        }
        else {
            console.log("failed")
        }
    }
    function successCallback(data) {
        //nothing happened here using Google Pay
        console.log("success", data)
    }

    const darwerItems = [
        {
            label: "Share App",
            onPress: onShare
        },
        {
            label: "About us",
            onPress: () => Linking.openURL('https://mywebsite.com/help')
        },
        {
            label: "Support us",
            onPress: floo
        },
    ]

    return (
        <View style={styles.container}>
            <DrawerContentScrollView  {...props}>
                <DrawerItemList {...props} />

                <FlatList
                    data={darwerItems}
                    renderItem={({ item }) => {
                        return <DrawerItem {...item} activeTintColor={textColor} inactiveTintColor={"#fff"} />
                    }}
                    scrollEnabled={false}
                />

            </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
        paddingTop: Platform.OS == "ios" ? 40 : 20
    }
})
