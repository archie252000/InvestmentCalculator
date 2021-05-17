import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import colors from '../../config/colors'

interface Props {
    x: number,
    y: number
}


export const RatioBar: React.FC<Props> = ({ x, y }) => {

    const [p, updateP] = useState(1)
    const [q, updateQ] = useState(1)

    useEffect(() => {
        if (x && y) {
            updateP(x)
            updateQ(y)
        }
    }, [x, y])


    return (
        <View style={style.container}>
            <View style={[{ flex: p / (p + q) }, style.x]}></View>
            <View style={[{ flex: 1 - p / (p + q) }, style.y]}></View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            width: "80%",
            height: "8%",
            margin: "10%",
        },
        x: {
            backgroundColor: colors.primaryPurple,
            borderBottomLeftRadius: 50,
            borderTopLeftRadius: 50
        },
        y: {
            backgroundColor: colors.primaryViolet,

            borderBottomRightRadius: 50,
            borderTopRightRadius: 50
        }
    }
)
