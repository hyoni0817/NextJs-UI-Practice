import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Progress } from 'antd';

const ProgressBox = styled.div`
  position: relative;
  width: fit-content;
  // height: 100%;
  > .ant-progress {
    position: relative;
  }
`;

const ProgressTextBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const CircleProgress = () => {
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setPercent(30);
    }, 700);
  }, []);

  return (
    <ProgressBox>
      <Progress type="circle" percent={percent} strokeWidth={5} width={182} format={() => ``} strokeLinecap="butt" />
      <ProgressTextBox>
        <div>
          <p>진행률</p>
          <p>{percent}%</p>
        </div>
      </ProgressTextBox>
    </ProgressBox>
  );
};

export default CircleProgress;
