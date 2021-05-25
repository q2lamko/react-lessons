import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import {action} from "@storybook/addon-actions";


import {UncontrolledRating} from "./UncontrolledRating";


export default {
    title: 'UnControlled Rating',
    component: UncontrolledRating,
}

const UncRatingMemo = React.memo(UncontrolledRating)

const callback =  action('clicked')
export const EmptyRating = () => <UncRatingMemo defaultValue={0} onChange={callback}/>
export const Rating1 = () => <UncRatingMemo defaultValue={1} onChange={callback}/>
export const Rating2 = () => <UncRatingMemo defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UncRatingMemo defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UncRatingMemo defaultValue={4} onChange={callback}/>
export const Rating5 = () => <UncRatingMemo defaultValue={5} onChange={callback}/>
