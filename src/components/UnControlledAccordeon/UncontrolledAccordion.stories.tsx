import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import {action} from "@storybook/addon-actions";

import {UnControlledAccordeon} from "./UnControlledAccordeon";


export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordeon,
}

export const UnAcc = () => <UnControlledAccordeon title={'Gamers'} collapsed={true} />
