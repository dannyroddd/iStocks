import  React from "react"
import { Link } from "react-router-dom"

const Header = () =>{
    return (
        <nav className="nav">
            <div className="nav-item"><span className="nav-logo"><Link to="/">iStocks Home</Link></span></div>
            <div className="nav-item"><Link to="/stocks">Stocks</Link></div>
            <div className="nav-item"><Link to="/about">About</Link></div>
            
        </nav>
    )
}

export default Header