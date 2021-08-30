import s from './PageContainer.module.css';
import PageItem from '../PageItem/PageItem';

function PageContainer(props) {
    return <div className={s.pageContainer}>
        {
            props.items.map((item, index) => {
                return <PageItem
                    header={item.header}
                    options={item.options}
                    text={item.text}
                    key={index}
                />
            })}
    </div>
}

export default PageContainer;