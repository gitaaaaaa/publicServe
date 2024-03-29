import React from "react";
import IceContainer from '@icedesign/container';
import { Grid } from "@alifd/next";

import BaseInfo from "./components/BaseInfo";
import TimeDistribution from "./components/TimeDistribution";
import PercentageComplete from "./components/PercentageComplete";
import LossRate from "./components/LossRate";
import AverageTime from "./components/AverageTime";

const { Row, Col } = Grid;

export default function DataCenter() {
  return (
    <IceContainer>
      <Row gutter="20">
        <Col l="12">
          <LossRate />
        </Col>
        <Col l="12">
          <TimeDistribution />
        </Col>
        <Col l="24">
          <AverageTime />
        </Col>
        <Col l="12">
          <BaseInfo />
        </Col>
        <Col l="12">
          <PercentageComplete />
        </Col>
      </Row>
    </IceContainer>
  );
}
