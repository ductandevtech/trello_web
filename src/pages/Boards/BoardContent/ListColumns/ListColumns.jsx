import { NoteAdd } from '@mui/icons-material'
import Column from './Column/Column'
import { Box, Button } from '@mui/material'

function ListColumns({ columns }) {

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
      {columns?.map((column, index) => {
        return <Column key={index} column={column}/>
      })}

      <Box sx={{
        minWidth: '200px',
        maxWidth: '200px',
        mx: 2,
        borderRadius: '6px',
        height: 'fit-content',
        bgcolor: '#ffffff3d'
      }}>
        <Button
          startIcon={<NoteAdd/>}
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start'
          }}
        >Add new column</Button>
      </Box>
    </Box>
  )
}

export default ListColumns