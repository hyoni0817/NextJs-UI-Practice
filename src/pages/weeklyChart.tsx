import React, { useState } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { Slider, Switch } from 'antd';
import type { SliderMarks } from 'antd/es/slider';

const FlexBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
`;

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const WeeklyChart = () => {
  const [year, setYear] = useState(false);
  const [firstYearIndex, setFirstYearIndex] = useState<number>(0);
  const [secondYearIndex, setSecondYearIndex] = useState<number>(9);
  const categories = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999];

  const data = {
    options: {
      chart: {
        id: 'apexchart-example',
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: categories.slice(firstYearIndex, secondYearIndex),
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#FF1654',
          },
          labels: {
            style: {
              colors: '#FF1654',
            },
          },
          title: {
            text: 'Series A',
            style: {
              color: '#FF1654',
            },
          },
        },
        {
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#247BA0',
          },
          labels: {
            style: {
              colors: '#247BA0',
            },
          },
          title: {
            text: 'Series B',
            style: {
              color: '#247BA0',
            },
          },
        },
      ],
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125].slice(firstYearIndex, secondYearIndex),
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41, 80, 100].slice(firstYearIndex, secondYearIndex),
      },
    ],
  };

  const marks: SliderMarks = categories.reduce(
    (accumulator, currentValue) => ({ ...accumulator, [`${currentValue}`]: currentValue }),
    {}
  );

  const handleChangeSlider = (value) => {
    setYear(value);
    setFirstYearIndex(categories.indexOf(value[0]));
    setSecondYearIndex(categories.indexOf(value[1]) + 1);
  };

  return (
    <>
      <FlexBox>
        <ReactApexChart type="area" options={data.options} series={data.series} width={500} height={320} />;
      </FlexBox>
      <Slider marks={marks} range step={1} min={1991} max={1999} onChange={handleChangeSlider} />
    </>
  );
};

export default WeeklyChart;
