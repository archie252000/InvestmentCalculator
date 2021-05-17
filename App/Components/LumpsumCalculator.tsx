import React, { Fragment, useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import { SliderComponent } from '../Components/SliderComponent'
import { ResultDisplay } from '../Components/ResultDisplay'
import { RatioBar } from '../Components/RatioBar'

import colors from '../../config/colors'

export const LumpsumCalculator: React.FC = () => {

    const [investedAmount, updateInvestedAmount] = useState(0)
    const [returns, updateReturns] = useState(0)

    const [totalInvestments, updateTotalInvestments] = useState(0)
    const [years, updateYears] = useState(0)
    const [rate, updateRate] = useState(0)


    useEffect(
        () => {
            // Calculating invested amount
            updateInvestedAmount(totalInvestments)

            // Calculating resultant amount
            // FV = PV(1+r)^n

            updateReturns(totalInvestments * Math.pow((1 + rate / 100), years))

        },
        [totalInvestments, years, rate]
    )
    return (
        <Fragment>
            <SliderComponent minVal={0} maxVal={1000000} step={1000} heading={'Total Investment(in rupees)'} updateVal={updateTotalInvestments} />
            <SliderComponent minVal={0} maxVal={100} step={1} heading={'Years'} updateVal={updateYears} />
            <SliderComponent minVal={0} maxVal={100} step={1} heading={'Expected Rate of Return(%)'} updateVal={updateRate} />
            <ResultDisplay color={colors.primaryPurple} heading={'Invested Amount'} amount={investedAmount.toString()} />
            <ResultDisplay color={colors.primaryViolet} heading={'Total Returns'} amount={returns ? (returns.toString()) : ('0')} />
            <RatioBar x={investedAmount} y={returns} />
        </Fragment>
    )
}
