import { useState, useEffect } from "react";

//resources
import { DataInfo } from "../Config/interfaces/interface";
import { Api } from '../../src/Config/API/Api';

//libraries
import ReactECharts from 'echarts-for-react';

//Styles.
import '../Config/Styles/index';

export const Graphics = () => {
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
        // Agrupar datos por rango de edad
        const AgeGroups = {
            "20-30": { total: 0, biceps: 0 },
            "31-40": { total: 0, biceps: 0 },
            "41-50": { total: 0, biceps: 0 },
            "51+": { total: 0, biceps: 0 },
        };

        chartData.forEach(item => {
            if (item.edad >= 20 && item.edad <= 30) {
                AgeGroups["20-30"].total++;
                AgeGroups["20-30"].biceps += item.biceps;
            } else if (item.edad >= 31 && item.edad <= 40) {
                AgeGroups["31-40"].total++;
                AgeGroups["31-40"].biceps += item.biceps; 
            } else if (item.edad >= 41 && item.edad <= 50) {
                AgeGroups["41-50"].total++;
                AgeGroups["41-50"].biceps += item.biceps;
            } else {
                AgeGroups["51+"].total++;
                AgeGroups["51+"].biceps += item.biceps;
            }
        });

        // Crear el dataset para la gráfica
        const dataSetSource = [
            ["Edad", "Promedio de bíceps", "Cantidad de personas"],
            ["20-30", (AgeGroups["20-30"].biceps / AgeGroups["20-30"].total).toFixed(2), AgeGroups["20-30"].total],
            ["31-40", (AgeGroups["31-40"].biceps / AgeGroups["31-40"].total).toFixed(2), AgeGroups["31-40"].total],
            ["41-50", (AgeGroups["41-50"].biceps / AgeGroups["41-50"].total).toFixed(2), AgeGroups["41-50"].total],
            ["51+", (AgeGroups["51+"].biceps / AgeGroups["51+"].total).toFixed(2), AgeGroups["51+"].total]
        ];

        return {
            legend: { top: "bottom" },
            tooltip: { trigger: "axis", showContent: true },
            dataset: { source: dataSetSource },
            xAxis: {
                type: "category",
                name: 'Rango de Edad'
            },
            yAxis: [
                {
                    type: 'value',
                    name: 'Promedio de bíceps (cm)',
                    position: 'left'
                },
                {
                    type: 'value',
                    name: 'Cantidad de personas',
                    position: 'right'
                }
            ],
            grid: { top: "55%" },
            series: [
                {
                    type: 'line',
                    name: 'Promedio de bíceps',
                    yAxisIndex: 0,
                    encode: { x: 'Edad', y: 'Promedio de bíceps' },
                    emphasis: { focus: 'series' },
                },
                {
                    type: 'line',
                    name: 'Cantidad de personas',
                    yAxisIndex: 1,
                    encode: { x: 'Edad', y: 'Cantidad de personas' },
                    emphasis: { focus: 'series' },
                },
                {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    center: ['50%', '25%'],
                    emphasis: { focus: 'data' },
                    label: {
                        formatter: '{b}: {@[Promedio de bíceps]} ({d}%)'
                    },
                    encode: {
                        itemName: 'Edad',
                        value: 'Promedio de bíceps',
                        tooltip: 'Promedio de bíceps'
                    }
                }
            ]
        };
    };

    return <ReactECharts option={getOption()} />;
};
