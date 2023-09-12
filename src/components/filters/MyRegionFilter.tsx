import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IMySelector{
    topics:any[]
}
export const MyRegionFilter:React.FC<IMySelector>=({topics})=> {
  const [age, setAge] = React.useState('');
console.log("topics",topics)
  const handleChange = (event: SelectChangeEvent) => {
    console.log("event.target.value",event.target.value)
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 ,backgroundColor:'white'}} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
            {topics.map((item:any)=>{return <MenuItem value={item.topic}>{item.region}</MenuItem>})}
          

        </Select>
      </FormControl>
    </Box>
  );
}