import React, {useMemo, useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {log} from "util";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1


export default {
    title: 'useMemo Select test',
    component: Select,
}

const SelectMemoHomework = React.memo(Select)


export const HelpsToReactMemoSelect = () => {
    console.log('render')
    const [value, setValue] = useState('2');
    const [items, setItems] = useState(
        [
            {title: "Minsk", value: "1", country: 'Belarus'},
            {title: "Vologda", value: "2", country:'Russia'},
            {title: "Omsk", value: "3",country:'Russia'},
            {title: "Nur-sultan", value: "4", country:'Kazakstan'},
            {title: "New-York", value: "5", country:'USA'}])

    const [counter, setCounter] = useState(0)
    const filteredItems = useMemo(() => {
        return items.filter(u => u.country === 'Russia')
    }, [items])


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <SelectMemoHomework

            onChange={setValue}
            value={value}
            items={filteredItems}
        />

    </>
}

export const BaseExampleWithoutValue = () => {
    const [value, setValue] = useState(null);

    return <>
        <SelectMemoHomework
            value={value}
            onChange={setValue}
            items={[
                {title: "Minsk", value: "1"},
                {title: "Vologda", value: "2"},
                {title: "Omsk", value: "3"},
                {title: "Nur-sultan", value: "4"},
                {title: "New-York", value: "5"},

            ]}/>

    </>
}