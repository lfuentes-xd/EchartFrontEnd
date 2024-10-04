import { useEffect, useState } from "react";
import { Api } from "../../Config/API/Api";
import { ApartmentsInfo } from "../../Config/interfaces/interface";
import ReactECharts from 'echarts-for-react';

export const NormalApartments = () => {

    const [ApartmentsInfo, setApartmentsInfo] = useState<ApartmentsInfo[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Api.get<ApartmentsInfo[]>('/Apartments');
                setApartmentsInfo(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getOption = () => {
        return {
            grid: {
                height: '50%',
                top: '10%'
            },
            xAxis: {
                name: 'Metros cuadrados',
                type: 'value',
            },
            yAxis: {
                name: 'Precio',
                type: 'value',
            },
            tooltip: {
                trigger: 'item',
                formatter: (params: any) => {
                    return `Metros: ${params.value[0]}<br />Precio: ${params.value[1]}`;
                }
            },
            series: [{
                Symbol: 'circle',
                symbolSize: 15,
                data: ApartmentsInfo.map(item => [item.mt2, item.precio]),
                type: 'scatter',
                itemStyle:{
                    color: 'transparent',   
                    borderColor: 'red',
                    borderWidth: 2
                }
            }]
        }
    }
    return (
        <>
            <ReactECharts option={getOption()} style={{ marginTop: "1rem" }} />;
        </>
    )
}
