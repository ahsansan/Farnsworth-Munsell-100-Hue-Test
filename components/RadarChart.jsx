import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';

ChartJS.register(RadialLinearScale, Tooltip, Legend, ArcElement, PointElement, LineElement);

const RadarChart = ({ data }) => {
    const results = data.result.map(item => item.result);
    const colors = data.result.map(item => item.color);

    const chartData = {
        labels: Array(results.length).fill(''),
        datasets: [
            {
                label: 'Test Results',
                data: results,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1
            }
        ]
    };

    const options = {
        scales: {
            r: {
                min: 0,
                max: 7,
                ticks: {
                    stepSize: 1
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };

    return (
            <div className="chart-container">
                <Radar data={chartData} options={options} />
            </div>
    );
};

export default RadarChart;