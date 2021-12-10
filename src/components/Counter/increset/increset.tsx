import React from 'react';

export type ValueType = number
export type IncResetPropsType = {
    value: ValueType
    setValue: (value: ValueType) => void
    disabled: boolean
    maxValue?: ValueType
    startValue?: ValueType
}

export function Increset(props: IncResetPropsType) {

    const incHandler = () => {
        if (props.maxValue) {
            return props.value < props.maxValue ? props.setValue(props.value + 1) : ""
        }
    }

    let resetHandler = () => {
        console.log('reset clicked')
        console.log(props.startValue )
        if (props.startValue || props.startValue === 0) {
            props.setValue(props.startValue)
        }
    }

    let incDisable = () => {
        if (props.maxValue) {
            return props.value >= props.maxValue
        }
    }
    let resetDisable = () => {
        if (props.startValue) {
            return props.value <= props.startValue
        }
    }

    const IncStyle = {
        fontColor: "white",
        borderRadius: "6px",
        backgroundColor: "yellow",
        width: "60px",
        height: "40px",
        margin: "5px",
    }
    const ResetStyle = {
        borderRadius: "6px",
        backgroundColor: "yellow",
        width: "60px",
        height: "40px",
        margin: "5px"
    }
    const CountStyle = {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        borderRadius: "6px",
        marginBottom: "5px",
        backgroundColor: "yellow",
        height: "40px",
        marginTop: "5px",
        marginLeft: "5px",
        marginRight: "5px",
        color: props.value === 5 ? "green" : "black",
    }
    const MainContainerStyle = {
        backgroundColor: "brown",
        borderRadius: "6px",
        border: "1px",
        borderColor: 'yellow',
        borderStyle: 'solid',
        width: '160px',
        height: '120px',
        marginLeft: "5px"
    }
    const ButtonContainerStyle = {
        borderRadius: "6px",
        border: "1.5px",
        borderColor: 'yellow',
        borderStyle: 'solid',
        marginTop: "5px",
        marginLeft: "5px",
        marginRight: "5px",
        height: "55px"
    }


    return <div style={MainContainerStyle}>
        <div style={CountStyle}>
            <div>{props.value}</div>
        </div>
        <div style={ButtonContainerStyle}>

            <button
                disabled={incDisable()}
                style={IncStyle}
                onClick={incHandler}>INC
            </button>

            <button
                disabled={resetDisable()}
                style={ResetStyle}
                onClick={resetHandler}>RESET
            </button>
        </div>
    </div>
}