import React from "react"

const Stock = (props) => {
    const stock = props.data.filter( d => d.symbol === props.match.params.symbol)[0]
    return (
        <div className="stocks">
            <h3 className="price">Name: {stock.name}</h3>
            <h3 className="price">Price: ${stock.lastPrice}</h3>
            <h3 className="price">Symbol: {stock.symbol}</h3>
            <h3 className="price">Change: {stock.change}</h3>
            <h3 className="price">High: ${stock.high}</h3>
            <h3 className="price">Low: ${stock.low}</h3>
        </div>
    )
}

export default Stock