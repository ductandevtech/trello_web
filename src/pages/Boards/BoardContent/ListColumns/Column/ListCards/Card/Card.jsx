
import { Typography, Button } from '@mui/material'
import { Attachment, Comment, Group } from '@mui/icons-material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

function TrelloCard() {
  return (
    <Card sx={{ maxWidth: 345,
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, .2)'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.pexels.com/photos/56010/dragonfly-insect-animal-wing-56010.jpeg"
        title="green iguana"
      />
      <CardContent>
        <Typography>Thanh vien nhom</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={<Group/>}>10</Button>
        <Button size="small" startIcon={<Comment/>}>20</Button>
        <Button size="small" startIcon={<Attachment/>}>20</Button>
      </CardActions>
    </Card>
  )
}

export default TrelloCard