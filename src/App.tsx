import React, {useState} from 'react';
import './App.css';
import {Accordeon} from "./components/Accordeon/Accordeon";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOf/OnOff";
import { UnControlledAccordeon } from './components/SelfControlledAccordeon/UnControlledAccordeon';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)

    return (
        <div>
            <Accordeon title={"Menu1"} collapsed={true}/>
            <Accordeon title={"Menu2"} collapsed={false}/>
            <UnControlledAccordeon title={"юзверя"}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <OnOff />
            <OnOff />
            <UncontrolledRating />
        </div>
    );
}





export default App;
