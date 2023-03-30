import React from 'react';
import './Bookmarked.css'
const Bookmarked = () => {
    return (
        <div>
            <div className='sidebar-title'>
                <h1>Spent time on read : 177 min</h1>
            </div>
            <div className='sidebar-list'>
                <div>
                    <h1>Bookmarked Blogs : 8</h1>
                </div>
                <div className='bookmark-description'>
                    <h3>Master Microsoft Power Platform and Become an In-Demand!</h3>
                </div>
            </div>
        </div>
    );
};

export default Bookmarked;