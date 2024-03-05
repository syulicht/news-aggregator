import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material'
import React from 'react'

function NewsItem(props) {
  const {title, urlToImage, description, url} = props.data;
  return (
    <Card sx={{maxWidth: "800px"}}>
      <CardMedia component="img" image={urlToImage} alt='' height='150'/>
      <CardContent>
      <Typography variant='h5'>{title}</Typography>
      <Typography variant='body'>{description}</Typography>
      <Link href={url} sx={{display: 'block'}}>記事を読む</Link>
      </CardContent>
    </Card>
  )
}

export default NewsItem