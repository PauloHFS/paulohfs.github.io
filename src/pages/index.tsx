import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  // ! The CSS is Broken
  return (
    <header className={styles.heroBanner}>
      <div className="">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/36555768?v=4"
          alt="me"
        />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Software Engineer, Full Stack Developer, and Open Source Enthusiast."
    >
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
