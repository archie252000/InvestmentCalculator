import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import colors from '../../config/colors'


interface Props {
    color: string,
    amount: string,
    heading: string
}


export const ResultDisplay: React.FC<Props> = ({color, amount, heading}) => {
    return (
        <View style = {style.container0}>
            <View style={style.container1}>
                <View style={[{backgroundColor: color}, style.circle]}></View>
                <Text style={style.textStyle0}>{heading}</Text>
                <Text style = {style.textStyle1}>  (in rupees)</Text>
            </View>
            <Text style = {style.textStyle2}>{Math.trunc(Number(amount))}</Text>
            <View style = {style.line}></View>
        </View>
    )
}


const style = StyleSheet.create(
    {   
        container0: {
            width: "80%",
            marginTop: 20
        },
        container1: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        circle: {
            height: 30,
            width: 30,
            borderRadius: 30
        },
        textStyle0: {
            fontSize: 25,
            fontWeight: 'bold',
            color: colors.white,
            marginLeft: 10
        },
        textStyle1: {
            fontSize: 15,
            fontWeight: '600',
            color: colors.white,
        },
        textStyle2: {
            fontSize: 20,
            fontWeight: '800',
            color: colors.white,
            marginTop: 10
        },
        line: {
            height: 1,
            backgroundColor: colors.white,

        }
    }
)