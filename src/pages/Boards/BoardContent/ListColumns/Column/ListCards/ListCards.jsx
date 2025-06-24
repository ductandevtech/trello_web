import { Box } from '@mui/material'
import TrelloCard from './Card/Card'

function ListCards({ cards }) {
  return (
    <Box sx={{
      display:'flex',
      flexDirection: 'column',
      gap:1,
      p: '0 5px',
      m: '0 5px',
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} 
      - ${theme.spacing(2)} 
      - ${theme.trello.columnHeaderHeight}
      -${theme.trello.columnFooterHeight})`,
      '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
      '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#bfc2cf' }
    }}>
      {cards?.map((card, index) => {
        return <TrelloCard key={index} card={card} />
      })}

    </Box>
  )
}

export default ListCards