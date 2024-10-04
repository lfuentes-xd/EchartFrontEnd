import { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { Api } from "../../Config/API/Api";

export const BicepsWeight = () => {
    const [biceps, setBiceps] = useState([]);
    const [peso, setPeso] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Api.get('/BicepsAnalisis');
                const data = response.data;
                setBiceps(data.biceps);
                setPeso(data.peso);
                console.log("respuesta ", response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const getOption = () => {
        return {
            title: {
                text: 'Biceps vs Peso'
            },
            xAxis: {
                name: 'Biceps (cm)',
                type: 'value'
            },
            yAxis: {
                name: 'Peso (kg)',
                type: 'value'
            },
            series: [{
                symbolSize: 10,
                data: biceps.map((b, i) => [b, peso[i]]),
                type: 'scatter'
            }]
        };
    };

    return (
        <ReactECharts option={getOption()} style={{ height: 400, width: '100%' }} />
    );
}
