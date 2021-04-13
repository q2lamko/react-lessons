import React, {useState} from "react";


export type OnOffType = {
    on: boolean
    onClick: (on: boolean) => void
}


export function OnOff(props: OnOffType) {

    const OnStyle = {width: "50px", backgroundColor: props.on ? "green" : "white", padding: '5px'}
    const OffStyle = {backgroundColor: props.on ? "white" : "red", width: "50px", padding: '5px'}
    const IndicatorStyle = {marginBottom: '5px',marginLeft: "32px",marginTop: "6px", width: "30px", height: "30px", borderRadius: "15px", border: "1px solid black", backgroundColor: props.on ? "green" : "red"}


    return <div>
        <button style={OnStyle} onClick={ () => (props.onClick(true)) }>On</button>
        <button style={OffStyle} onClick={ () => (props.onClick(false)) }>Off</button>
        <div><div style={IndicatorStyle}></div></div>
    </div>
}