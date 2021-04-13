import React from "react";


export type AccordeonPropsType = {
    title: string
    onClick: () => void
    collapsed: boolean
}



export function Accordeon(props: AccordeonPropsType) {
    return <div>

    <AccordeonTitle {...props}/>
        {!props.collapsed && <AccordeonBody/>}
    </div>
    }

function AccordeonTitle(props: AccordeonPropsType) {
    return <h3 onClick={(e) => props.onClick()}>{props.title}</h3>
}

function AccordeonBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
