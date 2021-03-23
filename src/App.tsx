import React, {useState} from 'react';
import './App.css';
import {Accordeon} from "./components/Accordeon/Accordeon";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOf/OnOff";
import {UnControlledAccordeon} from './components/SelfControlledAccordeon/UnControlledAccordeon';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {OnOffControlled} from "./components/OnOfСControlled/OnOffControlled";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let [collapsed, setCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(false)

    return (
        <div>
             <Accordeon title={"Menu1"} onClick={setCollapsed} collapsed={collapsed}/>
            {/*/!* <Accordeon title={"Menu2"} collapsed={false}/>*!/*/}
            {/* <UnControlledAccordeon title={"юзверя"}/>*/}
            {/* <Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<OnOff />*/}
            <OnOff />
            <OnOffControlled on={on} onClick={setOn}/>
            {/*<UncontrolledRating />*/}
        </div>
    );
}


export default App;
