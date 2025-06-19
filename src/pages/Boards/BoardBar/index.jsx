
import { AddToDrive, Bolt, Dashboard, FilterList, PersonAdd, VpnLock } from '@mui/icons-material'
import { Avatar, AvatarGroup, Box, Button, Chip, Tooltip } from '@mui/material'

function BoardBar({ board }) {
  const menu_Style = {
    color: 'white',
    bgcolor: 'transparent',
    border: 'none',
    paddingX: '5px',
    borderRadius: '4px',
    '.MuiSvgIcon-root': {
      color: 'white'
    },
    '&hover': {
      bgcolor: 'primary.50'
    }
  }
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflow: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1976d2')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Tooltip title={board?.description}>
          <Chip
            sx={menu_Style}
            clickable
            icon={<Dashboard/>}
            label={board?.title}
          />
        </Tooltip>
        <Chip
          sx={menu_Style}
          clickable
          icon={<VpnLock/>}
          label={board?.type === 'public' ? 'Public' : 'Private'}
        />
        <Chip
          sx={menu_Style}
          clickable
          icon={<AddToDrive/>}
          label="Add To Google Drive"
        />
        <Chip
          sx={menu_Style}
          clickable
          icon={<Bolt/>}
          label="Automations"
        />
        <Chip
          sx={menu_Style}
          clickable
          icon={<FilterList/>}
          label="Filters"
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant='outlined'
          startIcon={<PersonAdd/>}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={5}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16
            }
          }}
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
