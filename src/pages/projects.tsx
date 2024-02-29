import Layout from '@theme/Layout';
import React, { useState } from 'react';
import styles from './projects.module.css';

const projects = [
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1',
    link: 'google.com',
    stack: ['React', 'Node', 'MongoDB'],
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do projeto',
    link: 'google.com',
    stack: ['React', 'Node', 'MongoDB'],
  },
];

const stack = projects
  .map(({ stack }) => stack)
  .flat()
  .filter((value, index, self) => self.indexOf(value) === index);

export default () => {
  const [stackSearch, setStackSearch] = useState('');
  const [projectSearch, setProjectSearch] = useState('');

  const handleStackSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStackSearch(event.target.value);
  };

  const handleProjectSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectSearch(event.target.value);
  };

  return (
    <Layout description="">
      <main className={styles.container}>
        <div className={styles['filter-tab']}>
          <h3>Stack</h3>
          <div>
            <input
              type="text"
              name="stack-search"
              id="stack-search"
              onChange={handleStackSearch}
            />
          </div>
          <div>
            {stack
              .filter(name => name.toLowerCase().includes(stackSearch))
              .map(name => (
                <div key={name}>
                  <span>{name}</span>
                </div>
              ))}
          </div>
        </div>
        <div className={styles['projects-display']}>
          <h3>Projects</h3>
          <input
            type="text"
            name="project-search"
            id="project-search"
            onChange={handleProjectSearch}
          />
          {projects
            .filter(({ title }) => title.toLowerCase().includes(projectSearch))
            .map(({ title }) => (
              <div key={title}>
                <h3>{title}</h3>
              </div>
            ))}
        </div>
      </main>
    </Layout>
  );
};
