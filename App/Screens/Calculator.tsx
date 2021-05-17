import React, { useState } from 'react'
import { View, StyleSheet, Text, StatusBar, Platform, useWindowDimensions } from 'react-native'
import colors from '../../config/colors'

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import { SipCalculator } from '../Components/SipCalculator'
import { LumpsumCalculator } from '../Components/LumpsumCalculator'

const FirstRoute = () => (
    <View style={style.calculator}>
        <SipCalculator />
    </View>
);

const SecondRoute = () => (
    <View style={style.calculator}>
        <LumpsumCalculator />
    </View>
);


const renderLabel = ({ route, focused }: any) => {
    if (focused) { return <Text style={{ color: colors.primaryGreen, fontSize: 18, fontWeight: 'bold',minWidth: 100, textAlign: 'center' }}> {route.title} </Text>; }
    return <Text style={{ color: colors.white, fontSize: 18, minWidth: 100, textAlign: 'center' }}> {route.title} </Text>;
}

const renderTabBar = (props: any) => (
    <TabBar
        {...props}
        renderLabel = {renderLabel}
        indicatorStyle={{ backgroundColor: colors.primaryGreen }}
        style={{ backgroundColor: colors.primaryGrey }}
    />
);

export const Calculator: React.FC = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'SIP' },
        { key: 'second', title: 'LUMPSUM' },
    ]);

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
    });




    return (
        <View style={style.container}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
        </View>
    )
}

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: colors.primaryGrey,
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

        },

        calculator: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }

    }
)
