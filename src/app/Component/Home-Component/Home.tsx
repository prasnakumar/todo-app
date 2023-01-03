import React, { useState } from 'react'
import Homeheader from './Home-header'
import './Home.scss'
import {TextField,Button} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
export const  Home=()=>{
  const [value, setValue] = useState<Date|null>(new Date());
const [data, setdata] = useState(['home','value','address','content']);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [inputuser,setinputuser]=useState('')

  const Create=(datavalue:any)=>{
    console.log("askljdakld1",data)
setdata([...data,datavalue])
  }
  const del=(value:any)=>{
    const arr  = data.filter(val => val !== value);
    setdata(arr);
  }
  return (<>

    <div>
      <Homeheader/>
      </div>
      <div className="grid-style-card">
        <div className='card-style'>Add a Friend</div>
        <div className='card-style'>Add Todo</div>
        <div className='card-style'> View Todo</div>
      </div>
      <div className='home-body'>
        <p>Welcome TO your DO<br/> Please select the date you want to view the list </p>
        <div className='date-picker'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker
    label="Selected Date"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>
            </div>
            <div className='list-todo'>
            <Container maxWidth="sm">
       
            <Box sx={{ bgcolor: '#cfe8fc' }}>
            <FormGroup>
              <span className='content-inside'>
{data.map((val:any)=><div className='delete-icon'>
   <FormControlLabel control={<Checkbox defaultChecked />} label={val} /> <button className='button-col'><DeleteIcon onClick={()=>del(val)}/></button></div>)}
   </span>
   </FormGroup>
   <div className="CreateTask">
   <TextField fullWidth label="fullWidth" onChange={(e)=>setinputuser(e.target.value)}   id="fullWidth" />
   <Button variant="text" onClick={(e)=>Create(inputuser)}>Create</Button>
   </div>
   </Box>
   </Container>
            </div>

      </div>
    </>
  )
}

export default Home