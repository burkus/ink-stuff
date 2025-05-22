import React, {FC} from 'react'
import { Text } from 'ink'

interface Props {
    checked: boolean
}

const uniCheck = "✔"
const uniError = "✖"

const CheckBox: FC<Props> = ({checked}) => {
    const color = checked ? 'green' : 'grey'
    const content = checked ? uniCheck : uniError

    return (
        <Text color={color}>
            {content}
        </Text>
    )
}

export default CheckBox