import React from 'react';
import './cv';
import './project';
import './contact';

export default function Home() {
    return (
      <div>
        <h1>Hello!</h1>
        <p> Welcome to my website! As you have most likely guessed already, my name is Deja Dunlap. I'm a rising senior at Yale University studying Applied Mathematics with a concentration in Computer Science.
            I'm currently a Mellon May and Edward A. Bouchet Research Fellowship, where I study computational understanding of minority dialects, specifically African-American Verncular English. My broader research interest are in the intersections between 
            artificial intelligence, society, and industry. I'm interested specifically interested in studying bias in AI and developing guidelines in the implementations and development of AI in industry.
        </p>
        <p> On the more personal side, I'm originally from Las Vegas, Nevada (I know - weird place to call home). I have whooping 10 siblings, including an identical twin sister. I'm a first generation/low-income student, and I attend Yale through the Questbridge Scholarship. 
            When I'm not re-watching Grey's Anatomy (specifically seasons 4-10), I'm either reading, working out, or calling my family.
        </p>
        <p>
            You can learn more about my academic and professional experiences <a href="./cv">here</a>, see some of the things that I'm working on <a href="./projects"> here</a>, or contact me <a href="./contact"> here</a>. Hope to hear from you soon!
        </p>
      </div>
    );
};