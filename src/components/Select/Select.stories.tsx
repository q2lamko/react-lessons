import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1


export default {
    title: 'Select',
    component: Select,
}

export const BaseExampleWithValue = () =>
    <>
        <Select
            onChange={action("value changed")}
            value={"2"}
            items={[
                {title: "Minsk", value: "1"},
                {title: "Vologda", value: "2"},
                {title: "Omsk", value: "3"}

            ]}/>

    </>

export const BaseExampleWithoutValue = () =>
    <>
        <Select
            onChange={action("value changed")}

            items={[
                {title: "Minsk", value: "1"},
                {title: "Vologda", value: "2"},
                {title: "Omsk", value: "3"}

            ]}/>

    </>
