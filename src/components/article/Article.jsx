

function Article({ count, article }) {
    return (
        <div className="article_container">
            <p className="article_id">{count}</p>
            <h3 className="article_title">{article.title}</h3>
            <p className="article_body">
                {article.body}
            </p>
        </div>
    )
}

export default Article