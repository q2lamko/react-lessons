import React from "react";

type RatingPropsType = {

}

type StarPropsType = {
    selected: boolean
}

export function Rating(props: RatingPropsType) {
    return    (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    )
}

function Star (props: StarPropsType) {
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}