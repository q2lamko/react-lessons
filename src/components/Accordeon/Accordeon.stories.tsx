import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1


import {Accordeon, AccordeonPropsType } from './Accordeon';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion stories',
    component: Accordeon,
}
const callback  = action('Accordion mode is on fire ')

export const UsersCollapsedMode = () => <Accordeon onClick={callback} title={'Users'} collapsed={true}/>
export const MenuUnCollapsedMode = () => <Accordeon onClick={callback} title={'Menu'} collapsed={false}/>
export const ModeChanging = () =>{
    const [value, setValue] = useState<boolean>(true)
    return <Accordeon  collapsed={value} onClick={() => setValue(!value)} title={"Menu"}/>
}