import Box from '@mui/material/Box'

function BoardContent() {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      width: '100%',
      height: (theme) => theme.trello.contentBarHeight,
      display: 'flex',
      alignItems: 'center'

    }}>
      content box
    </Box>
  )
}

export default BoardContent
