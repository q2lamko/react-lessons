import React, {useState} from "react";

export default {
    title: "ReactMemo demo"
}


const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)



export const Example1 = () => {
    const addUser = () => {
        let NewUsers = [...users, 'Sveta']
        setUsers(NewUsers)
    }
    const [counter, setCounter] = useState(0)
    const [users,setUsers] = useState(['Dimych', 'Valera', 'Artem'])
    return <>
        <button onClick={()=> setCounter(counter+1)}>+</button>
        <button onClick={addUser}>ADD USER</button>
        <NewMessageCounter count={counter}/>
        <Users users={users}/>
    </>
}