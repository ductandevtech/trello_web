import Column from './Column/Column'
import { Box } from '@mui/material'

function ListColumns() {

  return (
    <Box sx={{
      bgcolor: 'inherit',
      width: '100%',
      height: '100%',
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      '&::-webkit-scrollback-track':{ m:2 }

    }}>
      <Column/>
    </Box>
  )
}

export default ListColumns