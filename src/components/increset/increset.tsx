import React from 'react';

export type ValueType = number
type IncResetPropsType = {
    value: ValueType
    onClick: (value: ValueType) => void
    disabled: boolean
}

export function Increset(props: IncResetPropsType) {

const onClickHandler = () => props.value < 5 ? props.onClick(props.value+1) : props.onClick(props.value)

    const IncStyle = {fontColor: "white",borderRadius: "6px",backgroundColor: "yellow", width: "60px", height: "40px", margin: "5px", }
    const ResetStyle = {borderRadius: "6px",backgroundColor: "yellow", width: "60px", height: "40px", margin: "5px"}
    const CountStyle = {borderRadius: "6px",marginBottom: "5px", backgroundColor: "yellow", height: "40px", marginTop: "5px",marginLeft: "5px", marginRight: "5px", color: props.value == 5? "green" : "black",  }
    const MainContainerStyle = {backgroundColor: "brown",borderRadius: "6px",border: "1px",borderColor: 'yellow' ,borderStyle: 'solid', width: '160px', height: '120px',marginLeft: "5px"}
    const ButtonContainerStyle = {borderRadius: "6px",border: "1.5px",borderColor: 'yellow' ,borderStyle: 'solid',marginTop: "5px",marginLeft: "5px", marginRight: "5px", height: "55px"}


    return <div style={MainContainerStyle}>
        <div style={CountStyle}>{props.value}</div>
        <div style={ButtonContainerStyle}>
            <button disabled = {props.value < 5 ? false : true} style={IncStyle} onClick= {onClickHandler} >INC</button>
            <button disabled = {props.value <= 0 ? true : false} style={ResetStyle} onClick={() => {props.onClick(0)}}>RESET</button>
        </div>
    </div>
}