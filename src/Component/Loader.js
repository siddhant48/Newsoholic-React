import React, { Component } from 'react'
import loader from './loading.gif'

export default function Loader() {
  return (
    <div className="text-center">
      <img className="my-3" src={loader} alt="loading" />
    </div>
  )
}
