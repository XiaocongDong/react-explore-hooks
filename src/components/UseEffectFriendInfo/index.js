import React, { useEffect, useState } from 'react'

const fetchUserInfo = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: 'Hello, Sean' })
    }, 1000)
  })
}

export default () => {
  const [userInfo, setUserInfo] = useState()
  useEffect(() => {
    fetchUserInfo()
      .then(userInfo => setUserInfo(userInfo))
  })

  return <div>
    {
      userInfo && userInfo.name
    }
  </div>
}
