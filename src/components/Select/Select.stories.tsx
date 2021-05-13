import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1


export default {
    title: 'Select',
    component: Select,
}

export const BaseExampleWithValue = () => {
    const [value, setValue] = useState('2');

    return <>
        <Select
            onChange={setValue}
            value={value}
            items={[
                {title: "Minsk", value: "1"},
                {title: "Vologda", value: "2"},
                {title: "Omsk", value: "3"}

            ]}/>

    </>
}

export const BaseExampleWithoutValue = () => {
    const [value, setValue] = useState(null);

    return <>
        <Select
            value={value}
            onChange={setValue}
            items={[
                {title: "Minsk", value: "1"},
                {title: "Vologda", value: "2"},
                {title: "Omsk", value: "3"}

            ]}/>

    </>
}