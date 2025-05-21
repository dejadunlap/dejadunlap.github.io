import React from 'react';

export default function Projects ({ title, authors, journal, date, abstract, paper=null, code=null, dataset=null}) {
  return (
    <div className="project">
        <p> <b>{authors}</b> {title} <i> {journal}</i> {date}</p>
        <p> { journal ? (
          <b>Abstract: </b>
        ): null
          } {abstract}</p>
        <ul style={{listStyleType: 'none', display:'flex', flexDirection:'row', justifyContent:'flex-start', fontSize: '20px', paddingRight: '5px'}}>
          {paper ? (
            <li style={{paddingRight:'25px'}}>
              <a style={{color:'black', fontSize: '17px'}} href={paper} target="_blank" rel="noopener noreferrer"> Paper </a>
            </li>
          ) : null}          
          {code ? (
            <li style={{paddingRight:'25px'}}>
              <a style={{color:'black', fontSize: '17px'}} href={code} target="_blank" rel="noopener noreferrer"> Code </a>
            </li>
          ) : null}
          {dataset ? (
            <li style={{paddingRight:'25px'}}>
              <a style={{color:'black', fontSize: '17px'}} href={dataset} target="_blank" rel="noopener noreferrer"> Dataset </a>
            </li>
          ) : null}  
        </ul>
    </div>
  );
}