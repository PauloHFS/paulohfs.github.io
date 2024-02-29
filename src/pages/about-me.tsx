import Layout from '@theme/Layout';
import React from 'react';

export default function Hello() {
  return (
    <Layout title="Paulo Hernane | Sobre mim" description="">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}
      >
        <p>
          Edit <code>pages/about-me.tsx</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}
