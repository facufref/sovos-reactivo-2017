import React from 'react';
import './resources/NewsLeftMenu.scss';

class NewsLeftMenuItem extends React.Component{
    render(){
        return(
            <a href="#">Ver Noticias de <b>{ this.props.nombre }</b></a>
        );
    }
}

export default NewsLeftMenuItem;