import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const Contact = () => {
    return (
    <Container style={{paddingTop: '5%'}}>
        <Typography variant='h3' style={{fontWeight: 600, marginTop: '5%'}} align='center'gutterBottom={true}>
            My Social Presence
        </Typography>
        <br/>
        <Grid container spacing={3} direction="row" alignItems="center" justify="center">
            <Grid item>
                <a href="https://medium.com/@cyber-venom003">
                    <Avatar variant='square' src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/medium.svg"/>
                </a>
            </Grid>
            <Grid item>
                <a href="https://github.com/cyber-venom003">
                    <Avatar variant='square' src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg"/>
                </a>
            </Grid>
            <Grid item>
                <a href="https://twitter.com/TejasAg35687912">
                    <Avatar variant='square' src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg"/>
                </a>
            </Grid>
            <Grid item>
                <a href="https://www.linkedin.com/in/tejas-agrawal-1605301a5/">
                    <Avatar variant='square' src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg"/>
                </a>
            </Grid>
        </Grid>
        <br/>
        <Typography variant='h3' style={{fontWeight: 600, marginTop: '5%'}} align='center'gutterBottom={true}>
            Or, you can find me at
        </Typography>
        <Typography variant='h5' style={{textDecoration: 'underline'}} align='center'gutterBottom={true}>
            <a href="mailto:tech.worm.1728@gmail.com">
                tech.worm.1728@gmail.com
            </a>
        </Typography>
        <br/>
    </Container>
    );
}
 
export default Contact;