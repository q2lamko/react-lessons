import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1


import {UncontrolledOnOff } from './UncontrolledOnOff';
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff,
}
const callback = action('clicked')
export const OnMode = () => <UncontrolledOnOff onChange={callback} defaultOn={true}/>
export const OffMode = () => <UncontrolledOnOff onChange={callback} defaultOn={false}/>
export const EmptyRating = () => <UncontrolledOnOff onChange={callback} defaultOn={true}/>
