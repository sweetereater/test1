import s from './PageItem.module.css'

function PageItem(props) {
    return (
        <div className={s.pageItem}>
            <h1>{props.header}</h1>
            <ul className={s.pageList}>
                {
                    props.options.map((option, index) => <li key={index}>{option}</li>)
                }
            </ul>
            <p className={s.pageText}>{props.text}</p>
        </div>
    )
}

export default PageItem;