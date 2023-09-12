import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data1 = [{start_year: 'Page A', uv: 400, pv: 2400, amt: 2400}];

export const Relevance:React.FC<{data:any}>=({data})=>{
    return <>
     <LineChart width={700} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="intensity" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc"  />
    <XAxis dataKey="relevance" />
    <YAxis dataKey="start_year" />
    <Tooltip />
  </LineChart>
    </>
}