

function Counter({ count, setCount }) {

    const handlePlus = (e) => {
        setCount(count + 1);

    }

    const handleMinus = (e) => {
        setCount(count - 1);
    }
    return (
        <div className="counter_container">
            <button disabled={count === 0} onClick={handleMinus} className="button_minus">-</button>
            <h2 className="counter">{count}</h2>
            <button onClick={handlePlus} className="button_plus">+</button>
        </div>
    )
}

export default Counter