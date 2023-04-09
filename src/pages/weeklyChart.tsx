import React from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const WeeklyChart = () => {
  const data = {
    options: {
      chart: {
        id: 'apexchart-example',
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41, 80, 100],
      },
    ],
  };

  return <ReactApexChart type="area" options={data.options} series={data.series} width={500} height={320} />;
};

export default WeeklyChart;
