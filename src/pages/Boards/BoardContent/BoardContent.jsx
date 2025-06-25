
import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import { DndContext } from '@dnd-kit/core'
import { useEffect, useState } from 'react'


function swap(arr, index1, index2) {
  const newArr = [...arr] 
  const temp = newArr[index1]
  newArr[index1] = newArr[index2]
  newArr[index2] = temp
  return newArr
}

function BoardContent({ board }) {
  const [orderColumnState, setOrderColumnState] = useState([])
  useEffect(() => {
    setOrderColumnState(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])
  const handleDragEnd = (e) => {
    const { active, over } = e
    if (!over) return
    if (active.id !== over.id) {

      //   const oldIndex = orderColumnState.findIndex(c => c._id === active.id)
      //   const newIndex = orderColumnState.findIndex(c => c._id === over.id)

      //   const swapped = swap(orderColumnState, oldIndex, newIndex)
      //   setOrderColumnState(swapped)

      setOrderColumnState(orderColumnState.map(item => {
        console.log(e)
        if (item._id === active.id) {
          const { sortable, ...obj } = over.data.current
          return obj
        } else if (item._id === over.id) {
          const { sortable, ...obj } = active.data.current
          return obj
        } else {
          return item
        }
      }))
    }
  }
  return (
    // box all column
    <DndContext onDragEnd={handleDragEnd}>
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,

        display:'flex'
      }}>
        {/* box column */}
        <ListColumns columns = {orderColumnState}/>
      </Box>
    </DndContext>
  )
}

export default BoardContent
