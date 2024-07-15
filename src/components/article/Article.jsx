
import styles from './article.module.css'
function Article({ count, article }) {
    return (
        <div className={styles.article_container}>
            <p className={styles.article_id}>{count}</p>
            <h3 className={styles.article_title}>{article.title}</h3>
            <p className={styles.article_body}>
                {article.body}
            </p>
        </div>
    )
}

export default Article;