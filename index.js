const { theme } = require('./src/theme.js')

const CLASS_PREFIX = 'orc-'

/** @type {import('tailwindcss').Config} */
module.exports = {
  preset: [require('./src/theme')],
  prefix: CLASS_PREFIX,
  theme: {
    extend: {
      colors: {
        brand: theme.colors.green[50],
        logo: theme.colors.green[50],
        accent: theme.colors.magenta[50],
      },
      textColor: {
        'DEFAULT': 'var(--od-sys-color-foreground-base)',
        'base': 'var(--od-sys-color-foreground-base)',
        'subtle': 'var(--od-sys-color-foreground-subtle)',
        'muted': 'var(--od-sys-color-foreground-muted)',
        'link': {
          DEFAULT: 'var(--od-sys-color-foreground-link)',
          emphasis: 'var(--od-sys-color-foreground-linkEmphasis)'
        },
        'role': {
          'success': {
            DEFAULT: 'var(--od-sys-color-foreground-success)',
            emphasis: 'var(--od-sys-color-foreground-successEmphasis)'
          },
          'info': {
            DEFAULT: 'var(--od-sys-color-foreground-info)',
            emphasis: 'var(--od-sys-color-foreground-infoEmphasis)'
          },
          'warning': {
            DEFAULT: 'var(--od-sys-color-foreground-warning)',
            emphasis: 'var(--od-sys-color-foreground-warningEmphasis)'
          },
          'danger': {
            DEFAULT: 'var(--od-sys-color-foreground-danger)',
            emphasis: 'var(--od-sys-color-foreground-dangerEmphasis)'
          }
        }
      },
      backgroundColor: {
        'inherit': 'inherit',
        'current': 'currentColor',
        'transparent': 'transparent',
        'base': {
          white: 'var(--od-ref-color-base-white)',
          black: 'var(--od-ref-color-base-black)'
        },
        'layer': {
          'base': 'var(--od-sys-color-background-base)',
          '0': 'var(--od-sys-color-background-surface-layer1)',
          '1': 'var(--od-sys-color-background-surface-layer1)',
          '2': 'var(--od-sys-color-background-surface-layer2)',
          '3': 'var(--od-sys-color-background-surface-layer3)',
        },
        'brand': 'var(--od-sys-color-background-brand)',
        'role': {
          'success': {
            DEFAULT: 'var(--od-sys-color-background-success)',
            emphasis: 'var(--od-sys-color-background-successEmphasis)'
          },
          'info': {
            DEFAULT: 'var(--od-sys-color-background-info)',
            emphasis: 'var(--od-sys-color-background-infoEmphasis)'
          },
          'warning': {
            DEFAULT: 'var(--od-sys-color-background-warning)',
            emphasis: 'var(--od-sys-color-background-warningEmphasis)'
          },
          'danger': {
            DEFAULT: 'var(--od-sys-color-background-danger)',
            emphasis: 'var(--od-sys-color-background-dangerEmphasis)'
          }
        }
      },
      fill           : ({ theme }) => ({ ...theme('backgroundColor') }),
      borderRadius: {
        'none': 'var(--od-sys-border-radius-none)',
        'sm': 'var(--od-sys-border-radius-small)',
        'md': 'var(--od-sys-border-radius-medium)',
        'lg': 'var(--od-sys-border-radius-large)',
        'xl': 'var(--od-sys-border-radius-extraLarge)',
        'rounded': 'var(--od-sys-border-radius-rounded)'
      },
      borderColor: {
        'DEFAULT': 'var(--od-sys-border-default)',
        'default': {
          DEFAULT: 'var(--od-sys-border-default)',
          emphasis: 'var(--od-sys-border-emphasis)'
        },
        'subtle': 'var(--od-sys-border-subtle)',
        'subtlest': 'var(--od-sys-border-subtlest)',
        'success': {
          DEFAULT: 'var(--od-sys-border-success)',
          emphasis: 'var(--od-sys-border-successEmphasis)'
        },
        'info': {
          DEFAULT: 'var(--od-sys-border-info)',
          emphasis: 'var(--od-sys-border-infoEmphasis)'
        },
        'warning': {
          DEFAULT: 'var(--od-sys-border-warning)',
          emphasis: 'var(--od-sys-border-warningEmphasis)'
        },
        'danger': {
          DEFAULT: 'var(--od-sys-border-danger)',
          emphasis: 'var(--od-sys-border-dangerEmphasis)'
        }
      },
      zIndex: {
        '1': 1,
        'tooltip': 'var(--od-ref-z-index-tooltip)',
        'popover': 'var(--od-ref-z-index-popover)',
        'snackbar': 'var(--od-ref-z-index-snackbar)',
        'toast': 'var(--od-ref-z-index-toast)',
        'alert': 'var(--od-ref-z-index-alert)',
        'modal': 'var(--od-ref-z-index-modal)'
      },
      fontSize: {
        'heading-6': [
          theme.fontSize.lg,
          {
            lineHeight: 'var(--od-sys-typescale-heading-6-lineHeight)',
            letterSpacing: 0
          }
        ],
        'heading-5': [
          theme.fontSize['2xl'],
          {
            lineHeight: 'var(--od-sys-typescale-heading-5-lineHeight)',
            letterSpacing: 0
          }
        ],
        'heading-4': [
          theme.fontSize['3xl'],
          {
            lineHeight: 'var(--od-sys-typescale-heading-4-lineHeight)',
            letterSpacing: 0
          }
        ],
        'heading-3': [
          theme.fontSize['4xl'],
          {
            lineHeight: 'var(--od-sys-typescale-heading-3-lineHeight)',
            letterSpacing: 0
          }
        ],
        'heading-2': [
          theme.fontSize['6xl'],
          {
            lineHeight: 'var(--od-sys-typescale-heading-2-lineHeight)',
            letterSpacing: 0
          }
        ],
        'heading-1': [
          theme.fontSize['7xl'],
          {
            lineHeight: 'var(--od-sys-typescale-heading-7-lineHeight)',
            letterSpacing: 0
          }
        ],
        'body': [
          theme.fontSize.md,
          {
            lineHeight: 'var(--od-sys-typescale-body-medium-lineHeight)',
            letterSpacing: 'var(--od-sys-typescale-body-medium-letterSpacing)',
            fontWeight: 'var(--od-sys-typescale-body-medium-weight)'
          }
        ],
        'body-sm': [
          theme.fontSize.sm,
          {
            lineHeight: 'var(--od-sys-typescale-body-small-lineHeight)',
            letterSpacing: 'var(--od-sys-typescale-body-small-letterSpacing)',
            fontWeight: 'var(--od-sys-typescale-body-small-weight)'
          }
        ],
        'body-lg': [
          theme.fontSize.lg,
          {
            lineHeight: 'var(--od-sys-typescale-body-large-lineHeight)',
            letterSpacing: 'var(--od-sys-typescale-body-large-letterSpacing)',
            fontWeight: 'var(--od-sys-typescale-body-large-weight)'
          }
        ],
        'label': [
          'var(--od-sys-typescale-label-medium-size)',
          {
            lineHeight: 'var(--od-sys-typescale-label-medium-lineHeight)',
            letterSpacing: 'var(--od-sys-typescale-label-medium-letterSpacing)',
            fontWeight: 'var(--od-sys-typescale-label-medium-weight)'
          }
        ],
        'label-tiny': [
          'var(--od-sys-typescale-label-tiny-size)',
          {
            lineHeight: 'var(--od-sys-typescale-label-tiny-lineHeight)',
            letterSpacing: 'var(--od-sys-typescale-label-tiny-letterSpacing)',
            fontWeight: 'var(--od-sys-typescale-label-tiny-weight)'
          }
        ],
        'label-sm': [
          'var(--od-sys-typescale-label-small-size)',
          {
            lineHeight: 'var(--od-sys-typescale-label-small-lineHeight)',
            letterSpacing: 'var(--od-sys-typescale-label-small-letterSpacing)',
            fontWeight: 'var(--od-sys-typescale-label-small-weight)'
          }
        ],
        'label-lg': [
          'var(--od-sys-typescale-label-large-size)',
          {
            lineHeight: 'var(--od-sys-typescale-label-large-lineHeight)',
            letterSpacing: 'var(--od-sys-typescale-label-large-letterSpacing)',
            fontWeight: 'var(--od-sys-typescale-label-large-weight)'
          }
        ],
      }
    }
  }
}
