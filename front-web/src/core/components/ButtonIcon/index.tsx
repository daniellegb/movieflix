import './styles.scss';

type Props = {
    button: string;
}

const ButtonIcon = ({ button } : Props) => (
    <button className="btn-style">
        {button}
    </button>
);

export default ButtonIcon;