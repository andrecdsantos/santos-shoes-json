import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import { useState } from 'react';
import useThemeContext from '../../hooks/useThemeContext';

const Header = () => {
    const {theme, toggleTheme} = useThemeContext();
    const [textSearch, setTextSearch] = useState();
    const navigateTo = useNavigate();

    const handleKeyPressed = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            navigateTo(`/buscar/${!textSearch ? 'all' : textSearch}`)
        }
    }

    const handleSearchButtonClick = (e) => {
        e.preventDefault();//evita que a pagina seja recarregada e o formulario seja enviado
        navigateTo(`buscar/${!textSearch? 'all' : textSearch}`);
    }

    return (
        <nav className={`header navbar sticky-top ${theme}`}>
            <div className="container-fluid">
                <div
                    className={`menu-button ${theme}`}
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mainMenu"
                    role="button"
                >
                    <button>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <span>Menu</span>
                </div>
                <Link to={"/"} className={`navbar-brand ${theme}`}>
                    <i className="fa fa-amazon me-2" aria-hidden="true"></i>
                    <h1>SantosShoes</h1>
                </Link>
                <div
                    className="offcanvas offcanvas-start"
                    id="mainMenu"
                    tabIndex="-1"
                    data-bs-backdrop="true"
                    data-bs-keyboard="true"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title">
                        <i className="fa fa-amazon" aria-hidden="true"></i>
                            SantosShoes
                        </h5>
                        <button
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className='navbar-nav nav-underline'>
                            <li>
                                <Link className={`nav-link ${window.location.pathname === '/' ? 'active' : ''}`} to='/'>HOME</Link>
                            </li>
                            <li>
                                <Link className={`nav-link ${window.location.pathname.includes('comprar') ? 'active' : ''}`} to="comprar/95004531">COMPRAR</Link>
                            </li>
                            <li>
                                <Link className={`nav-link ${window.location.pathname.includes('buscar') ? 'active' : ''}`} to="buscar/all">BUSCAR</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='d-flex'>
                <form className="d-none d-md-flex me-2">
                    <input 
                        type="search" 
                        className="form-control me-2" 
                        placeholder="buscar..."
                        onChange={e=> setTextSearch(e.target.value)}
                        onKeyDown={handleKeyPressed}
                        />
                    <button className={`btn ${theme? 'btn-light' : 'btn-dark'}`} onClick={(e)=> handleSearchButtonClick(e)}>
                            <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </form>
                <a className={`darkMode-button ${theme}`} onClick={toggleTheme}>
                    <i className={`${!theme? 'fa fa-toggle-on' : 'fa fa-toggle-off'}`} aria-hidden="true"></i>
                </a>
                </div>
            </div>
        </nav>
    )
}

export default Header;
