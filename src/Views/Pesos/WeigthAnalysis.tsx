import { useState, useEffect } from "react";
import { Api } from '../../Config/API/Api';
import ReactECharts from 'echarts-for-react';
import '../../Config/Styles/index';
import { ApiResponse } from "../../Config/interfaces/interface";

export const WeigthAnalysis = () => {
    
    const [weigthAnalysis, setweigthAnalysis] = useState<ApiResponse>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Api.get<ApiResponse>('/WeihtAnalisis');
                setweigthAnalysis(response.data);
                console.log("respuesta ", response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const option = {
        title: {
            text: 'Distribución de Peso por Sexo',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' }
        },
        legend: {
            data: ['Hombres', 'Mujeres'],
            left: 'right'
        },
        xAxis: {
            type: 'category',
            data: ['Peso Mínimo', 'Peso Promedio', 'Peso Máximo']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Hombres',
                type: 'bar',
                data: [
                    weigthAnalysis?.Hombres?.peso_min,
                    weigthAnalysis?.Hombres?.peso_max,
                    weigthAnalysis?.Hombres?.peso_promedio,
                ]
            },
            {
                name: 'Mujeres',
                type: 'bar',
                data: [
                    weigthAnalysis?.Mujeres?.peso_min,
                    weigthAnalysis?.Mujeres?.peso_max,
                    weigthAnalysis?.Mujeres?.peso_promedio
                ]
            }
        ]
    };

    return <ReactECharts option={option} />;
};
