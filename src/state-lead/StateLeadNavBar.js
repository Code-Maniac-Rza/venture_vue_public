import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import { StateLeadHome } from './StateLeadHome';
import { useState } from "react";
import { StateCardData } from '../Data/StatesCardData';
import logo from "../assets/letter-v.png"



import {Link} from 'react-router-dom'
import './styles/NavbarStyles.css'

export function StateLeadNavBar() {

  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  let results = [];

  if(query!==''){ 
    results = StateCardData.filter((item) => {

      const str1 = item.stateName.toUpperCase();
      const str2 = query.toUpperCase();
      return str1.includes(str2)
    });
  }


  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='NavBar' sx={{backgroundColor:'#1b1b24'}}>
        {/* <Toolbar variant="dense" >
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
          <Link to='/'>
            VentureVue
          </Link>
          </Typography>
        </Toolbar> */}

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} class="h-8 animate-pulse" alt="VentureVue" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ">VentureVue</span>
  </a>
  </div>
</nav>
        <Container maxWidth="elg">
            <div style={{display:'flex',justifyContent:'space-around',marginTop:'10px'}}>
              <div>
                <h1 style={{fontWeight:700}} >States in India</h1>
                <p style={{fontWeight:500,color:'darkgray'}}>There are 28 states, 7 union territories (UT) and a national <br/>capital territory (NCT) in India.</p>
              </div>
              <div className="subscribe-container" style={{marginBottom: '30px'}}>
              <label for="email" className="subscribe-label">Subscribe To India's Growth Story</label>
                <input type="email" placeholder="Email Address" className="email-input" />
                <button type="submit" className="subscribe-button">SUBSCRIBE</button>
              </div>
            </div>
        </Container>

        
      </AppBar>

      <div style={{width:'10%',margin:'40px 20px 0 5px'}}>
        <div style={{position:'absolute', top:'46%'}}>
          <div style={{position:'absolute',display:'inline-block',height:'70px',width:'50px',backgroundColor:'lightgray',borderRadius:'4px 0 0 4px'}}> 
                <SearchIcon sx={{position:'absolute',height:'25px',width:'25px',left:'30%',top:'35%'}}/>
          </div>
          <form style={{display:'inline-block'}} >            
              <input value={query}  onChange={handleChange} placeholder='Enter State....' style={{padding:'4px',backgroundColor:'whitesmoke',marginLeft:'50px',width:'500%',border:'none',height:'70px',outline:'none', borderRadius:'0 4px 4px 0'}}/>
          </form>
        </div>
      </div>
    </Box>
    <StateLeadHome results={results} />
    </>
  );
}
