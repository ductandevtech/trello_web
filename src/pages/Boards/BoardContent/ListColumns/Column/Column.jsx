
import { Box } from '@mui/material'
import ListCards from './ListCards/ListCards'
import ColumnFooter from './ColumnFooter'
import ColumnHeader from './ColumnHeader'
import { mapOrder } from '~/utils/sorts'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'


function Column({ column }) {
  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id')

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({
    id: column._id,
    data: { ...column } })

  const dndKitColumnStyle = {
    transform: CSS.Translate.toString(transform),
    transition
  }
  return (
    <Box
      ref={setNodeRef}
      style={dndKitColumnStyle}
      {...attributes}
      {...listeners}
      sx={{
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
      <ListCards cards={orderedCards}/>
      <ColumnFooter />
    </Box>
  )
}

export default Column