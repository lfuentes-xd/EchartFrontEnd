import '../Config/Styles/index'
import ReactECharts from 'echarts-for-react';

export const Graph = () => {

  const options = {
    title: {
      text: 'Mi Gráfico',
    },
    tooltip: {},
    xAxis: {
      data: ['A', 'B', 'C', 'D', 'E'],
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: [5, 20, 36, 10, 10],
      },
    ],
  };

  return (
    <div className='graph'>
      <ReactECharts option={options} className='graphstyle' />
    </div>
  )
}

