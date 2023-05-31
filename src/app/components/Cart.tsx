import Link from 'next/link'
import React from 'react'
import withAuth from './withAuth'

const Cart = () => {
  return (
    <Link href="/cart" className="btn  me-2 btn-dark">
    Cart
  </Link>
  )
}

export default withAuth(Cart)