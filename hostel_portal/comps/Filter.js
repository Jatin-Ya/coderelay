
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Filter(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    props.onChangeFiltre(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-standard-label">Category Of The Issue</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Electricity</MenuItem>
          <MenuItem value={21}>Internet</MenuItem>
          <MenuItem value={22}>Cleanliness</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}