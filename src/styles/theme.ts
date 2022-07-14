import { PaletteMode } from '@mui/material'


const themeConfigs = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        background: {
          default: '#fafafa',
          paper: '#ffffff',
        },
      }
      : {
        // palette values for dark mode
        background: {
          default: '#303030',
          paper: '#424242',
        },
      }),
  },
});

export default themeConfigs

export function methodChipStyle(method: string) {
  switch (method) {
    case 'GET':
      return 'success'
    case 'POST':
      return 'info'
    default:
      return 'warning'
  }
}
