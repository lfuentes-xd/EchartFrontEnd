import { useEffect, useState } from 'react'
import { Api } from '../../Config/API/Api';

import ReactECharts from 'echarts-for-react';
import '../../Config/Styles/index';


export const PieWeigth = () => {


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


  const option = {
    title: {
      text: 'Distribucion de Biceps por edad',
      subtext: 'Datos de Bíceps y Cantidad',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Cantidad de personas',
        type: 'pie',
        radius: '50%',
        data: chartData.slice(1).map(item => ({
          value: item[2],
          name: item[0]
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
  };
  return <ReactECharts option={option} />;
}
