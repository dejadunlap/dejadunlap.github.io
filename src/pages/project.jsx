import React from 'react';
import Projects from '../components/Project';

export default function Project () {
    return (
      <div>
        <h1>Publications</h1>
          <ul>
            <li><Projects title="Evaluating Usage of African-American Vernacular English in Large Language Models" 
            authors="Dunlap D. and Mccoy R.T." 
            journal="17th International Conference, Cross-Cultural Desgin 2026, 28th HCI International Conference, HCII 2026"
            date="(2026)"
            abstract="Large language models (LLMs) accurately capture many aspects of human language use. However, most analyses of them involve standardized dialects such as Standard American English. In this work, we investigate how accurately LLMs represent African American Vernacular English (AAVE). We analyze three LLMs - Llama 3.8, GPT-4o mini, and Gemma 2.27 - to compare their usage of AAVE to actual AAVE used by people. We first analyzed interviews from the Corpus of Regional African American Language to identify the typical contexts where people use AAVE grammatical
                      features such as “ain’t”. We then prompted the LLMs to produce text in AAVE and compared the model-generated text to human usage patterns. We find that, in many cases, there are substantial differences between AAVE usage in LLMs and humans: LLMs usually misrepresent grammatical features characteristic of AAVE. Furthermore, through sentiment analysis and manual inspection, we found that the models reflected concerning stereotypes about African-American
                      upbringing and culture. These results highlight the need for more diversity in the data used to train models to mitigate the potential of spreading offensive and stereotyped views of African-American language and culture."
            code="https://github.com/dejadunlap/AAVE_AI_Feature_Detection"/></li>
            <li><Projects title="An Association of Twitter Derived Measures of Discrimination and Race-Motivated Hate Crimes" 
            authors="Dunlap D. and Park S."
            journal="Journal of High School Research"
            date="(2022)"
            abstract="In 2020, there was a sharp rise in Anti-Asian American hate crimes. While the causes are still being explored, one of the main reasons this occurred was due to the rise in Anti-Asian American rhetoric connected to the COVID-19 pandemic. This exemplifies how prejudices often can turn into violence, more specifically hate crimes. And hateful speech, oftentimes spread through the internet, can help spread and deepen that prejudice to a wider audience. In previous research, prejuidice and discrimination has largely been studied through self-reported measures. While those studies are necessary, they are susceptible to many pitfalls and should be supplemented with statistics-based measures. This study employs one of these emerging measures. This study used the Twitter Streaming API to collect tweets containing a racial slur, an extension of hateful speech, geo-located from users in the United States over a period of two months. With these, this study compared statewide Twitter racial slur usage and statewide average sentiment polarity of the tweets with race-motivated hate crimes from the state. Though no relationship was found between statewide sentiment expressed and race-motivated hate crimes, this study did find a significant positive relationship between statewide Twitter slur usage and hate crimes. These findings support previous studies that have connected Internet-based measures of discrimination with aspects of general well-being. and even specifically hate crimes. This study shows the potential of using data derived from social media to create cost effective and expansive indicators of an area’s social climate around a topic, even race." 
            paper="https://www.jsr.org/hs/index.php/path/article/view/2819" 
            code="https://github.com/dejadunlap/APResearchProject"/></li> 
          </ul>
        <h1>Datasets</h1>
        <ul>
          <li><Projects title="LLM Generated Speech of African American Vernacular English" authors="Dunlap D." abstract="The synthetic dataset generated for the (Dunlap & Mccoy, 2026) project. LLMs from three different model families -- ChatGPT, Llama, Gemma -- produced text in the 'voice' of an African American. Text was generated across two formats -- sociolinguistic interviews and tweets. The dataset was used to compare LLMs usage to human usage of grammatical features associated with African American Vernacular English." dataset="link"/></li>

        </ul>
      </div>
    );
}