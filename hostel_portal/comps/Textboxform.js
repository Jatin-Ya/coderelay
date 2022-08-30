import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Textboxform() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '55ch' },
      }}
      noValidate
      autoComplete="off"
    >

<TextField
          id="filled-multiline-static"
          label="Enter Complain"
          multiline
          rows={4}
        //   defaultValue=""
          variant="filled"
        />
    </Box>
  );
}
