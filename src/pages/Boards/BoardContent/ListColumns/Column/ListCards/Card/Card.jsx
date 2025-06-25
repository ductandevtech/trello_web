
import { Typography, Button } from '@mui/material'
import { Attachment, Comment, Group } from '@mui/icons-material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'


function TrelloCard({ card }) {
  const isShowCard = () => {
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
  }
  return (
    <Card sx={{ maxWidth: 345,
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, .2)',
      overflow:'unset'
    }}>
      {card?.cover && (
        <CardMedia
          sx={{ height: 140 }}
          image={card?.cover}
          title="green iguana"
        />
      )}
      <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      {isShowCard() && <CardActions sx={{ p: '0 4px 8px 4px' }}>
        {!!card?.memberIds?.length && <Button size="small" startIcon={<Group/>}>{card?.memberIds?.length}</Button>}
        {!!card?.comments?.length && <Button size="small" startIcon={<Comment/>}>{card?.comments?.length}</Button>}
        {!!card?.attachments?.length && <Button size="small" startIcon={<Attachment/>}>{card?.attachments?.length}</Button>}
      </CardActions>}
    </Card>
  )
}

export default TrelloCard