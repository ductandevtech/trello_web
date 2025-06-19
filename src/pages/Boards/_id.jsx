//board dettail

import { Container } from '@mui/material'
import HeaderBar from '~/components/HeaderBar'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'

function Board() {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
        <HeaderBar/>
        <BoardBar/>
        <BoardContent/>
      </Container>
    </>
  )
}

export default Board
