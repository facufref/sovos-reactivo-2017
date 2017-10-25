import React from 'react';
import './resources/NewsLeftMenu.scss';
import NewsLeftMenuItem from './NewsLeftMenuItem';

class NewsLeftMenu extends React.Component{
    render(){
        return(
            <div className="sub_menu">
				<div>Menu</div>
					{this.props.alumnosList.map(item => <NewsLeftMenuItem nombre = { item.nombre }	 />)}
				</div>
        );
    }
}

export default NewsLeftMenu;