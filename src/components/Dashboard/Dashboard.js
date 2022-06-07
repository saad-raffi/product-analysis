import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';

const Dashboard = () => {
   
    return (
        <div>
            <h2 className='text-5xl font-bold'>My Fancy and Exclusive Charts</h2>
            <MyLineChart></MyLineChart>
        </div>
    );
};

export default Dashboard;