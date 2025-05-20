import React from 'react';

export default function Projects ({ title, authors, journal, date, abstract, paper=null, code }) {
  return (
    <div className="project">
        <p> <b>{authors}</b> {title} <i> {journal}</i> {date}</p>
        <p><b> Abstract: </b> {abstract}</p>
        <ul style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', fontSize: '20px'}}>
          {paper ? (
            <li>
              <a href={paper} target="_blank" rel="noopener noreferrer"> Paper </a>
            </li>
          ) : null}            
          <li> Code <a href={code}> </a></li>
        </ul>
    </div>
  );
}