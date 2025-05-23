import React, { FC } from 'react'
import { Text } from 'ink'
import { range } from 'lib/index.js'

interface Props {
    numerator: number
    denominator: number
    color?: string
    maxLength?: number
}

const uniCheck = "✔"

const LoadingBar: FC<Props> = ({numerator, denominator, color = 'green', maxLength = 10}) => {
    const safeDenominator = Math.max(denominator, 1)
    const computedPercent = Math.round((numerator / safeDenominator) * maxLength)
    const percent = Math.min(computedPercent, maxLength)
    return (
        <Text>
            [
            <Text color={color}>
                {range(0, percent).map((i) => (
                    <Text key={i}>=</Text>
                ))}
                {range(0, maxLength - percent - 1).map((i) => (
                    <Text key={i}>
                        {" "}
                    </Text>
                ))}
            </Text>
            ]
            {percent === maxLength ? `\t${uniCheck}` : null}
        </Text>
    )
}

export default LoadingBar