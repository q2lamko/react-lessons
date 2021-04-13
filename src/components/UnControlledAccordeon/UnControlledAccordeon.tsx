import React, {useState} from "react";


type AccordeonPropsType = {
    title: string
    collapsed?: boolean
}

type AccordeonTitlePropsType = {
    title: string
    onClick: () => void

}

function AccordeonTitle(props: AccordeonTitlePropsType) {
    return <h3 onClick={() => (props.onClick())}>{props.title}</h3>
}

function AccordeonBody() {
    return <ul>
        <li>PURRI</li>
        <li>DAMIAH</li>
        <li>SHUGMASTA</li>
    </ul>
}


export function UnControlledAccordeon(props: AccordeonPropsType) {

    let [col, setCol] = useState(false)

    return <div>
        <AccordeonTitle title={props.title}  onClick={() => (setCol(!col))}/>

        {!col && <AccordeonBody/>}
    </div>
}