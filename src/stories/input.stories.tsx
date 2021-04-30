import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1


export default {
    title: 'Example/Input',
    /* component: 'input',*/
}

export const UncontrolledInput = () => <input/>
export const TrackedValueOfUncontrolledInput = () => {
    const [value, setvalue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const ActualValue = e.currentTarget.value;
        setvalue(ActualValue)
    }
    return <> <input onChange={onChange}/> - {value} </>;
}
export const GetTrackedValueOfUncontrolledInputByButtonPress = () => {
    const [value, setvalue] = useState('')
    const InputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = InputRef.current as HTMLInputElement;
        setvalue(el.value)
    }

    return <> <input ref={InputRef}/>
        <button onClick={save}>save</button>
        actual value - {value} </>;
}
export const ControlledInputWithFixedValuee = () => <input value={'it-incubator'}/>

export const ControlledInput = () => {
    const [parentValue, setParentvalue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {setParentvalue(e.currentTarget.value)}
    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentvalue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {setParentvalue(e.currentTarget.checked)}
    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentvalue] = useState<string|undefined>('2')
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {setParentvalue(e.currentTarget.value)}
    return <select value={parentValue} onChange={onChange}>
        <option value={'1'}>none</option>
        <option value={'2'}>Minsk</option>
        <option value={'3'}>Novosibirsk</option>
    </select>
}
