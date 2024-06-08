import React, { Component } from 'react'
import loading from './Ghost.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div  className='text-center'>
        <img style={{height:"200px",width:"200px", margin:"160px"}} src={loading} alt="loading"/>
      </div>
    )
  }
}
