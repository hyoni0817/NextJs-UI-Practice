import React from 'react';
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

const CircleProgress = () => (
  <ProgressBox>
    <Progress type="circle" percent={75} strokeWidth={5} width={182} format={() => ``} strokeLinecap="butt" />
    <ProgressTextBox>
      <div>
        <p>진행률</p>
        <p>75%</p>
      </div>
    </ProgressTextBox>
  </ProgressBox>
);

export default CircleProgress;
