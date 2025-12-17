import React from 'react';

function Skills() {
  const skills = [
    { name: 'Illustrations', value: 60 },
    { name: 'Development', value: 80 },
    { name: 'Web Design', value: 95 },
    { name: 'Graphic Design', value: 85 },
  ];

  return (
    <section className="section skills" aria-label="Our skills">
      <div className="container">
        <p className="section-subtitle">I Make The Future</p>
        <h2 className="h2 section-title">I Develop & Create Digital Future.</h2>

        <div className="skills-wrapper">
          {/* Text Content */}
          <div>
            <p className="section-text">
              Pellentesque magna magna semper dapibus felis necatin aliuen risus. Pellentesque habitant morbi senectus dictum.
            </p>
            <p className="section-text">
              Web design magna magna semper dapibus felis necatin aliuen risus. Pellentesque habitant morbi tristique senectus the neuse malesuada nullam ac lorem miss the duru.
            </p>
            <a href="lawalabdullateef16@gmail.com" className="btn has-before">
              lawalabdullateef16@gmail.com
            </a>
          </div>

          {/* Skills List */}
          <div>
            <ul className="skills-list">
              {skills.map((skill) => (
                <li key={skill.name}>
                  <div className="progress-wrapper">
                    <p className="progress-label">{skill.name}</p>
                    <data className="progress-value" value={skill.value}>
                      {skill.value}%
                    </data>
                  </div>

                  <div className="progress-bg">
                    <div
                      className="progress"
                      style={{ width: `${skill.value}%` }}
                      role="progressbar"
                      aria-valuenow={skill.value}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
