import styles from './home.module.css'

function Home() {
    return (
        <div>
            <h1>Cars catalog</h1>
            <div>
                <div className={styles.item}>
                    <div
                        className={styles.image}
                        style={{
                        backgroundImage: 'url(/porsche_911.jpeg)',
                        }}
                    />
                    <div className={styles.info}/>
                    <h2>Car 1</h2>
                    <p>$100 000</p>
                    <button>Read more</button>
                </div>
            </div>
        </div>
    )
}

export default Home
