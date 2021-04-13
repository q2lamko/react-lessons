import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1



import {action} from "@storybook/addon-actions";
import {Counter} from "./Counter";
import {Increset, IncResetPropsType, ValueType} from "./increset/increset";


export default {
    title: 'IncReset',
    component: Increset,
}
const callback  = action('Counter... ')
export const IncReset = () => <Increset value={0} disabled={false} setValue={callback}/>

export const ModeChanging = () =>{
    const [value, setValue] = useState<ValueType>(0)
    let [disabled, setDisabled] = useState<boolean>(false)
    return <Increset value={value} disabled={disabled} setValue={setValue}/>
}