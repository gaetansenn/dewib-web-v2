import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    global: group({
      title: 'Website',
      description: 'Global website configuration',
      icon: 'lucide:settings',
      fields: {
        available: field({
          type: 'boolean',
          title: 'Available',
          description: 'Your availability.',
          icon: 'lucide:check',
          default: true
        }),
        email: field({
          type: 'string',
          title: 'Email',
          description: 'Your email address.',
          icon: 'lucide:mail',
          default: 'gaetan.senn@gmail.com'
        }),
        meetingLink: field({
          type: 'string',
          title: 'Meeting Link',
          description: 'Link used for the “Let’s talk” button (e.g. Calendly/Cal.com).',
          icon: 'lucide:calendar',
          default: ''
        }),
        location: field({
          type: 'string',
          title: 'Location',
          description: 'Your base location.',
          icon: 'lucide:map-pin',
          default: 'Paris, France'
        }),
        resumeLink: field({
          type: 'string',
          title: 'Resume URL',
          description: 'Public link to your résumé/CV (PDF, Notion, GitHub, etc.).',
          icon: 'lucide:file-text',
          default: ''
        }),
        social: group({
          title: 'Social',
          description: 'Your social profiles.',
          icon: 'lucide:share-2',
          fields: {
            github: field({
              type: 'string',
              title: 'GitHub',
              description: 'Your GitHub profile.',
              icon: 'i-simple-icons-github',
              default: 'https://github.com/gaetansenn'
            }),
            linkedin: field({
              type: 'string',
              title: 'LinkedIn',
              description: 'Your LinkedIn profile.',
              icon: 'i-simple-icons-linkedin',
              default: 'https://www.linkedin.com/in/gaetan-senn-9729327b/'
            }),
            twitter: field({
              type: 'string',
              title: 'Twitter / X',
              description: 'Your Twitter/X profile.',
              icon: 'i-simple-icons-x',
              default: 'https://x.com/gaetansenn'
            }),
            spotify: field({
              type: 'string',
              title: 'Spotify (Sable Noir)',
              description: 'Link to your band on Spotify.',
              icon: 'i-simple-icons-spotify',
              default: 'https://open.spotify.com/intl-fr/artist/6VsmPA7PcXbgYfjWVNkMnp'
            })
          }
        }),
        picture: group({
          title: 'Picture',
          description: 'Your profile picture.',
          icon: 'lucide:user',
          fields: {
            dark: field({
              type: 'string',
              title: 'Dark mode',
              description: 'Your profile picture in dark mode.',
              icon: 'lucide:moon',
              default: '/images/me.jpg'
            }),
            light: field({
              type: 'string',
              title: 'Light mode',
              description: 'Your profile picture in light mode.',
              icon: 'lucide:sun',
              default: '/images/me.jpg'
            }),
            alt: field({
              type: 'string',
              title: 'Alt text',
              description: 'Your profile picture alt text.',
              icon: 'lucide:image',
              default: 'My profile picture'
            })
          }
        })
      }
    }),
    ui: group({
      title: 'UI',
      description: 'UI Customization.',
      icon: 'i-mdi-palette-outline',
      fields: {
        colors: group({
          title: 'Colors',
          description: 'Manage main colors of your application',
          icon: 'i-mdi-palette-outline',
          fields: {
            primary: field({
              title: 'Primary',
              description: 'Primary color of your UI.',
              icon: 'i-mdi-palette-outline',
              options: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'],
              default: 'violet'
            }),
            neutral: field({
              title: 'Neutral',
              description: 'Neutral color of your UI.',
              icon: 'i-mdi-palette-outline',
              options: ['slate', 'gray', 'zinc', 'neutral', 'stone'],
              default: 'slate'
            })
          }
        }),
        icons: group({
          title: 'Icons',
          description: 'Manage icons used in the application.',
          icon: 'i-mdi-application-settings-outline',
          fields: {
            search: field({
              type: 'icon',
              title: 'Search Bar',
              description: 'Icon to display in the search bar.',
              icon: 'i-mdi-magnify',
              default: 'i-lucide-search'
            }),
            dark: field({
              type: 'icon',
              title: 'Dark mode',
              description: 'Icon of color mode button for dark mode.',
              icon: 'i-mdi-moon-waning-crescent',
              default: 'i-lucide-moon'
            }),
            light: field({
              type: 'icon',
              title: 'Light mode',
              description: 'Icon of color mode button for light mode.',
              icon: 'i-mdi-white-balance-sunny',
              default: 'i-lucide-sun'
            }),
            external: field({
              type: 'icon',
              title: 'External Link',
              description: 'Icon for external link.',
              icon: 'i-mdi-arrow-top-right',
              default: 'i-lucide-external-link'
            }),
            chevron: field({
              type: 'icon',
              title: 'Chevron',
              description: 'Icon for chevron.',
              icon: 'i-mdi-chevron-down',
              default: 'i-lucide-chevron-down'
            }),
            hash: field({
              type: 'icon',
              title: 'Hash',
              description: 'Icon for hash anchors.',
              icon: 'i-ph-hash',
              default: 'i-lucide-hash'
            })
          }
        })
      }
    }),
    seo: group({
      title: 'SEO',
      description: 'SEO configuration.',
      icon: 'i-ph-app-window',
      fields: {
        siteName: field({
          type: 'string',
          title: 'Site Name',
          description: 'Used in og:site_name and as the second part of your page title.',
          icon: 'i-mdi-web',
          default: 'Gaetan SENN — Portfolio'
        })
      }
    }),
    footer: group({
      title: 'Footer',
      description: 'Footer configuration.',
      icon: 'i-mdi-page-layout-footer',
      fields: {
        credits: field({
          type: 'string',
          title: 'Footer credits section',
          description: 'Text to display as credits in the footer.',
          icon: 'i-mdi-circle-edit-outline',
          default: ''
        }),
        links: field({
          type: 'array',
          title: 'Links',
          description: 'Array of link objects displayed in footer.',
          icon: 'i-mdi-link-variant',
          default: []
        })
      }
    })
  }
})
