import React from 'react';
import './resources/NewsMenu.scss';

class NewsMenu extends React.Component{
    render(){
        return(
            <div className="menu">
			<span className="search"><input type="text"  name="search" /> <input type="submit" className="button" value="Buscar" />
			</span>
					<span className="home"><a href="#">Noticias</a></span> 
					<span className="alt"><a href="#">Infragantti</a></span> 
					<span className="alt"><a href="#">Jarriadas</a></span> 
					<span className="alt"><a href="#">Cenas de fin de anio</a></span> 
					<span className="alt"><a href="#">Dia del trabajador</a></span>					
			</div>
        );
    }
}

export default NewsMenu;