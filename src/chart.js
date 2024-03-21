import React, { useState, useEffect } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const ChartWithTable = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [chartOptions, setChartOptions] = useState({
    // Initialize Highcharts options here
  });
  const [tableData, setTableData] = useState([]);
}