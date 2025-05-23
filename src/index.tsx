import React from 'react'
import CheckList from "components/CheckList.js";
import Confirmation from 'components/Confirmation.js';
import LoadingBar from 'components/LoadingBar.js';
import { render } from "ink";

const list = ['do a thing', 'do another thing']

// render(<CheckList items={list} />);
// render(<Confirmation />)

const CounterThing = () => {
    const [count, setCount] = React.useState(0)
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCount((c) => c + 1)
        }, 10)
        return () => clearInterval(interval)
    }, [setCount])
    return <LoadingBar numerator={count} denominator={100} maxLength={100} />
}
render(<CounterThing />)