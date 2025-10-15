import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Container, ButtonGroup, Button, Card, Grid, Stack, TextField,Checkbox,FormControlLabel, FormGroup, Popper  } from '@mui/material'


function App() {
  const [count, setCount] = useState(0)

  return (     
    <Container>
      <Grid>
        <Grid sx = {{ right:600, top:-300, position:'relative',}} >
          <h2 className='title'>Cat Breeds Explore</h2>
        </Grid>
        <Grid sx ={{top:-299 , position:"relative", width:1400, left:-125}}> 
          <Button sx= {{width:700, borderRadius:2, backgroundColor:"#4A6782"}} variant ="contained" >Explore</Button>
          <Button sx= {{width:700, borderRadius:2,backgroundColor:"#4A6782"}}variant="contained" >My Favorite</Button>
          <Grid sx={{height:550,width:350 , lef:200,position:"absolute",  backgroundColor:"#9799A1",mt:5, borderRadius:5}}>
            <Grid sx={{left:-120, position:"relative", }}>
              <h3>Filtrs</h3>
              <TextField id="standard-basic" label="Search" variant="standard" sx={{backgroundColor:"white", borderRadius:2, width:300, position:'absolute', left:145,}} />
                <Grid sx={{ position:"relative", left:20, top:50, mt:5}}>
                <h3 className='title' >Energy levl</h3>
                  <FormGroup sx={{position:"absolute ", left:130, top:20,}}>
                    <FormControlLabel control={<Checkbox />} label="Lvelv 1" />
                    <FormControlLabel control={<Checkbox />} label="Lvelv 2" />
                    <FormControlLabel control={<Checkbox />} label="Lvelv 3" />
                    <FormControlLabel control={<Checkbox />} label="Lvelv 4" />
                    <FormControlLabel control={<Checkbox />} label="Lvelv 5" />
                  </FormGroup>
                  


                  <Grid sx={{position:"relative", top:200,}}>
                  <h3 className='title' >Temperamnt</h3>

                    <Box sx= {{overflowY:"auto", height:120, width:400, borderColor:"grey.500", position:"relative", }}>
                   
                      <FormGroup sx={{position:"absolute ", left:130, top:20,}}>
                        <FormControlLabel control={<Checkbox />} label="Angry" />
                        <FormControlLabel control={<Checkbox />} label="Agility" />
                        <FormControlLabel control={<Checkbox />} label="Softly" />
                        <FormControlLabel control={<Checkbox />} label="adpatibility" />
                        <FormControlLabel control={<Checkbox />} label="Frinedly" />
                        <FormControlLabel control={<Checkbox />} label="Dog Friendly" />
                        <FormControlLabel control={<Checkbox />} label="Intelligent" />
                        <FormControlLabel control={<Checkbox />} label="grooming" />
                        <FormControlLabel control={<Checkbox />} label="rare" />
                    </FormGroup>
      
                    </Box>
                  </Grid>
                </Grid>
            </Grid>


          </Grid>
          <Grid sx={{height:550,width:1000 , lef:200,position:"absolute",  backgroundColor:"#9799A1",mt:5, borderRadius:5, left :400}}>
          </Grid>
      </Grid>
      
      </Grid >
      

    </Container>
    
    

      
  )
}

export default App
