import Typography from 'typography'

// import moragaTheme from 'typography-theme-moraga'
// const typography = new Typography(moragaTheme)

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.1,
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
  bodyFontFamily: [
    'Muli',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  headerWeight: 300
})

export const { scale, rhythm, options } = typography

export default typography
