import React, { PureComponent } from 'react';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import Widget from '../../components/Widget';

// Charts
import LineChart from './charts/LineChart';
import BarChart from './charts/BarChart';
import PercentAreaChart from './charts/PercentAreaChart';
import PieChart from './charts/PieChart';

const data = [
  {name: 'A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'C', uv: 2000, pv: 4800, amt: 2290},
  {name: 'D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'G', uv: 3490, pv: 4300, amt: 2100},
];

export default class Charts extends PureComponent {
  render() {
    return(
      <div>
        <Breadcrumb>
          <BreadcrumbItem>YOU ARE HERE</BreadcrumbItem>
          <BreadcrumbItem active>Charts</BreadcrumbItem>
        </Breadcrumb>
        <h1 className="page-title mb-lg">Reports <span className="fw-semi-bold"></span></h1>
        <Row>
          <Col xs={12} md={6}>
            <Widget
              title={<h5>Revenue <span className="fw-semi-bold">vs. Costs</span></h5>}>
              <LineChart data={data} />
            </Widget>
          </Col>
          <Col xs={12} md={6}>
            <Widget
              title={<h5>Sales <span className="fw-semi-bold">vs. Aquisitions</span></h5>}>
              <BarChart data={data} />
            </Widget>
          </Col>
          <Col xs={12}>
            <Widget
              title={<h5>Property <span className="fw-semi-bold">Type Distribution</span></h5>}>
              <PercentAreaChart data={data} />
            </Widget>
          </Col>
          <Col xs={12} md={6}>
            <Widget
              title={<h5>Employee <span className="fw-semi-bold">Sales Distribution</span></h5>}>
              <PieChart />
            </Widget>
          </Col>
        </Row>
      </div>
    )
  }
}