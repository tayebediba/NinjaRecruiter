import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  

 
  return (
    <FormControl sx={{ m: 0, width: "100%"  }} size="sx">
      
      <Select
     
        
      >
        <MenuItem value="">
        </MenuItem>
        
      </Select>
    </FormControl>
  );
}
