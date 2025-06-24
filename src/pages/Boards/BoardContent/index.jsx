import { useState } from 'react'
import { Typography, Menu, MenuItem, Box, Button, Divider, ListItemIcon, ListItemText, Tooltip } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import Cloud from '@mui/icons-material/Cloud'
import theme from '~/theme'
import { AddCard, Attachment, Comment, DeleteForever, DragHandle, Group } from '@mui/icons-material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    // box all column
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,
      display:'flex',
    }}>
      {/* box column */}
      <Box sx={{
        minWidth: '300px',
        maxWidth: '300px',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
        ml: 2,
        borderRadius: '6px',
        height: 'fit-content',
        maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(2)})`,
        overflowX: 'hidden',
        overflowY: 'auto'
      }}>
        {/* box column header */}
        <Box sx={{
          height: (theme) => theme.trello.columnHeaderHeight,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '300px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0')

        }}>
          <Typography>Column title</Typography>
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
        {/* box column list card */}
        <Box sx={{
          display:'flex',
          flexDirection: 'column',
          gap:1,
          p: 2,
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} 
          - ${theme.spacing(2)} 
          - ${theme.trello.columnHeaderHeight}
          -${theme.trello.columnFooterHeight})`
        }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.pexels.com/photos/56010/dragonfly-insect-animal-wing-56010.jpeg"
              title="green iguana"
            />
            <CardContent>
              <Typography>Thanh vien nhom</Typography>
            </CardContent>
            <CardActions sx={{ p: '0 4px 8px 4px' }}>
              <Button size="small" startIcon={<Group/>}>10</Button>
              <Button size="small" startIcon={<Comment/>}>20</Button>
              <Button size="small" startIcon={<Attachment/>}>20</Button>
            </CardActions>

          </Card>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, .2)'
          }}>
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': { p: '16px' },
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography>Card 01</Typography>
            </CardContent>
          </Card>

          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, .2)'
          }}>
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': { p: '16px' },
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography>Card 02</Typography>
            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, .2)'
          }}>
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': { p: '16px' },
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography>Card 02</Typography>
            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, .2)'
          }}>
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': { p: '16px' },
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography>Card 02</Typography>
            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, .2)'
          }}>
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': { p: '16px' },
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography>Card 02</Typography>
            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, .2)'
          }}>
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': { p: '16px' },
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography>Card 02</Typography>
            </CardContent>
          </Card>

        </Box>
        {/* box column footer */}
        <Box sx={{
          height: (theme) => theme.trello.columnFooterHeight,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Button startIcon={<AddCard/>}>Add new card</Button>
          <Tooltip title='Drag the column'>
            <DragHandle sx={{ cursor:'pointer' }}/>
          </Tooltip>
        </Box>
      </Box>
      {/* box column test */}
      <Box sx={{
        minWidth: '300px',
        maxWidth: '300px',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
        ml: 2,
        borderRadius: '6px',
        height: 'fit-content',
        maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(2)})`,
        overflowX: 'hidden',
        overflowY: 'auto'
      }}>
        {/* box column header */}
        <Box sx={{
          height: (theme) => theme.trello.columnHeaderHeight,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'fixed',
          width: '300px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0')

        }}>
          <Typography>Column title</Typography>
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
        {/* box column list card */}
        <Box sx={{
          display:'flex',
          flexDirection: 'column',
          gap:1,
          p: 2,
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} 
          - ${theme.spacing(2)} 
          - ${theme.trello.columnHeaderHeight}
          -${theme.trello.columnFooterHeight})`,
          marginTop: (theme) => (theme.trello.columnHeaderHeight)
        }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://images.pexels.com/photos/56010/dragonfly-insect-animal-wing-56010.jpeg"
              title="green iguana"
            />
            <CardContent>
              <Typography>Thanh vien nhom</Typography>
            </CardContent>
            <CardActions sx={{ p: '0 4px 8px 4px' }}>
              <Button size="small" startIcon={<Group/>}>10</Button>
              <Button size="small" startIcon={<Comment/>}>20</Button>
              <Button size="small" startIcon={<Attachment/>}>20</Button>
            </CardActions>

          </Card>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, .2)'
          }}>
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': { p: '16px' },
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography>Card 01</Typography>
            </CardContent>
          </Card>

          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, .2)'
          }}>
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': { p: '16px' },
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography>Card 02</Typography>
            </CardContent>
          </Card>
          <Card sx={{
            cursor: 'pointer',
            boxShadow: '0 1px 1px rgba(0, 0, 0, .2)'
          }}>
            <CardContent
              sx={{
                p: 1.5,
                '&:last-child': { p: '16px' },
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Typography>Card 02</Typography>
            </CardContent>
          </Card>

        </Box>
        {/* box column footer */}
        <Box sx={{
          height: (theme) => theme.trello.columnFooterHeight,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Button startIcon={<AddCard/>}>Add new card</Button>
          <Tooltip title='Drag the column'>
            <DragHandle sx={{ cursor:'pointer' }}/>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent
