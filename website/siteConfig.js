/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    // caption: 'User1',
    // // You will need to prepend the image path with your baseUrl
    // // if it is not '/', like: '/test-site/img/image.jpg'.
    // image: '/img/undraw_open_source.svg',
    // infoLink: 'https://www.facebook.com',
    // pinned: true,
  },
];

const siteConfig = {
  title: 'TeamDS-Documentation', // Title for your website.
  tagline: 'A website for collaboratively working data scientists',
  url: 'https://Team-DataScientists.github.io', // Your website URL
  baseUrl: '/datascience-docs/', // Change base url forlocalusewhen blog is not woirking  Base URL for your project */ change this  
  projectName: 'datascience-docs',
  organizationName: 'Team-DataScientists',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    //{ doc: 'Profiles1/ProfilesIntro', label: 'Profiles' },
    { doc: 'DataScientistProfiles/ProfileInfo', label: 'Who Are We?' },
    { doc: 'DataScience/datascience', label: 'DataScience' },
    { doc: 'alogorithms/alogorithmsIntro', label: 'alogorithms' },
    { doc: 'doc4', label: 'Technical' },
    { doc: 'tools/tools-overview', label: 'Tools' },
    // { page: 'contribute', label: 'contribute' },
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' },
    // { search: true },
  ],

  users,

  /* path to images for header/footer */
  headerIcon: 'img/I_love_AI.png',
  footerIcon: 'img/I_love_AI.png',
  favicon: 'img/I_love_AI.png',
  /* Colors for website */
  colors: {
    primaryColor: '#085255',
    secondaryColor: '#1F618D',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} DataScience4u`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },
  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

};

module.exports = siteConfig;
