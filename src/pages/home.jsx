import React from 'react';
import './project';
import './contact';

export default function Home() {
  return (
    <div>
      <h1 style={{ textDecoration: "underline" }}>Deja R. Dunlap</h1>

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
          style={{width:'375px', height:'450px'}}
        />

        <figcaption style={{ fontSize: '15px', color: '#555', textAlign: 'right', marginTop: '-5px'}}>
          Yale Undergraduate Research Conference 2025
        </figcaption>
        </figure>

        <p style={{ fontSize: "20px" }}>
          Welcome to my website! As you have most likely guessed already, my name is Deja Dunlap. I'm a senior at Yale University studying Applied Mathematics with a concentration in Data Mining & Artificial Intelligence.
          I'm currently a Yale Edward A. Bouchet Research Fellow, where I study computational understanding of minority dialects, specifically African-American Vernacular English. My broader research interests are in the intersections between 
          artificial intelligence, society, and industry. I'm specifically interested the underlying archetictural designs and societial impacts of racial bias in AI. I'm also interested in the development of guidelines in the implementations and development of AI in industry, government and healthcare.
        </p>

        <p style={{ fontSize: "20px" }}>
          On the more personal side, I'm originally from Las Vegas, Nevada (I know - weird place to call home). I have a whopping 10 siblings, including an identical twin sister. I'm a first generation/low-income student, and I attend Yale through the Questbridge Scholarship. 
          When I'm not re-watching Grey's Anatomy (specifically seasons 4-10), I'm either reading, working out, or calling my family.
        </p>

        <p style={{ fontSize: "20px" }}>
          You can learn more about my academic and professional experiences <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">here</a> and see some of the things that I have worked on <a href="./projects">here</a>. Hope to hear from you soon!
        </p>
      </div>
    </div>
  );
};
