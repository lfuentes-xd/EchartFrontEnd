//react
import { useState, useEffect } from "react";

//resources
import { DataInfo } from "../Config/interfaces/interface";
import { Api } from '../../src/Config/API/Api';

//libraries
import ReactECharts from 'echarts-for-react';

//Styles.
import '../Config/Styles/index'

export const Weigth = () => {
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
            tooltip: {
                position: 'top'
            },
            grid: {
                height: '50%',
                top: '10%'
            },
            xAxis: {
                type: 'category',
                data: chartData.map(item => item.peso), 
                splitArea: {
                    show: true
                }
            },
            yAxis: {
                type: 'category',
                data: chartData.map(item => item.altura),
                splitArea: {
                    show: true
                }
            },
            visualMap: {
                min: 0,
                max: 50, 
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                bottom: '15%'
            },
            series: [{
                name: 'pesos',
                type: 'heatmap',

                data: chartData.map(item => [
                    chartData.findIndex(i => i.peso === item.peso), 
                    chartData.findIndex(i => i.altura === item.altura), 
                    item.biceps 
                ]),
                label: {
                    show: false
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        }
    };


    return (
        <div className='graph'>
            <h1>Gráfico de Peso</h1>
            <ReactECharts option={getOption()} className='graphstyle' />
        </div>
    );
};


