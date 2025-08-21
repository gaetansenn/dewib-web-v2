export default defineAppConfig({
  global: {
    picture: {
      dark: '/images/me.jpg',
      light: '/images/me.jpg',
      alt: 'My profile picture'
    },
    // meetingLink: 'https://cal.com/',
    email: 'gaetan.senn@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    }
  },
  uiPro: {
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/gaetansenn',
      'target': '_blank',
      'aria-label': 'Gaetan SENN on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/gaetansenn',
      'target': '_blank',
      'aria-label': 'Gaetan SENN on GitHub'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/gaetan-senn-9729327b/',
      'target': '_blank',
      'aria-label': 'Gaetan SENN on LinkedIn'
    }]
  }
})
