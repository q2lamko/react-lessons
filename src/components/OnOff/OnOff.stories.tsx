import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1


import {OnOff, OnOffType} from './OnOff';
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff stories',
    component: OnOff,
}
const callback  = action('On or Off clicked')
export const OnMode = () => <OnOff on={true} onClick={callback}/>
export const OffMode = () => <OnOff on={false} onClick={callback}/>
export const ModeChanging = () =>{
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onClick={setValue}/>
}