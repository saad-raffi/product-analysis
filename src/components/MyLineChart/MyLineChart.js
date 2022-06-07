import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Area, AreaChart, Bar, CartesianGrid, ComposedChart, Legend, Line, Scatter, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const [chartData, setChartData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartData(data));
    }, [])
    return (
        <div>
        <h3 className=' font-bold text-center text-xl mt-5 mb-5'> monthly sell analysis chart</h3>
         <div className='md:flex md:justify-center md:w-10/12 mx-auto'>
         
         <div className='md:flex-1'>
             <ComposedChart
                 width={500}
                 height={400}
                 data={chartData}
                 margin={{
                     top: 20,
                     right: 20,
                     bottom: 20,
                     left: 20
                 }}
             >
                 <CartesianGrid stroke="#f5f5f5" />
                 <XAxis dataKey="month" />
                 <YAxis />
                 <Tooltip />
                 <Legend />
                 <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                 <Bar dataKey="sell" barSize={20} fill="#413ea0" />
                 <Line type="monotone" dataKey="month" stroke="#ff7300" />
                 <Scatter dataKey="revenue" fill="red" />
             </ComposedChart>
         </div>
         <div className='md:flex-1'>
             <AreaChart
                 width={500}
                 height={400}
                 data={chartData}
                 margin={{
                     top: 10,
                     right: 30,
                     left: 0,
                     bottom: 0,
                 }}
             >
                 <CartesianGrid strokeDasharray="3 3" />
                 <XAxis dataKey="month" />
                 <YAxis />
                 <Tooltip />
                 <Area type="monotone" dataKey="sell" stackId="1" stroke="#8884d8" fill="#8884d8" />
                 <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                 <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
             </AreaChart>
         </div>
     </div>
    </div>
    );
};

export default MyLineChart;