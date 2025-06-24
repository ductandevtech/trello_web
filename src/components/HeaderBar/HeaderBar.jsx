import ModeSelect from '../ModeSelect/ModeSelect'
import Box from '@mui/material/Box'
import { HelpOutline, LibraryAdd, NotificationsNone, Apps as AppsIcon } from '@mui/icons-material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import Badge from '@mui/material/Badge'
import Profiles from './Menu/Profiles'
import Recent from './Menu/Recent'
import Starred from './Menu/Starred'
import Templates from './Menu/Templates'
import Workspaces from './Menu/Workspaces'

function HeaderBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.headerBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingX:'12px',
      backgroundColor:(theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color:'primary.main' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color:'primary.main' }}>
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Trello</Typography>
        </Box>
        <Box sx={{ display:{ xs: 'none', md: 'flex' } }}>
          <Workspaces/>
          <Recent/>
          <Templates/>
          <Starred/>
          <Button sx={{
            color: 'primary.main',
            border: 'none',
            '&:hover': { border: 'none' }
          }}
          variant='outlined'
          startIcon={<LibraryAdd/>}>
              Create
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Search..." variant="outlined" size ="small" />
        </Box>
        <ModeSelect />
        <Tooltip title="Notification">
          <Badge color='warning' variant='dot' sx={{ cursor: 'pointer' }}>
            <NotificationsNone sx={{ cursor: 'pointer' }}/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutline sx={{ cursor: 'pointer' }}/>
        </Tooltip>
        <Profiles/>
      </Box>
    </Box>
  )
}

export default HeaderBar
