import React from 'react';
import './App.css';
import {Accordeon} from "./components/Accordeon/Accordeon";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOf/OnOff";

function App() {

    return (
        <div>
            <Accordeon title={"Menu1"} collapsed={true}/>
            <Accordeon title={"Menu2"} collapsed={false}/>
            <Rating/>
            <OnOff value={true}/>
        </div>
    );
}





export default App;
