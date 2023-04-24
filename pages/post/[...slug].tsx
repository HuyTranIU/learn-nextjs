import { useRouter } from 'next/router'
import * as React from 'react'

export default function CategotyPage() {
  const route = useRouter()
  return (
    <div>
      Categoty age
      <h1>Quert: {JSON.stringify(route.query)}</h1>
    </div>
  )
}
