import useThemeContext from '../../hooks/useThemeContext';
import './Footer.scss';

const Footer = () => {
    const { theme } = useThemeContext()
    return(
        <nav className={`footer navbar ${theme}`}>
            <div className="container-fluid">
                <div className={`navbar-brand ${theme}`}>
                    <i className="fa fa-amazon me-2" aria-hidden="true"></i>
                    <h1>SantosShoes</h1>
                </div>
                <p>&copy;Desenvolvido por @andrecdsantos0</p>
            </div>
        </nav>
    )
}

export default Footer;