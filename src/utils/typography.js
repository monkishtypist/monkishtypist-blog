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
    code: {
      backgroundColor: `${theme.colors.light}`,
      borderColor: `${theme.colors.highlight}`,
      borderStyle: 'solid',
      borderWidth: '.5px',
      borderRadius: '3px',
      padding: '.1em .3em',
    },
    pre: {
      backgroundColor: `${theme.colors.light}`,
      borderColor: `${theme.colors.highlight}`,
      borderStyle: 'solid',
      borderWidth: '.5px .5px .5px 6px',
      borderRadius: '0 3px 3px 0',
      padding: '1px .3em',
    },
    'pre > code': {
      border: 'none',
      display: 'inline-block',
    },
    label: {
      color: `${theme.colors.highlight}`,
      fontWeight: 500,
      fontSize: '.8rem',
      textTransform: 'uppercase',
    },
    'label>input,label>textarea': {
      fontSize: '1rem',
    }
  })
})

export const { scale, rhythm, options } = typography

export default typography
