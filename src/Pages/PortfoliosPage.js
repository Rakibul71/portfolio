import React, { useState } from 'react';
import Catagories from '../Components/Catagories';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import portfolios from '../Components/AllPortfolios';


const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];


const PortfoliosPage = () => {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) => {
        if (category === 'All') {
            setMenuItems(portfolios)
            return;
        }
        const filteredData = portfolios.filter((item) => {
            return item.category === category;
        })
        setMenuItems(filteredData);
    }
    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolios'} span={'portfolios'} />
            </div>
            <div className="portfolios-data">
                <Catagories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    );
};

export default PortfoliosPage;