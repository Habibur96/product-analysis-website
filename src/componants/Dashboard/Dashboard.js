import React from 'react';

import './Dashboard.css'

import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Label, LabelList, Legend, Line, LineChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        },
    ];

    return (
        <div className='chart' >

            <LineChart
                width={700} height={400}
                data={data} >
                <Line dataKey={"investment"} stroke="#8884d8"></Line>
                <Line dataKey={"revenue"} stroke="#82ca9d"></Line>
                <XAxis dataKey={"month"}>
                </XAxis>
                <Tooltip></Tooltip>

                <YAxis></YAxis>

            </LineChart>


            <ComposedChart width={730} height={250} data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
            </ComposedChart>


            <RadarChart outerRadius={90} width={730} height={250} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="month" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="" dataKey="investment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Tooltip></Tooltip>
                <Legend />
            </RadarChart>



            <BarChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month">
                    <Label value="Pages of my website" offset={0} position="insideBottom" />
                </XAxis>
                <YAxis label={{ value: 'pv of page', angle: -90, position: 'insideLeft', textAnchor: 'middle' }} />
                <Tooltip></Tooltip>
                <Bar dataKey="investment" fill="#8884d8">
                    <LabelList dataKey="revenue" position="insideTop" angle="45" />
                </Bar>
                <Bar dataKey="sell" fill="#82ca9d">
                    <LabelList dataKey="revenue" position="top" />
                </Bar>
            </BarChart>

        </div>

    );
};

export default Dashboard;