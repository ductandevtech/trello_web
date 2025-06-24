import { Typography, Menu, MenuItem, Box, Divider, ListItemIcon, ListItemText, Tooltip } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import Cloud from '@mui/icons-material/Cloud'
import { DeleteForever } from '@mui/icons-material'
import { useState } from 'react'
function ColumnHeader({ columnHeader }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box sx={{
      height: (theme) => theme.trello.columnHeaderHeight,
      p: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '300px',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0')

    }}>
      <Typography>{columnHeader.title}</Typography>
      <Tooltip title='more options'>
        <ExpandMoreIcon
          id = 'basic-button-list'
          sx={{ color:'text.primary', cursor:'pointer' }}
          aria-haspopup='true'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          onClick = {handleClick}

        />
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-workspaces'
        }}
      >
        <MenuItem>
          <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
          <ListItemText>Cut</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
          <ListItemText>Copy</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon><DeleteForever fontSize="small" /></ListItemIcon>
          <ListItemText>Delete Clipboard</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default ColumnHeader