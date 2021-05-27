import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import Link from 'next/link';

const useStyles = makeStyles((theme) => {
    return {
        page: {
            width: '100%',
            padding: theme.spacing(3)
        },
        root: {
            display: 'flex'
        },
        
        toolbar: theme.mixins.toolbar,
    }
});

const Layout = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} elevation={1}>
                <Toolbar>
                <Grid container direction='row' alignItems='center' justify='center' spacing={5}>
                    <Grid item>
                        <Typography variant='h6'>
                            <Link href='/'>Home</Link> 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>
                            <Link href='/about'>About</Link> 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>
                            <Link href='/projects'>Projects</Link>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>
                            <Link href='/blogs'>Blogs</Link> 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h6'>
                            <Link href='/contact'>Contact Me</Link> 
                        </Typography>
                    </Grid>
                </Grid>
            
                </Toolbar>
            </AppBar>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    );
}
 
export default Layout;