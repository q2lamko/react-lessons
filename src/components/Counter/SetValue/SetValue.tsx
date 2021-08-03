import React, {ChangeEvent, useState} from 'react';

export type ValueType = number
export type SetValuePropsType = {
    value: ValueType
    setValue: (value: ValueType) => void
    disabled: boolean
    maxValue:  ValueType
    setMaxValue: (value:ValueType) => void
    startValue:ValueType
    setStartValue:(value:ValueType) => void
}

export function SetValue(props: SetValuePropsType) {




    const MainContainerStyle = {
        backgroundColor: "brown",
        borderRadius: "6px",
        border: "1px",
        borderColor: 'yellow',
        borderStyle: 'solid',
        width: '300px',
        height: '200px',
        marginLeft: "5px"
    }
    const CountStyle = {
        maxWidth: "100%",
        borderRadius: "6px",
        marginBottom: "5px",
        backgroundColor: "yellow",
        height: "40%",
        marginTop: "5px",
        marginLeft: "5px",
        marginRight: "5px",
        color: props.value == 5 ? "green" : "black",
    }
    const InputStyle = {
        width: '50px',

    }
    const SetStyle = {
        fontColor: "white",
        borderRadius: "6px",
        backgroundColor: "yellow",
        width: "60px",
        height: "40px",
        margin: "5px",
        
    }

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(e.currentTarget.valueAsNumber)
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(e.currentTarget.valueAsNumber)
    }

    const SetValues = () => {
        localStorage.setItem('startValue', JSON.stringify(props.startValue))
        localStorage.setItem('maxValue', JSON.stringify(props.maxValue))

        let startValueAsString = localStorage.getItem('startValue')
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            props.setStartValue(newStartValue)
        }

        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
        let newMaxValue = JSON.parse(maxValueAsString)
        props.setMaxValue(newMaxValue)
            }
    }


    return <div style={MainContainerStyle}>
        <div style={CountStyle}>
            <div>Max Value: <input
                value={props.maxValue}
                style={InputStyle}
                type='number'
                onChange={onChangeMaxValueHandler}
            /></div>
            <div>Start Value: <input
                value={props.startValue}
                style={InputStyle}
                type='number'
                onChange={onChangeStartValueHandler}
            /></div>

        </div>

        <div>
            <div>
                <button style={SetStyle} onClick={SetValues}>SET</button>
            </div>
        </div>
    </div>
}