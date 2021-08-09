import React from 'react'
import { useState } from 'react'

const PageLayoutHook = () => {
  const [users, setUsers] = useState([]);
  fetch('/api/users').then(resp => resp.json()).then(res => {
    setUsers(res.data)
  })
  return (
    <div>
      PageLayoutHook：
      <hr/>
      {users.map((item) => 
        <p key={item.key}>{item.name}</p>
      )}
    </div>
  )
}

export default PageLayoutHook
