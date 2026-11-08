import React from 'react';

const skillGroups = [
  { title: 'Programming', items: 'Java, C and Python' },
  { title: 'Web development', items: 'HTML, CSS, JavaScript and React' },
  { title: 'Tools and coursework', items: 'MATLAB, data structures and problem solving' }
];

export default function About() {
  return (
    <div className="page content-page">
      <section className="page-intro">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h1>About <span>Raina</span></h1>
        <p>I’m a B.Tech Computer Science student with an interest in learning technology through hands-on practice.</p>
      </section>

      <section className="content-card">
        <h2>My journey</h2>
        <p>
          I’m currently studying Computer Science and building my foundation in programming,
          web development and problem solving. I like learning concepts step by step and
          applying them in academic exercises and small projects.
        </p>
      </section>

      <section className="content-card">
        <h2>Education</h2>
        <div className="timeline-item">
          <span className="timeline-dot" />
          <div>
            <h3>B.Tech in Computer Science</h3>
            <p>Undergraduate student · College details can be added here</p>
          </div>
        </div>
      </section>

      <section className="content-card">
        <h2>Skills I’m developing</h2>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-card">
        <h2>Goals</h2>
        <p>To strengthen my fundamentals, gain confidence through practical experience, and create meaningful projects as I continue learning.</p>
      </section>
    </div>
  );
}
