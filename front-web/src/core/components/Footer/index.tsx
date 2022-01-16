import './styles.scss';

function Footer() {
    return (
        <footer>
            <div className="footer">
                <h2 className="text-footer">App desenvolvido por: &nbsp;
                <a href="https://github.com/daniellegb"
                        target="_blank" rel="noreferrer" className="text-footer">
                         Danielle Balogh
                    </a><br />
                    <div className="space">Bootcamp DevSuperior</div>
                </h2>

            </div>
        </footer>
    );
}

export default Footer;