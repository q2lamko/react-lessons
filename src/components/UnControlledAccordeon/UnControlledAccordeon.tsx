import React, {useReducer, useState} from "react";


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

type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"

export const reducer = (state: StateType, action: ActionType):StateType => {

    switch (action.type) {

        case TOGGLE_COLLAPSED:

            return{
                ...state,
                collapsed: !state.collapsed
            }
        default:
             throw new Error("BAD FUCKIN CODE DUDE");
    }
    return state;
}

export function UnControlledAccordeon(props: AccordeonPropsType) {


    // let [collapsed, setCollapsed] = useState(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return <div>
        {/*<AccordeonTitle title={props.title.trim()}  onClick={() => (setCollapsed(!collapsed))}/>*/}
        <AccordeonTitle title={props.title.trim()} onClick={() => (dispatch({type: TOGGLE_COLLAPSED}))}/>

        {!state.collapsed && <AccordeonBody/>}
    </div>
}