import React from 'react';

const NewsItem = ({item}) =>{

   

    return(
        <div className="news_item">
            <h3>{item.title}</h3>
            <div
                onMouseOver={event => {
                    event.target.style.background = "bisque"}}
                onMouseLeave={event => event.target.style.background= "Azure"}>
                {item.feed}
            </div>
        </div>
    )
}

export default NewsItem;
