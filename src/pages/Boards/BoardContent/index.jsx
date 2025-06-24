
import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'


function BoardContent() {
  return (
    // box all column
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,

      display:'flex'
    }}>
      {/* box column */}
      <ListColumns/>


    </Box>
  )
}

export default BoardContent
