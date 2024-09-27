//react
import { useEffect, useState } from "react"

//Resources
import { ApartmentsInfo } from "../Config/interfaces/interface";
import { Api } from "../Config/API/Api";

//libraries
import ReactECharts from 'echarts-for-react';

//Styles.
import '../Config/Styles/index'


export const Apartments = () => {

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
        <div className='graph'>
            <h1>Gráfico de alcobas</h1>
            <ReactECharts option={getOption()} className='graphstyle' />
        </div>
    )
}
