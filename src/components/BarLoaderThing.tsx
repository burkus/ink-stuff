import React, {FC} from 'react'
import { Text, Box } from 'ink'
import { range } from 'lib/index.js'

interface Props {
    radius?: number
}

const BarLoaderThing: FC<Props> = ({radius = 10}) => {
    const [levels, setLevels] = React.useState([0])

    React.useEffect(() => {
        let i = 0
        const interval = setInterval(() => {   
            setLevels(range(0, 20).map(() => {
                const angleIncrease = 1 / 2
                i = (i + angleIncrease) % 360
                return Math.sin(i) * radius
            }))
        }, 300)

        return () => clearInterval(interval)
    }, [setLevels, radius])


    return (
        <Box 
            paddingTop={10} 
            flexDirection='column' 
            justifyContent='center' 
            alignItems='center'
        >
            <Box flexDirection='row' justifyContent='center'>
                {levels.map((level, i) => (
                    <Box 
                        key={i} 
                        borderStyle={'round'} 
                        marginTop={level}
                    >
                            <Text bold underline>^</Text>
                    </Box>
                ))}
            </Box>
            <Box paddingTop={0.5}>
                <Text>Loading...</Text>
            </Box>
        </Box>
    )
}

export default BarLoaderThing