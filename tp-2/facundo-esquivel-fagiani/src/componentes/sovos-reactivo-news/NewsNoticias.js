import React from 'react';
import './resources/NewsNoticias.scss';

class NewsNoticias extends React.Component{
    render(){
        return(
            <div>
                <h1 className="news_head">{ this.props.noticia.titulo } </h1>
                <p>{ this.props.noticia.contenido }</p>
                <div className="post_info">
                    { this.props.noticia.fecha } | 
                    Posted by <a href="#">{ this.props.noticia.creador }</a> | 
                    <a href="#">{ this.props.noticia.cantidadComentarios > 0 ? this.props.noticia.cantidadComentarios + ' Comentarios' : 'Sin Comentarios' }</a>
                </div>
			</div>
        );
    }
}

export default NewsNoticias;