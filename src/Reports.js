import React, { Component } from "react";
import { FormControl, Button, Modal, Grid, Row } from "react-bootstrap";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from "recharts";
import {data} from './data-mocks.js';
class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='full-page' style={{backgroundColor:'black'}}>
        <div>
          <LineChart width={730} height={250} data={data()}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
      </div>
      </div>
    );
  }
}

export default Reports;
