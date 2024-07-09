import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError()
    console.log(error)
  return (
    <div>
      <h1>{error.data}</h1>
      <h3>Something went wrong!!! {error.status}</h3>
    </div>
  )
}
