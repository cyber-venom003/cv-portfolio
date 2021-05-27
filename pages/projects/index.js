import dynamic from 'next/dynamic';
// import { window } from 'react-'
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded';
const ReactGitHubCalendar = dynamic(() => import('react-ts-github-calendar'), {
    ssr: false,
});

const projects_data = {
    projects: [
        {
            name: "Swasthyam",
            key: 1,
            github_link: "https://github.com/cyber-venom003/Swasthyam-App",
            description: "A Flutter application for restructuring of medical architecture of India using deep learning and REST APIs."
        },
        {
            name: "Cook Blog App",
            key: 2,
            github_link: "https://github.com/cyber-venom003/cook_blog_app",
            description: "A Blog application made in Flutter for foodies and cooks to share their recipes."
        },
        {
            name: "Expense Tracker Application",
            key: 3,
            github_link: "https://github.com/cyber-venom003/expense-manager-app",
            description: "A React application for tracking expenses over a period of time."
        },
        {
            name: "Home Automation with device access control",
            key: 4,
            github_link: "https://github.com/cyber-venom003/home-automation-project",
            description: "An IoT Project for controlling home appliances over the internet. Integration of Access control over devices using EM-19 RFID."
        },
    ]
}

const useStyles = makeStyles({
    page: {
        paddingTop: '5%'
    },
    link: {
        textDecoration: 'underline',
    },
    heading: {
        fontWeight: 600,
        marginTop: '5%'
    },
})

export const getStaticProps = () => {
    const data = projects_data.projects;
    return {
        props: {projects: data}
    }
}

const Projects = ({ projects }) => {
    const classes = useStyles();
    return (
    <Container style={{paddingTop: '2%'}}>
        <Typography variant='h3' style={{fontWeight: 600, marginTop: '5%'}} align='center'gutterBottom={true}>
            My Projects
        </Typography>
        <br/>
        <Grid container spacing={3} direction="row" alignItems="center" justify="center">
            {projects.map((project) => (
                <Grid item key={project.key} lg={6} md={12} xs={12}>
                    <Card elevation={3}>
                        <CardHeader 
                            title={`${project.name}`}
                            action={
                                <IconButton onClick={() => window.open(`${project.github_link}` , '_blank')} aria-label="settings">
                                    <OpenInNewRoundedIcon />
                                </IconButton>
                            }
                        />
                        <CardContent>
                            {project.description}
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
        <br/>
        <Typography variant='h3' style={{fontWeight: 600, marginTop: '5%'}} align='center'gutterBottom={true}>
            OSS Contribution Graph
        </Typography>
        <br/>
        <ReactGitHubCalendar userName="cyber-venom003" responsive={true} tooltips={true}/>
    </Container>);
}
 
export default Projects;