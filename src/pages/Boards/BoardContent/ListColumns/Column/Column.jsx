
import { Box } from '@mui/material'
import ListCards from './ListCards/ListCards'
import ColumnFooter from './ColumnFooter'
import ColumnHeader from './ColumnHeader'
function Column({ column }) {
  return (
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
      <ColumnHeader columnHeader = {column}/>
      <ListCards cards={column?.cards}/>
      <ColumnFooter />
    </Box>
  )
}

export default Column