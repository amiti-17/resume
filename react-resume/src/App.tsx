import React from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import { resumeData } from './data/resumeData';

function App() {
  return (
    <Layout>
      <Header data={resumeData} />

      <Section title="Summary">
        <p>{resumeData.about}</p>
      </Section>

      <Section title="Projects">
        <Projects data={resumeData.projects} />
      </Section>

      <Section title="Experience & Self-Study">
        <Experience data={resumeData.experience} />
      </Section>

      <Section title="Skills">
        <Skills data={resumeData.skills} />
      </Section>

      <Section title="Education">
        <Education data={resumeData.education} />
      </Section>
    </Layout>
  );
}

export default App;
