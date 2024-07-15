import styles from './counter.module.css'
function Counter({ count, setCount }) {

    const handlePlus = (e) => {
        setCount(count + 1);
    }

    const handleMinus = (e) => {
        setCount(count - 1);
    }
    return (
        <div className={styles.container_counter}>
            <button disabled={count === 0} onClick={handleMinus} className={styles.button}>-</button>
            <h2 className={styles.counter}>{count}</h2>
            <button onClick={handlePlus} className={styles.button}>+</button>
        </div>
    )
}

export default Counter;