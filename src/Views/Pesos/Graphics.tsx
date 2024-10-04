import { useState, useEffect } from "react";

import { Api } from '../../Config/API/Api';

//libraries
import ReactECharts from 'echarts-for-react';

//Styles.
import '../../Config/Styles/index';

export const Graphics = () => {
    const [chartData, setChartData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Api.get<any[]>('/biceps'); // Asumimos que los datos ya están transformados
                setChartData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const SecondOption = {
        title: {
            text: "relacion edad y promedio de Biceps",
            left: "center"
        },
        xAxis: {
            type: 'category',
            data: chartData.map(item => item[0].toString())
        },
        yAxis: {
            type: 'value',
            name: 'Promedio de Biceps'
        },
        series: [
            {
                data: chartData.map(item => item[1]), // Valores del promedio de bíceps
                type: 'line',
                smooth: true, // Para hacer la línea suave
                lineStyle: {
                    width: 2,
                },
                itemStyle: {
                    color: '#5470C6'
                }
            }
        ]
    }

    
    return <ReactECharts option={SecondOption} />;

};
