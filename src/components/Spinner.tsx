import React, {FC} from 'react'
import { Text, Box } from 'ink'

interface Props {
    radius?: number
}

const Spinner: FC<Props> = ({radius = 10}) => {
    const [x, setX] = React.useState(0)
    const [y, setY] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => {

        }, 10)

        return () => clearInterval(interval)
    }, [])
    return (
        <Box x={x} y={y}>
            <Text>
                *
            </Text>
        </Box>
    )
}

export default Spinner