import React, { useEffect } from 'react';
import './styles/HomePageStyling.css'; // Make sure to create a corresponding CSS file
import { Paper } from '@mui/material';
import $ from 'jquery';
import _ from 'lodash';
import { Link } from 'react-router-dom';


export const StateCard = ({id,stateName,description,stateImage, h1_1,h1_2,h1_3,d1, h2_1,h2_2,h2_3,d2, h3_1,h3_2,h3_3,d3, h4_1,h4_2,h4_3,d4 }) => {

    useEffect(()=>{
        $(document).ready(function() {
  
            const angle = {
              min: -5,
              max: 5
            }
            
            function getAngle(minPos, maxPos, minAng, maxAng, pos) {
              return (minAng-maxAng)/(minPos-maxPos)*(pos-minPos) + minAng;
            }
            
            $(".stateCard").on("mouseenter mousemove", _.throttle(function(e) {
              let offset = $(this).offset();
              let height = $(this).height();
              let width = $(this).width();
              let pos = {
                x: e.pageX - offset.left - width/2,
                y: e.pageY - offset.top - height/2
              }
              let min = {
                x: -width/2,
                y: -height/2
              }
              let max = {
                x: width/2,
                y: height/2
              }
              let newAngle = {
                x: Math.round(getAngle(min.x, max.x, angle.min, angle.max, pos.x)*100)/100,
                y: -1*Math.round(getAngle(min.y, max.y, angle.min, angle.max, pos.y)*100)/100
              }
              $(this).css({
                "-webkit-transform": "rotateX( " + newAngle.y + "deg ) rotateY( " + newAngle.x + "deg )",
                "-moz-transform": "rotateX( " + newAngle.y + "deg ) rotateY( " + newAngle.x + "deg )",
                "-o-transform": "rotateX( " + newAngle.y + "deg ) rotateY( " + newAngle.x + "deg )",
                "-ms-transform": "rotateX( " + newAngle.y + "deg ) rotateY( " + newAngle.x + "deg )",
                "transform": "rotateX( " + newAngle.y + "deg ) rotateY( " + newAngle.x + "deg )"
              })
             
            },100))
            
            
            
            $(".stateCard").on("mouseout", function(){
              setTimeout(function(){
                $(this).css({
                  "transform": "none"
                })
                
              }.bind(this), 300)
              
            })
            
          })
    },[])

  return (
    <>
    
    
    <Paper className='outerContainer' elevation={10} sx={{width:'41.5%',height:'auto',margin:'20px 0'}}>

    <div className='stateCard' style={{padding:'4px'}}>
    <Link style={{ textDecoration: 'none' }} to={'/state-lead/'+id}>
        <div className='header1' style={{padding:'7px'}}>
            <div style={{display:'inline-block',padding:'4px'}}>
                <img className='headerImage' alt='error' src='	https://www.investindia.gov.in/themes/investindia/image/listing-style.svg' /> 
                <h3 style={{fontWeight:700,color:'white'}} >{stateName}</h3>
                <p style={{fontWeight:500,color:'darkgray'}}>{description}</p>
            </div>
            <div style={{display:'inline-block'}}>
                <img alt='error' src={stateImage}/>
            </div>
        </div>
        </Link>

        <div style={{display:'flex',justifyContent:'space-between',marginTop:'5px'}}>
            <div style={{height:'100px',width:'30%',borderRight:'2px solid lightgray',padding:'4px'}} >
                <span > <b> {h1_1} <h3 style={{display:'inline-block',fontWeight:'700'}}>{h1_2}</h3> {h1_3} </b> </span>
                <p style={{fontSize:'12px',fontWeight:'500',color:'darkgray'}}>{d1}</p>
            </div>
            <div style={{height:'100px',width:'30%',borderRight:'2px solid lightgray',padding:'4px'}} >
                <span > <b> {h2_1} <h3 style={{display:'inline-block',fontWeight:'700'}}>{h2_2}</h3> {h2_3} </b> </span>
                <p style={{fontSize:'12px',fontWeight:'500',color:'darkgray'}}>{d2}</p>
            </div>

            {d3===''
            ?
                <div style={{height:'100px',width:'30%',padding:'4px'}} >
                    <span > <b> {h3_1} <h3 style={{display:'inline-block',fontWeight:'700'}}>{h3_2}</h3> {h3_3} </b> </span>
                    <p style={{fontSize:'12px',fontWeight:'500',color:'darkgray'}}>{d3}</p>
                </div>
            :
                <div style={{height:'100px',width:'30%',borderRight:'2px solid lightgray',padding:'4px'}} >
                <span > <b> {h3_1} <h3 style={{display:'inline-block',fontWeight:'700'}}>{h3_2}</h3> {h3_3} </b> </span>
                <p style={{fontSize:'12px',fontWeight:'500',color:'darkgray'}}>{d3}</p>
                </div>
            }
           
            {d4===''
            ?
                <div style={{height:'100px',width:'30%',padding:'4px'}} >
                    <span > <b> {h4_1} <h3 style={{display:'inline-block',fontWeight:'700'}}>{h4_2}</h3> {h4_3} </b> </span>
                    <p style={{fontSize:'12px',fontWeight:'500',color:'darkgray'}}>{d4}</p>
                </div>
            
            :
                <div style={{height:'100px',width:'30%',borderRight:'2px solid lightgray',padding:'4px'}} >
                    <span > <b> {h4_1} <h3 style={{display:'inline-block',fontWeight:'700'}}>{h4_2}</h3> {h4_3} </b> </span>
                    <p style={{fontSize:'12px',fontWeight:'500',color:'darkgray'}}>{d4}</p>
                </div>
            }
            
        </div>
    </div>
    </Paper>


        

    </>
  );
}