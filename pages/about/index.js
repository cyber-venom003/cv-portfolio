import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { YearFromTime } from "es-abstract/es5";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

const About = () => {
    return (
        <Container style={{paddingTop: '2%'}}>
            <Typography variant='h3' style={{fontWeight: 600, marginTop: '5%'}} align='center'gutterBottom={true}>
                About Me
            </Typography>
            <br/>
            <Typography variant='h5' gutterBottom={true}>
                I'm Tejas Agrawal, a software developer, open source lover and Tech Explorer.šØāš» 
            </Typography>
            <br />
            <Typography variant='h5' gutterBottom={true}>
                Iām {YearFromTime(Date.now()) - 2001} years old. š 
            </Typography>
            <br />
            <Typography variant='h5' gutterBottom={true}>
                Currently, Iām a pre final year student at <a href="http://iiita.ac.in" style={{textDecoration: 'underline'}}>Indian Institute of Information Technology</a>, Allahabad.š« 
            </Typography>
            <br />
            <Typography variant='h5' gutterBottom={true}>
                I natively belong from Jodhpur, Rajasthan, India. š®š³
            </Typography>
            <br />
            <Typography variant='h5' gutterBottom={true}>
                I love to spend my most of the time in building cool things, discussing over billion doller ideas, learning about amazing tech stuff all around us. āØ
            </Typography>
            <br />
            <Typography variant='h5'>
                Currently, I'm building COMET Ecosystem. Find more about it at <a href="https://cometlabs.in" style={{textDecoration: 'underline'}}>COMETLabs</a>āļø
            </Typography>
            <br />
            <Typography style={{fontWeight: 600, marginTop: '5%'}} variant='h3' align='center'gutterBottom={true}>
                My Toolkit
            </Typography>
            <br/>
            <Grid container spacing={3} direction="row" alignItems="center" justify="center">
                <Grid item lg={6} md={12} xs={12}>
                    <Card elevation={3}>
                        <CardHeader
                            title="š§Development and Design ToolsšØšØāā"
                            subheader="Tools I use for project development"
                            style={{ textAlign: 'center' }}
                        />
                        <CardContent>
                            <Grid container spacing={3} direction="row" alignItems="center" justify="center">
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/visualstudiocode.svg'/>
                                </Grid>
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/androidstudio.svg'/>
                                </Grid>
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/adobexd.svg'/>
                                </Grid>
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/figma.svg'/>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={6} md={12} xs={12}>
                    <Card elevation={3}>
                        <CardHeader
                            title="āLanguagesš»āā"
                            subheader="Languages in which I code"
                            style={{ textAlign: 'center' }}
                        />
                        <CardContent>
                            <Grid container spacing={3} direction="row" alignItems="center" justify="center">
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/c.svg'/>
                                </Grid>
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/cplusplus.svg'/>
                                </Grid>
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@4.25.0/icons/javascript.svg'/>
                                </Grid>
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v4.25.0/icons/typescript.svg'/>
                                </Grid>
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v4.25.0/icons/dart.svg'/>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={6} md={12} xs={12}>
                    <Card elevation={3}>
                        <CardHeader
                            title="āļøFrameworksāļøāā"
                            subheader="My Favourites"
                            style={{ textAlign: 'center' }}
                        />
                        <CardContent>
                            <Grid container spacing={3} direction="row" alignItems="center" justify="center">
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/flutter.svg'/>
                                </Grid>
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/react.svg'/>
                                </Grid>
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@4.25.0/icons/next-dot-js.svg'/>
                                </Grid>
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v4.25.0/icons/express.svg'/>
                                </Grid>
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v4.25.0/icons/django.svg'/>
                                </Grid>
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v4.25.0/icons/flask.svg'/>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={6} md={12} xs={12}>
                    <Card elevation={3}>
                        <CardHeader
                            title="š¢Databasesš»āā"
                            subheader="My familiar databases"
                            style={{ textAlign: 'center' }}
                        />
                        <CardContent>
                            <Grid container spacing={3} direction="row" alignItems="center" justify="center">
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/mysql.svg'/>
                                </Grid>
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/mongodb.svg'/>
                                </Grid>
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@4.25.0/icons/amazondynamodb.svg'/>
                                </Grid>
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v4.25.0/icons/postgresql.svg'/>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={6} md={12} xs={12}>
                    <Card elevation={3}>
                        <CardHeader
                            title="šDeployment and Devopsš"
                            subheader="Production Platforms I use"
                            style={{ textAlign: 'center' }}
                        />
                        <CardContent>
                            <Grid container spacing={3} direction="row" alignItems="center" justify="center">
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/firebase.svg'/>
                                </Grid>
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/heroku.svg'/>
                                </Grid>
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@4.25.0/icons/amazonaws.svg'/>
                                </Grid>
                                <Grid item>
                                    <Avatar variant='square' src='https://cdn.jsdelivr.net/npm/simple-icons@v4.25.0/icons/vercel.svg'/>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
 
export default About;