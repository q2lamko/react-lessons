import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import {action} from "@storybook/addon-actions";


import {UncontrolledRating} from "./UncontrolledRating";


export default {
    title: 'UnControlled Rating',
    component: UncontrolledRating,
}



const callback =  action('clicked')
export const EmptyRating = () => <UncontrolledRating defaultValue={0} onChange={callback}/>
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={callback}/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={callback}/>
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={callback}/>
