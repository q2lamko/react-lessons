import React, {useState} from 'react';
import './App.css';
/*import {Accordeon} from "./components/Accordeon/Accordeon";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {OnOff} from "./components/OnOff/OnOff";
import {Increset,ValueType} from "./components/Counter/increset/increset";*/
import {Counter} from './components/Counter/Counter';
import {UnControlledAccordeon} from './components/UnControlledAccordeon/UnControlledAccordeon';
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff} from "./components/OnOff/OnOff";
import {Accordeon, AccordeonPropsType} from "./components/Accordeon/Accordeon";
import { Verstka } from './components/html/html';

function App() {
    // let [ratingValue, setRatingValue] = useState<RatingValueType>(5)
    let [collapsed, setCollapsed] = useState<boolean>(true)

    const onChange = () => {
        setCollapsed(!collapsed)
    }

    let [on, setOn] = useState<boolean>(false)

    return (
        <div>
            <Counter/>
           <Accordeon
               onClick={()=>{}}
               title={"Menu1"}
               onChange={onChange}
               collapsed={collapsed}
               items={[]}/>
            {/*<Accordeon title={"Menu2"} collapsed={false}/>*/}
            {/*
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <OnOff on={on} onClick={setOn}/>
            <UncontrolledRating />*/}
            <UnControlledAccordeon title={"юзверя"}/>
            <OnOff on={on} onClick={setOn}/>
            <Verstka/>
        </div>
    );
}


export default App;
