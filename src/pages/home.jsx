import React from 'react';
import './project';
import './contact';

export default function Home() {
  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>Hello!</h1>

      <div style={{ display: 'flow-root' }}>
        <figure style={{
            float: 'left',
            marginRight: '20px',
            marginBottom: '10px',
            borderRadius: '8px', 
            justifyContent: 'center'
          }}>
        <img
          src="/IMG_2326.JPG"
          alt="Black woman in her 20s with gold glasses smiling"
          style={{width:'400px', height:'450px'}}
        />

        <figcaption style={{ fontSize: '15px', color: '#555', textAlign: 'right', marginTop: '-5px'}}>
          Yale Undergraduate Research Conference 2025
        </figcaption>
        </figure>

        <p style={{ fontSize: "20px" }}>
          Welcome to my website! As you have most likely guessed already, my name is Deja Dunlap. I'm a rising senior at Yale University studying Applied Mathematics with a concentration in Computer Science.
          I'm currently a Mellon May and Edward A. Bouchet Research Fellowship, where I study computational understanding of minority dialects, specifically African-American Vernacular English. My broader research interests are in the intersections between 
          artificial intelligence, society, and industry. I'm specifically interested in studying bias in AI and developing guidelines in the implementations and development of AI in industry.
        </p>

        <p style={{ fontSize: "20px" }}>
          On the more personal side, I'm originally from Las Vegas, Nevada (I know - weird place to call home). I have a whopping 10 siblings, including an identical twin sister. I'm a first generation/low-income student, and I attend Yale through the Questbridge Scholarship. 
          When I'm not re-watching Grey's Anatomy (specifically seasons 4-10), I'm either reading, working out, or calling my family.
        </p>

        <p style={{ fontSize: "20px" }}>
          You can learn more about my academic and professional experiences <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">here</a>, see some of the things that I'm working on <a href="./projects">here</a>, or contact me <a href="./contact">here</a>. Hope to hear from you soon!
        </p>
      </div>
    </div>
  );
};
