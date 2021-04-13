import React, {useState} from "react";


type OnOffType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}


export function UncontrolledOnOff(props: OnOffType) {


   let [on, setOn] = useState(props.defaultOn? props.defaultOn : false)

    const OnStyle = {width: "50px", backgroundColor: on ? "green" : "white", padding: '5px'}
    const OffStyle = {backgroundColor: on ? "white" : "red", width: "50px", padding: '5px'}
    const IndicatorStyle = {marginBottom: '5px',marginLeft: "32px",marginTop: "6px", width: "30px", height: "30px", borderRadius: "15px", border: "1px solid black", backgroundColor: on ? "green" : "red"}
    return <div>
        <button  style={OnStyle} onClick={ () => {setOn(true); props.onChange(true)} }>On</button>
        <button style={OffStyle} onClick={ () => {setOn(false);props.onChange(false)} }>Off</button>
        <div><div style={IndicatorStyle}></div></div>
    </div>
}