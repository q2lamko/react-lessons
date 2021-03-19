import React from "react";


type OnOffType = {
    value: boolean
}


export function OnOff(props: OnOffType) {
    const OnStyle = {width: "50px", backgroundColor: props.value ? "green" : "white"}

    const OffStyle = {backgroundColor: props.value ? "red" : "white", width: "50px",}
    const IndicatorStyle = {margin: "10px", width: "30px", height: "30px", borderRadius: "15px", border: "1px solid black"}
    return <div>
        <button style={OnStyle}>On</button>
        <button style={OffStyle}>Off</button>
        <div style={IndicatorStyle}></div>
    </div>
}