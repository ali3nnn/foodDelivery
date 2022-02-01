import React from 'react';
import Cards from './Cards';

const Restaurant = (props: any) => {

    const items = [{
        src: 'https://r.greatfood.ro/res/app_category_list/menu_categories/0001/01/f54d906c064c2529dec379730c06e3c322639c38.jpeg',
        title: 'title',
        desc: 'desc desc desc desc desc desc descdescdesc desc desc desc'
    }, {
        src: 'https://r.greatfood.ro/res/app_category_list/menu_categories/0001/01/f54d906c064c2529dec379730c06e3c322639c38.jpeg',
        title: 'title',
        desc: 'desc desc desc desc desc desc descdescdesc desc desc desc'
    }, {
        src: 'https://r.greatfood.ro/res/app_category_list/menu_categories/0001/01/f54d906c064c2529dec379730c06e3c322639c38.jpeg',
        title: 'title',
        desc: 'desc desc desc desc desc desc descdescdesc desc desc desc'
    }, {
        src: 'https://r.greatfood.ro/res/app_category_list/menu_categories/0001/01/f54d906c064c2529dec379730c06e3c322639c38.jpeg',
        title: 'title',
        desc: 'desc desc desc desc desc desc descdescdesc desc desc desc'
    }, {
        src: 'https://r.greatfood.ro/res/app_category_list/menu_categories/0001/01/f54d906c064c2529dec379730c06e3c322639c38.jpeg',
        title: 'title',
        desc: 'desc desc desc desc desc desc descdescdesc desc desc desc'
    }, {
        src: 'https://r.greatfood.ro/res/app_category_list/menu_categories/0001/01/f54d906c064c2529dec379730c06e3c322639c38.jpeg',
        title: 'title',
        desc: 'desc desc desc desc desc desc descdescdesc desc desc desc'
    }, {
        src: 'https://r.greatfood.ro/res/app_category_list/menu_categories/0001/01/f54d906c064c2529dec379730c06e3c322639c38.jpeg',
        title: 'title',
        desc: 'desc desc desc desc desc desc descdescdesc desc desc desc'
    }, {
        src: 'https://r.greatfood.ro/res/app_category_list/menu_categories/0001/01/f54d906c064c2529dec379730c06e3c322639c38.jpeg',
        title: 'title',
        desc: 'desc desc desc desc desc desc descdescdesc desc desc desc'
    }, {
        src: 'https://r.greatfood.ro/res/app_category_list/menu_categories/0001/01/f54d906c064c2529dec379730c06e3c322639c38.jpeg',
        title: 'title',
        desc: 'desc desc desc desc desc desc descdescdesc desc desc desc'
    }]

    return (
        <div className="w-[60%] m-auto">
            <h1 className="text-left px-10 pt-10 font-bold text-5xl">Categorii</h1>
            <div className="relative p-10 grid grid-cols-4 gap-6">
                {items.map(item => <Cards data={item} />)}
            </div>
        </div>
    );
}

export default Restaurant;
