import { useState, useEffect } from "react";

//resources
import { DataInfo } from "../Config/interfaces/interface";
import { Api } from '../../src/Config/API/Api';

//libraries
import ReactECharts from 'echarts-for-react';

//Styles.   
import '../Config/Styles/index'

export const NormalWeight = () => {
    const [chartData, setChartData] = useState<DataInfo[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Api.get<DataInfo[]>('/data');
                setChartData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getOption = () => {
        return {
            xAxis: {
                type: 'category',
                data: chartData.map(item => item.altura)
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: chartData.map(item => item.peso),
                    type: 'bar'
                }
            ]
        };
    };
    
    return (
        <div className='graph'>
            <h1>Gráfico de Peso</h1>
            <ReactECharts option={getOption()} className='graphstyle' />
        </div>
    );
}
