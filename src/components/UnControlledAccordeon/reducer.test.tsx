import {reducer, StateType, TOGGLE_COLLAPSED} from "./UnControlledAccordeon";

test("collapsed shoud be true", () => {
    //data
    const state: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED} )

    //expectation

    expect(newState.collapsed).toBe(true)
})
test("collapsed shoud be false", () => {
    //data
    const state: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED} )

    //expectation

    expect(newState.collapsed).toBe(false)
})