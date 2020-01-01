import Typography from 'typography'
import theme from '../styles/theme'

const typography = new Typography({
  title: 'Monkishtypist',
  baseFontSize: '16px',
  baseLineHeight: 1.4,
  googleFonts: [
    {
      name: 'Muli',
      styles: [
        '300',
        '400',
        '400i',
        '500',
        '700',
        '700i',
      ],
    },
  ],
  headerFontFamily: [
    'Muli',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  headerWeight: 500,
  bodyFontFamily: [
    'Muli',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    html: {
      overflowY: `none`,
    },
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1.1,
    },
    h5: {
      fontWeight: 400,
    },
    a: {
      color: `${theme.colors.highlight}`,
      textDecoration: 'none',
    },
    'a:hover': {
      textDecoration: 'underline',
    },
    blockquote: {
      borderLeft: `4px solid ${theme.colors.highlight}`,
      marginLeft: 0,
      paddingLeft: `1rem`,
    },
    hr: {
      borderTop: `1px solid ${theme.colors.highlight}`,
      height: 0,
      width: '100%',
    },
    'code,pre': {
      backgroundColor: `${theme.colors.light}`,
      border: `.5px solid ${theme.colors.highlight}`,
      borderRadius: '3px',
      padding: '.1em .3em',
    },
    'pre > code': {
      border: 'none',
    }
  })
})

export const { scale, rhythm, options } = typography

export default typography
