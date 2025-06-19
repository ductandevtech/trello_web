import { BorderColor } from '@mui/icons-material'
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const HEADER_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${HEADER_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HEADER_HEIGHT = '58px'
const COLUMN_FOOTER_HEIGHT = '60px'

const theme = extendTheme({
  trello: {
    headerBarheight: HEADER_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: teal[300]
        },
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        primary: {
          main: cyan[600]
        },
        secondary: orange
      }
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '0.5px',
          '&:hover': { borderWidth: '0.5px' }
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '4px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white'
          }
        }
      }
    },
    MuiTypography:{
      styleOverrides: {
        root:{
          '&.MuiTypography-body1': { fontSize: '0.875rem' }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '0.875rem',
          color: theme.palette.primary.main,
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main
          }
        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '0.875rem',
          color: theme.palette.primary.main, // Màu chữ label
          '&.Mui-focused': {
            color: theme.palette.primary.dark // Khi được focus
          }
        })
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '1.25rem'
        })
      }
    }


  }
})

export default theme
