import React from "react";
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: Array<ItemType>
}


export function Select(props: SelectPropsType) {

    const selectedItems = props.items.find(i => i.value === props.value)
    return (
        <>
            <select>
                <option value="1">Minsk</option>
                <option value="2">Vologda</option>
                <option value="3">Omsk</option>
            </select>
            <div className={styles.select + "" + styles.active }>

                <h3>{selectedItems && selectedItems.title}</h3>
                <div className={styles.items}>
                {props.items.map(i => <div key={i.value}>{i.title}</div>)}
                </div>
                </div>
        </>
    )
}
