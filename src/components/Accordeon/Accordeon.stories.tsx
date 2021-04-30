import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1


import {Accordeon, AccordeonPropsType } from './Accordeon';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion stories',
    component: Accordeon,
}
const callback  = action('Accordion mode is on fire ')
const onClickCallback  = action('some item was clicked')

export const UsersCollapsedMode = () => <Accordeon onChange={callback} title={'Users'} collapsed={true} items={[]} onClick={onClickCallback}/>
export const MenuUnCollapsedMode = () => <Accordeon onChange={callback} title={'Menu'} collapsed={false} items={[{title:"Dimych",value:1},{title:"Olga", value: 2},{title: "Ignat", value: 3}]} onClick={onClickCallback}/>
export const ModeChanging = () =>{
    const [value, setValue] = useState<boolean>(true)
    return <Accordeon  collapsed={value} onChange={() => setValue(!value)} title={"Menu"} items={[{title:"Dimych",value:1},{title:"Olga", value: 2},{title: "Ignat", value: 3}]} onClick={onClickCallback}/>
}