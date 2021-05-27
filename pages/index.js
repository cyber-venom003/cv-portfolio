import Head from 'next/head'
import Image from 'next/image'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => {
  return {
    image: {
      height: theme.spacing(27.5),
      width: theme.spacing(27.5),
    }
  }
})

export default function Home() {
  const classes = useStyles();
  return (
    <Container style={{paddingTop: '2%'}}>
      <Grid container spacing={3} direction='column' alignItems='center' justify='center'>
        <Grid item>
          <Typography variant='h4' align='center' gutterBottom={true}>
            Hey There, 👋 
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="Tejas Agrawal" src="/me.jpg" className={classes.image}/>
        </Grid>
        <Grid item>
          <Typography variant='h3' align='center' gutterBottom={true}>
            I’m Tejas Agrawal 
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h4' align='center' gutterBottom={true}>
            Software developer, Open source contributor, Tech Geek 👨‍💻  
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
