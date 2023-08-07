// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Paulo Hernane',
  tagline: 'Software Engineer & Freelancer',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.paulohernane.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PauloHFS', // Usually your GitHub org/user name.
  projectName: 'paulohernane.me', // Usually your repo name.

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-img.png',
      metadata: [
        {
          name: 'og:type',
          content: 'website',
        },
        {
          name: 'og:url',
          content: 'https://paulohernane.me',
        },
        {
          name: 'og:title',
          content: 'Paulo Hernane | Software Engineer | Freelancer',
        },
        {
          name: 'og:description',
          content:
            'Engenheiro de Software Freelancer especializado em soluções personalizadas de desenvolvimento. Experiência em várias linguagens de programação e tecnologias. Transforme suas ideias em realidade. Contate-me para um projeto de sucesso.',
        },
        {
          name: 'og:image',
          content: 'img/social-img.png',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:url',
          content: 'https://paulohernane.me',
        },
        {
          name: 'twitter:title',
          content: 'Paulo Hernane | Software Engineer | Freelancer',
        },
        {
          name: 'twitter:description',
          content:
            'Engenheiro de Software Freelancer especializado em soluções personalizadas de desenvolvimento. Experiência em várias linguagens de programação e tecnologias. Transforme suas ideias em realidade. Contate-me para um projeto de sucesso.',
        },
        {
          name: 'twitter:image',
          content: 'img/social-img.png',
        },
      ],
      navbar: {
        title: 'Paulo Hernane',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'myBrainSidebar',
            position: 'right',
            label: 'My Brain',
          },
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            href: 'https://github.com/PauloHFS',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/gpaulo_h',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/paulohernane/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/PauloHFS',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Paulo Hernane Fontes e Silva.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'php',
          'php-extras',
          'python',
          'sql',
          'javascript',
        ],
      },
    }),
};

module.exports = config;
