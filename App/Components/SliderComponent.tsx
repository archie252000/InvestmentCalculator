import React, { Fragment, useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

import Slider from '@react-native-community/slider';

import colors from '../../config/colors'
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface Props {
    maxVal: number,
    minVal: number,
    step: number,
    heading: string,
    updateVal: React.Dispatch<React.SetStateAction<number>>
}


export const SliderComponent: React.FC<Props> = ({ maxVal, minVal, step, heading, updateVal }) => {

    const [value, setValue] = useState('0')

    useEffect(() => {
        updateVal(Number(value))
    }, [value])

    const onInputChange = (value: string) => {
        let str: string = value.replace(',', '')
        let num: number
        if (str.length > 0) {
            num = Number(str)
        }
        else {
            num = 0
        }


        num = (num < minVal) ? minVal : num
        num = (num > maxVal) ? maxVal : num
        setValue(num.toString())
    }


    return (
        <View style={style.container}>
            <Text style={style.heading}>{heading}</Text>
            <TextInput
                value={value}
                onChangeText={value => onInputChange(value.toString())}
                style={style.inputField}
                keyboardType='numeric'
            />
            <Slider
                style={{ width: "80%" }}
                thumbTintColor={colors.white}
                minimumValue={minVal}
                maximumValue={maxVal}
                step={step}
                minimumTrackTintColor={colors.primaryGreen}
                maximumTrackTintColor="#000000"
                value={Number(value)}
                onValueChange={(value) => setValue(value.toString())}
            />
        </View>

    )
}

const style = StyleSheet.create(
    {
        container: {
            width: "100%",
            alignItems: 'center'
        },
        inputField: {
            borderBottomColor: colors.white,
            borderBottomWidth: 1,
            width: "50%",
            fontSize: 20,
            color: colors.white,
            marginRight: "10%",
            marginBottom: 15

        },
        heading: {
            alignSelf: "flex-start",
            marginLeft: "15%",
            color: colors.white,
            fontWeight: '900',
            fontSize: 18

        }
    }
)
