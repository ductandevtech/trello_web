//board dettail

import { Container } from '@mui/material'
import HeaderBar from '~/components/HeaderBar/HeaderBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data'

function Board() {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
        <HeaderBar/>
        <BoardBar board = {mockData?.board}/>
        <BoardContent board = {mockData?.board}/>
      </Container>
    </>
  )
}

export default Board
