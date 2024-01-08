import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <section>
      <div className="container">
        <div className='box upper'>
          <h2>DIGITAL</h2>
          <h2>PLANNING</h2>
          <p>We created the SOLUTION for your floor build. We all been there;  chose 
            a floor design for our new home, and when applied  you don't like it!
            That's why we created the digital floor planner.
          </p>
          <div className="cta">
            <Link to="/configurator">Configurate your floor</Link>
            <Link to="register">Create Account</Link>
          </div>
        </div>

        <div className='box lower'>
          <h1>DEFINING</h1>
          <h1>&#169;FLOORS&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        </div>
      </div>
    </section>
  )
}
