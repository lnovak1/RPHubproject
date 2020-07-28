import React from 'react';
import{Link} from 'react-router-dom'
import Logo from '../../assets/Logo.png';
import './Menu.css';
import Button from '../Button'


function Menu(){
    return(    
    <nav className="Menu">
        <Link to="/"> 
        <img  className="Logo" src={Logo} alt="RPHUB"/>
        </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
            teste do botao
        </Button>
    </nav>
    );
}

export default Menu;