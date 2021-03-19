import React from "react";


type AccordeonPropsType = {
    title: string
    collapsed: boolean
}

type AccordeonTitlePropsType = {
    title: string
}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    return <h3>{props.title}</h3>
}

function AccordeonBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export function Accordeon2(props: AccordeonPropsType) {
    if (props.collapsed === true) {
        return (
            <div>
                <AccordeonTitle title={props.title}/>
                <AccordeonBody/>
            </div>)
    } else {
        return <AccordeonTitle title={props.title}/>
    }
}

export function Accordeon(props: AccordeonPropsType) {
    return <div>

    <AccordeonTitle title={props.title}/>
        {!props.collapsed && <AccordeonBody/>}
    </div>
    }