import React, {useMemo, useState} from "react";

export default {
    title: "useMemo select"
}


export const DifficultCounting = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResA = tempResA * i
        }
        return tempResA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}></input>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}></input>


        <hr/>
        <div>
            Result for A: {resultA}
        </div>
        <div>
            Result for B: {resultB}
        </div>

    </>
}



const UsersSecret = (props: { users: Array<string> }) => {
    console.log("usersecret render")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)


export const HelpsToReactMemo = () => {
    console.log('render')

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem','Armatur'])

    const filteredUsers = useMemo(() => {
        return users.filter(u => u.indexOf('a' ) > -1)
    }, [users])

    const addUser = () => {
        let NewUsers = [...users, 'Sveta'];
        setUsers(NewUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}

        <Users users={filteredUsers}/>
    </>
}