import React, { useState, useEffect } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const ChartWithTable = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [chartOptions, setChartOptions] = useState({
    
  });
  const [tableData, setTableData] = useState([]);
  const Data = [
    { date: '2024-03-18', value1: 90, value2: 130, value3: 180 },
    { date: '2024-03-19', value1: 95, value2: 135, value3: 95 },
    { date: '2024-03-20', value1: 100, value2: 95, value3: 130 },
    { date: '2024-03-21', value1: 270, value2: 190, value3: 210 },
    { date: '2024-03-22', value1: 120, value2: 170, value3: 220 },
    { date: '2024-03-23', value1: 130, value2: 130, value3: 130 },
    { date: '2024-03-24', value1: 140, value2: 190, value3: 240 },
    { date: '2024-03-25', value1: 150, value2: 90, value3: 245 },
    { date: '2024-03-26', value1: 270, value2: 200, value3: 250 },
    { date: '2024-03-27', value1: 170, value2: 190, value3: 260 },
    { date: '2024-03-28', value1: 180, value2: 220, value3: 130 },
    { date: '2024-03-29', value1: 190, value2: 90, value3: 95 },
    { date: '2024-03-30', value1: 270, value2: 240, value3: 290 },
    { date: '2024-03-31', value1: 120, value2: 190, value3: 300 },
    { date: '2024-04-01', value1: 220, value2: 260, value3: 310 },
    { date: '2024-04-02', value1: 270, value2: 90, value3: 320 },
    { date: '2024-04-03', value1: 240, value2: 130, value3: 123 },
    { date: '2024-04-04', value1: 250, value2: 290, value3: 340 },
    { date: '2024-04-05', value1: 210, value2: 190, value3: 350 },
    { date: '2024-04-06', value1: 120, value2: 310, value3: 360 },
    { date: '2024-04-07', value1: 280, value2: 130, value3: 105 },
    { date: '2024-04-08', value1: 290, value2: 130, value3: 380 },
    { date: '2024-04-09', value1: 210, value2: 190, value3: 390 },
    { date: '2024-04-10', value1: 310, value2: 350, value3: 130 },
  ];

  useEffect(() => {
    //                    Function to check if a date is within the selected range
    const isDateInRange = (date, startDate, endDate) => {
      const dateObj = new Date(date);
      return dateObj >= startDate && dateObj <= endDate;
    };

    //                    Filter hardcoded data based on selected date range
    const filteredData = Data.filter(data =>
      isDateInRange(data.date, startDate, endDate)
    );

    //                    Update chart values based on filtered data
    const chartValues = {
      series: [
        {
          name: 'Value A',
          data: filteredData.map(data => data.value1),
        },
        {
          name: 'Value B',
          data: filteredData.map(data => data.value2),
        },
        {
          name: 'Value C',
          data: filteredData.map(data => data.value3),
        },
      ],
      title: {
        text: ''
      }

    };
    setChartOptions(chartValues);

    //                  Update table data directly with filtered data
    
    setTableData(filteredData);
  }, [startDate, endDate]);

  return (
    <div>
      <div className="date-picker-container">
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
      </div>


      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Value A</th>
            <th>Value B</th>
            <th>Value C</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 ? (tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td className={data.value1 > 170 ? 'value-high' : ''}>{data.value1}</td>
              <td className={data.value2 > 200 ? 'value-high' : ''}>{data.value2}</td>
              <td className={data.value3 > 220 ? 'value-high' : ''}>{data.value3}</td>
            </tr>


          ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No data available for the selected date range.
              </td>
            </tr>
          )}
        </tbody>
      </table>



    </div>
  );

};
export default ChartWithTable;
