import Link from 'next/link'
import * as React from 'react'

export default function AboutPage() {
  return (
    <div>
      <h1>About page</h1>
      <Link href='/#hashid' legacyBehavior>
        <a>About</a>
      </Link>
    </div>
  )
}
