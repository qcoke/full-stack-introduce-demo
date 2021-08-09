import React, { useEffect } from 'react'
import { useState } from 'react'

const Welcome = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/api/users').then(resp => resp.json()).then(res => {
            setUsers(res.data)
        })
        return () => { };
    }, [])

    return (
        <div>
            PageLayoutHook：
            <hr />
            {users.map((item) =>
                <p key={item.key}>{item.name}</p>
            )}
        </div>
    )
}

export default Welcome