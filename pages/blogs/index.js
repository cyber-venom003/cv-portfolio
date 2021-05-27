import dynamic from 'next/dynamic';
// import { window } from 'react-'
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded';

const blogs_data = {
    blogs: [
        {
            title: "Journey from a Rookie to Hacker",
            key: 1,
            medium_link: "https://medium.com/developer-student-clubs-iiit-allahabad/journey-from-a-rookie-to-hacker-my-first-hackathon-experience-at-hackout20-abb067237440",
        },
    ]
}

export const getStaticProps = () => {
    const data = blogs_data.blogs;
    return {
        props: {blogs: data}
    }
}

const useStyles = makeStyles({
    page: {
        paddingTop: '2%'
    },
    link: {
        textDecoration: 'underline',
    },
    heading: {
        fontWeight: 600,
        marginTop: '5%'
    },
})

const Blogs = ({ blogs }) => {
    const classes = useStyles();
    return (
    <Container style={{paddingTop: '5%'}}>
        <Typography variant='h3' style={{fontWeight: 600, marginTop: '5%'}} align='center'gutterBottom={true}>
            My Blogs
        </Typography>
        <br/>
        <Grid container spacing={3} direction="row" alignItems="center" justify="center">
            {blogs.map((blog) => (
                <Grid item key={blog.key} className={classes.card} lg={6} md={12} xs={12}>
                    <Card elevation={3}>
                        <CardHeader 
                            title={`${blog.title}`}
                            action={
                                <IconButton onClick={() => window.open(`${blog.medium_link}` , '_blank')} aria-label="settings">
                                    <OpenInNewRoundedIcon />
                                </IconButton>
                            }
                        />
                    </Card>
                </Grid>
            ))}
        </Grid>
        <br/>
    </Container>
    );
}
 
export default Blogs;