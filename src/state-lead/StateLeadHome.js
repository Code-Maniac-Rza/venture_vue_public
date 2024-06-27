import React from 'react';
import { StateCard } from './StateCard';
import { StateCardData } from '../Data/StatesCardData';

export function StateLeadHome( {results} ) {

  return (
    <> 
        <div style={{ 
          margin:'auto',
          marginTop:'100px',
          // marginLeft:'100px',
          display:'flex',
          justifyContent:'space-evenly',
          flexWrap:'wrap',
          width:'100%',
          }}>
        
        {results.length !== 0
        ?
        results.map((value,index)=>{

          return(
            <>

            <StateCard 
                  id={value.id}
                  stateName= {value.stateName}
                  description={value.description}
                  stateImage={value.stateImage}
                  h1_1={value.h1_1}
                  h1_2={value.h1_2}
                  h1_3={value.h1_3}
                  d1={value.d1}
                  h2_1={value.h2_1}
                  h2_2={value.h2_2}
                  h2_3={value.h2_3}
                  d2={value.d2}
                  h3_1={value.h3_1}
                  h3_2={value.h3_2}
                  h3_3={value.h3_3}
                  d3={value.d3}
                  h4_1={value.h4_1}
                  h4_2={value.h4_2}
                  h4_3={value.h4_3}
                  d4={value.d4}
                  />    
            </>
          )
        })
        :
        StateCardData.map((value,index)=>{
          return(
            <>

            <StateCard 
                  id={value.id}
                  stateName= {value.stateName}
                  description={value.description}
                  stateImage={value.stateImage}
                  h1_1={value.h1_1}
                  h1_2={value.h1_2}
                  h1_3={value.h1_3}
                  d1={value.d1}
                  h2_1={value.h2_1}
                  h2_2={value.h2_2}
                  h2_3={value.h2_3}
                  d2={value.d2}
                  h3_1={value.h3_1}
                  h3_2={value.h3_2}
                  h3_3={value.h3_3}
                  d3={value.d3}
                  h4_1={value.h4_1}
                  h4_2={value.h4_2}
                  h4_3={value.h4_3}
                  d4={value.d4}
                  />    
            </>
          )
        })
        }
        
        
        </div>
    </>
  );
}
