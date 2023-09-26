import { useEffect, useState, PureComponent } from "react";
import { useLoaderData } from "react-router-dom";
import { getMyDonations } from "./utility/localStorage";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const allDonations = useLoaderData();
  const [myDonations, setMyDonations] = useState([]);
  useEffect(() => {
    const myStoredDonations = getMyDonations();
    setMyDonations(myStoredDonations);
  }, []);

  const data = [
    { name: "Your Donation", value: myDonations.length },
    { name: "Total Donation", value: allDonations.length - myDonations.length },
  ];

  const COLORS = ["#00C49F", "#FF444A"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <ResponsiveContainer width="99%" height={400}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex gap-10 justify-center">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <hr
              style={{ border: `4px solid ${COLORS[idx]}` }}
              className="w-10"
            />{" "}
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Statistics;
