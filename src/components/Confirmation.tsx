import React, {FC, useState} from 'react'
import { Text, useInput, useApp, Box } from 'ink'

interface Props {
    message?: string
    action?: () => void
}

const uniCheck = "✔"
const uniError = "✖"

const Confirmation: FC<Props> = ({ message, action }) => {
    const app = useApp()

    const [selected, setSelected] = useState(0)

    useInput((_, key) => {
        if (key.upArrow) {
            setSelected(prev => (prev + 1) % 2)
        }

        else if (key.downArrow) {
            setSelected(prev => (prev + 1) % 2)
        }

        else if (key.return) {
            if (selected == 0) {
                action?.()
            } else {
                app.exit()
            }
        }
    })

    return (
        <Box>
            <Text>{message}</Text>
            <Box flexDirection='column'>
                <Box flexDirection='row' gap={1}>
                    {selected == 0 ? <Text>{">"}</Text> : null}
                    <Text color={selected == 0 ? 'green' : ''}>proceed</Text>
                </Box>
                <Box flexDirection='row' gap={1}>
                    {selected == 1 ? <Text>{">"}</Text> : null}
                    <Text color={selected == 1 ? 'red' : ''}>cancel</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Confirmation