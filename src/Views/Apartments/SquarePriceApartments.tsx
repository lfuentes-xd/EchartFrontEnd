import { useEffect, useState } from "react";
import { Api } from "../../Config/API/Api";
import { Apartments } from "../../Config/interfaces/Apartments";
import ReactECharts from 'echarts-for-react';

export const SquarePriceApartments = () => {
    const [smApartments, setsmApartments] = useState<Apartments[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Api.get<Apartments[]>('/AveragePrices');
                setsmApartments(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // Extraer datos para la gráfica
    const estratos = smApartments.map(apartment => `Estrato ${apartment.estrato}`);
    const preciosPromedio = smApartments.map(apartment => apartment.precio_promedio);

    const options = {
        title: {
            text: 'Precio Promedio por Estrato',
        },
        tooltip: {},
        xAxis: {
            type: 'category',
            data: estratos, // Datos de los estratos
        },
        yAxis: {
            type: 'value',
            name: 'Precio Promedio',
        },
        series: [{
            name: 'Precio Promedio',
            type: 'bar', // Cambiado a 'bar' para gráfica de barras
            data: preciosPromedio, // Datos de precios promedio
            itemStyle: {
                color: 'rgba(49, 99, 207, 0.514)', // Color de las barras
            },
        }],
    };

    return <ReactECharts option={options} style={{ marginTop: "1rem" }} />;
};
