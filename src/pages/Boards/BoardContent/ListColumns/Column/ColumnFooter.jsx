import { AddCard, DragHandle } from '@mui/icons-material'
import { Box, Button, Tooltip } from '@mui/material'

function ColumnFooter() {
  return (
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
  )
}

export default ColumnFooter