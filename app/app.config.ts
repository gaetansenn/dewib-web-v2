export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://media.licdn.com/dms/image/v2/D4D03AQH_WLyhSKZEjA/profile-displayphoto-crop_800_800/B4DZg83lebHAAc-/0/1753367861730?e=1758758400&v=beta&t=lDHSgZl4xv16m78VHXHd6GCuIOSlYCXCDmcs0gP1yxQ',
      light: 'https://media.licdn.com/dms/image/v2/D4D03AQH_WLyhSKZEjA/profile-displayphoto-crop_800_800/B4DZg83lebHAAc-/0/1753367861730?e=1758758400&v=beta&t=lDHSgZl4xv16m78VHXHd6GCuIOSlYCXCDmcs0gP1yxQ',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/',
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
