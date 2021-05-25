import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1


import {UncontrolledOnOff } from './UncontrolledOnOff';
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff,
}

const UnOnOffMemo = React.memo(UncontrolledOnOff)

const callback = action('clicked')
export const OnMode = () => <UnOnOffMemo onChange={callback} defaultOn={true}/>
export const OffMode = () => <UnOnOffMemo onChange={callback} defaultOn={false}/>
export const EmptyRating = () => <UnOnOffMemo onChange={callback} defaultOn={true}/>
