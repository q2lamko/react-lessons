import React, {useState} from "react";
import {Increset, ValueType} from "./increset/increset";


export const Counter = () => {
    let [value, setValue] = useState<ValueType>(0)
    let [disabled, setDisabled] = useState<boolean>(false)
    return (
    <Increset value={value} setValue={setValue} disabled={disabled}/>
    )
}