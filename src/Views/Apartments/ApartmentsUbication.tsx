//react
import { useEffect, useState } from "react"

//resources
import { Api } from "../../Config/API/Api";
import { PieChartData } from "../../Config/interfaces/Apartments"

//Libraries.
import ReactECharts from 'echarts-for-react';

export const ApartmentsUbication = () => {
    const [ApartmentsUbication, setApartmentsUbication] = useState<PieChartData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Api.get<PieChartData[]>('/ApartmentsLocation');
                setApartmentsUbication(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const option = {
        title: {
            text: "Distribucion de apartamentos por zonas que están terminados",
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
        }, 
        legend: {
            orient: 'vertical',
            left: 'left',
        }, 
        series: [
            {
                name: 'Ubicaciones',
                type: 'pie',
                radius: '50%',
                data: ApartmentsUbication?.map(item =>({
                    value: item.value,
                    name: item.name
                })), 
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }

    return <ReactECharts option={option} style={{marginTop: "1rem"}}/>;
}

