import React from 'react';
import { Link } from 'react-router-dom';

const skills = ['Java', 'C', 'Python', 'HTML', 'CSS', 'JavaScript', 'React', 'MATLAB'];

export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">HELLO, I'M</p>
          <h1>Raina<span>.</span></h1>
          <h2>Computer Science Student</h2>
          <p className="hero-description">
            I’m a B.Tech Computer Science student exploring technology, building projects
            and learning how to turn ideas into useful digital experiences.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/about">Explore my profile</Link>
            <Link className="button button-secondary" to="/contact">Get in touch</Link>
          </div>
        </div>
        <div className="portrait-wrap">
          <img className="portrait" src="/my-photo.png" alt="Raina's portrait" />
          <span className="portrait-caption">A little about me</span>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">WHAT I'M LEARNING</p>
          <h2>My technical toolkit</h2>
        </div>
        <div className="skill-list">
          {skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
        </div>
        <p className="small-note">These are technologies I’m studying and practising through coursework and projects.</p>
      </section>

      <section className="project-highlight">
        <div>
          <p className="eyebrow">CURRENTLY EXPLORING</p>
          <h2>Learning by building</h2>
          <p>I enjoy working through practical assignments and developing my skills one project at a time.</p>
        </div>
        <Link className="text-link" to="/about">More about me →</Link>
      </section>
    </div>
  );
}
