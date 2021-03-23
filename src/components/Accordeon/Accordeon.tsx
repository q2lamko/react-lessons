import React from "react";


type AccordeonPropsType = {
    title: string
    onClick: (collapsed: boolean) => void
    collapsed: boolean
}

type AccordeonTitlePropsType = {
    title: string
    onClick: (collapsed: boolean) => void
    collapsed: boolean
}

/*export function Accordeon2(props: AccordeonPropsType) {
    if (props.collapsed === true) {
        return (
            <div>
                <AccordeonTitle title={props.title}/>
                <AccordeonBody/>
            </div>)
    } else {
        return <AccordeonTitle title={props.title}/>
    }

}*/

export function Accordeon(props: AccordeonPropsType) {
    return <div>

    <AccordeonTitle title={props.title} collapsed={props.collapsed} onClick={props.onClick}/>
        {!props.collapsed && <AccordeonBody/>}
    </div>
    }

function AccordeonTitle(props: AccordeonTitlePropsType) {
    return <h3 onClick={() => (props.onClick(!props.collapsed))}>{props.title}</h3>
}

function AccordeonBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
