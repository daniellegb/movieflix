import { ReactComponent as Arrow } from 'core/assets/images/arrow.svg';
import { generateList } from 'core/utils/list';
import './styles.scss';

type Props = {
    totalPages: number;
    activePage: number;
    onChange: (item: number) => void;
}

const Pagination = ({ totalPages, activePage, onChange }: Props) => {

    const items = generateList(totalPages);
    const previousClass = totalPages > 0 && activePage > 0 ? 'page-active' : 'pageinactive';
    const nextClass = (activePage + 1) < totalPages ? 'page-active' : 'page-inactive';

    return (
        <div className="pagination-container">
            <Arrow
                className={`pagination-previous ${previousClass}`}
                onClick={() => onChange((activePage!==0)? activePage - 1 : activePage)}
            />
            {items.map(item => (
                <div
                    key={item}
                    className={`pagination-item ${item === activePage ? 'active' : ''}`}
                    onClick={() => onChange(item)}
                >
                    {item + 1}
                </div>
            ))}
            <Arrow
                className={`pagination-next ${nextClass}`}
                onClick={() => onChange((activePage <= totalPages)? activePage + 1 : activePage)}
            />
        </div>
    );
}

export default Pagination;