import React, {FC, useState} from 'react'
import { Box, Text, useInput } from 'ink'
import CheckBox from 'components/CheckBox.js'

interface Props {
    items: unknown[]
}

const makeChecks = (numChecks: number) => Array.from({length: numChecks}).map(() => false)

const CheckList: FC<Props> = ({items}) => {
    const [checks, setChecks] = useState(makeChecks(items.length))
    const [selectedIndex, setSelectedIndex] = useState(0)
    
    useInput((_, key) => {
        if (key.downArrow) {
            setSelectedIndex(prev => prev + 1 % items.length)
        }

        if (key.upArrow) {
            setSelectedIndex(prev => (prev - 1 + items.length) % items.length) 
        }

        if(key.return) {
            setChecks(prev => {
                const next = [...prev]
                next[selectedIndex] = !next[selectedIndex]
                return next
            })
        }
    })

    return (
        <Box flexDirection='column'>
            {items.map((item, index) => (
                <Box flexDirection='row' margin={0.5} alignItems='center' gap={3} key={index}>
                    {index === selectedIndex ? <Text>{">"}</Text> : null}
                    <Text>{item}</Text>
                    <CheckBox checked={checks[index]} />
                </Box>
            ))}
        </Box>
    )
}

export default CheckList