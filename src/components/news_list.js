import React from 'react';

import NewsItem from './news_list_item';


const NewsList = (props) => {

    const items = props.news.map((item) =>{
        return(
            <NewsItem key={item.id} item={item} />
        )

    } );

    return (
        <div className="news_list">
            {items}
        </div>
    )
}

export default NewsList;