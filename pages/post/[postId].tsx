import { useRouter } from 'next/router'
import * as React from 'react'

export default function DetailPage() {
  const route = useRouter()
  return (
    <div>
      Dtail page page
      <h1>Quert: {JSON.stringify(route.query)}</h1>
    </div>
  )
}
