import React, { Fragment, useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import { SliderComponent } from '../Components/SliderComponent'
import { ResultDisplay } from '../Components/ResultDisplay'
import { RatioBar } from '../Components/RatioBar'

import colors from '../../config/colors'

export const SipCalculator: React.FC = () => {

    const [investedAmount, updateInvestedAmount] = useState(0)
    const [returns, updateReturns] = useState(0)

    const [monthlyInvestments, updateMonthlyInvestments] = useState(0)
    const [years, updateYears] = useState(0)
    const [rate, updateRate] = useState(0)


    useEffect(
        () => {
            // Calculating invested amount
            updateInvestedAmount(monthlyInvestments * 12 * years)

            // Calculating resultant amount
            let i: number = rate / 100 / 12
            let n: number = 12 * years
            updateReturns((rate == 0 && n != 0) ? (monthlyInvestments * n) : ((monthlyInvestments * (Math.pow((1 + i), n) - 1) / i) * (1 + i)))

        },
        [monthlyInvestments, years, rate]
    )
    return (
        <Fragment>
            <SliderComponent minVal={0} maxVal={50000} step={500} heading={'Monthly Investment(in rupees)'} updateVal={updateMonthlyInvestments} />
            <SliderComponent minVal={0} maxVal={100} step={1} heading={'Years'} updateVal={updateYears} />
            <SliderComponent minVal={0} maxVal={100} step={1} heading={'Expected Rate of Return(%)'} updateVal={updateRate} />
            <ResultDisplay color={colors.primaryPurple} heading={'Invested Amount'} amount={investedAmount.toString()} />
            <ResultDisplay color={colors.primaryViolet} heading={'Total Returns'} amount={returns ? (returns.toString()) : ('0')} />
            <RatioBar x={investedAmount} y={returns} />
        </Fragment>
    )
}
