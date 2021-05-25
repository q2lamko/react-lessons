import React from "react";

type ItemType = {
    title: string
    value: any
}
export type AccordeonPropsType = {
    title: string
    onChange: () => void
    collapsed: boolean
    items: Array<ItemType>
    onClick: (value: any) => void
}
type AccordeonTitlePropsType = {
    title: string
    onChange: () => void

}


const MemoAccordeon = React.memo(AccordeonBody)

export function Accordeon(props: AccordeonPropsType) {
    return <div>

    <AccordeonTitle {...props}/>
        {!props.collapsed && <MemoAccordeon items={props.items} onClick={props.onClick}/>}
    </div>
    }

function AccordeonTitle(props: AccordeonTitlePropsType) {
    return <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
}

type AccordeonBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}
function AccordeonBody(props: AccordeonBodyPropsType) {
    return <ul>

        {props.items.map((e, index) =><li onClick={() => {props.onClick(e.value)}} key={index}>{e.title}</li> )}
    </ul>
}
