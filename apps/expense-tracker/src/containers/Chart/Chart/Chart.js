import "./Chart.css";

import ChartBar from "../Chart-Bar/ChartBar";

const Chart = (props) => {
  const valueArray = props.data.map((val) => val.value);
  const totalMax = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.data.map((item) => {
        return (
          <ChartBar
            value={item.value}
            maxValue={totalMax}
            label={item.label}
            key={item.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
