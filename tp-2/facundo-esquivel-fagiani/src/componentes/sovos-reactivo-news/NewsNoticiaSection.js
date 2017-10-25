import React from 'react';
import NewsNoticias from './NewsNoticias';

class NewsNoticiaSection extends React.Component{
    render(){
        return(
            <div>
                {this.props.noticiasList.map(item => 
                    <NewsNoticias 
                        noticia = { item }
                    />
                )}
            </div>
        );
    }
}

export default NewsNoticiaSection;