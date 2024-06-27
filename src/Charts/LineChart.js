import React from "react";
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import Hero from "../components/Hero";

function LineChart({chartData}){
    return(
    <div className="flex p-5 mt-8 ml-3 mr-3 justify-between gap-5 bg-gray-900">
       <Line data={chartData} className="flex justify-center items-center h-[100vh]"/>
       
       </div>
        )
}

export default LineChart;