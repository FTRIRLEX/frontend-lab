import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [clockState, setClock] = useState();
  useEffect(() => {
   setInterval(() => {
    const date = new Date()
    setClock(date.toLocaleTimeString())
   }, 1000)
  }, [])
  return (
    <h1>{clockState}</h1>
  )
}

export default Clock