import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Slider, Switch } from 'antd';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const WeeklyChart = () => {
  const [year, setYear] = useState(false);

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

  const handleChangeSlider = (value) => {
    setYear(value);
  };

  return (
    <>
      <ReactApexChart type="area" options={data.options} series={data.series} width={500} height={320} />;
      <Slider range step={1} min={1991} max={1999} onChange={handleChangeSlider} />
    </>
  );
};

export default WeeklyChart;
