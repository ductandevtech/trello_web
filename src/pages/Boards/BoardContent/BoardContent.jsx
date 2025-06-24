
import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'


function BoardContent({ board }) {
  return (
    // box all column
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,

      display:'flex'
    }}>
      {/* box column */}
      <ListColumns columns = {board?.columns}/>


    </Box>
  )
}

export default BoardContent
