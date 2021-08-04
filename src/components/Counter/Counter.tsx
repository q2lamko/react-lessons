import React, {useState} from "react";
import {Increset, ValueType} from "./increset/increset";
import { SetValue } from "./SetValue/SetValue";


export const Counter = () => {
    let [maxValue, setMaxValue] = useState<ValueType>(5)
    let [startValue, setStartValue] = useState<ValueType>(0)

    let [value, setValue] = useState<ValueType>(0)
    let [disabled, setDisabled] = useState<boolean>(false)




    return (
        <>

            <SetValue
                value={value}
                setValue={setValue}
                disabled={disabled}
                maxValue={maxValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}
            />

            <Increset
                value={value}
                setValue={setValue}
                disabled={disabled}
                maxValue={maxValue}
                startValue={startValue}

            />
        </>


    )
}