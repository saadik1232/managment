import React, { useEffect, useState } from 'react'
import Topbar from './Topbar';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Title } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import responderser from './../actions/ResSer';
import DoughnutChart from './graph/DoughnutChart';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function ResPro(props) {
    //const id = props.match.params.id;
    //console.log(id);
    //console.log("to check state", props.location.state.firstname)
    const id = props.location.state.id;
    const fname = props.location.state.firstname;
    const contact = props.location.state.contact

    const classes = useStyles();
    const [res2, setres] = useState([]);;
    //var res2 = [];
    const [data, setdata] = useState([]);
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);



    useEffect(() => {

        responderser.getPanics().then((res) => {
            let respon = res.result.data
            let res22 = respon.filter((r) => { return r.responderInvolved == id })
            //setdata(  )
            setres(res22);
            console.log("the data", res2)
        })

    }, [])


    return (
        <div>
            <div className={classes.root}>
                <Topbar />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={9} md={12} lg={3}  >
                                <Paper>
                                    <div> <h1>Name</h1> </div>
                                    <Typography variant="h4" color="secondary"  >
                                        {fname}
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3}  >
                                <Paper>
                                    <div> <h1>ID</h1> </div>
                                    <Typography variant="h4" color="secondary"  >
                                        {id}
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3}  >
                                <Paper>
                                    <div> <h1>Contact</h1> </div>
                                    <Typography variant="h4" color="secondary"  >
                                        {contact}
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={8} lg={6} justify="center" alignItems="center">
                                <Paper>
                                    <Typography component="h2" variant="h4" color="secondary" gutterBottom>
                                        Comments Section
                                    </Typography>
                                    {res2.map((com) => (
                                        <div>
                                            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                                "{com.comment}"
                                            </Typography>
                                            <Typography variant="caption" display="block" gutterBottom>
                                                {com.contact}
                                            </Typography> <hr />
                                        </div>
                                    ))}
                                    {/* <div>v helfpful</div> <div> awesome work</div> */}
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={9} lg={6} justify="center" alignItems="center">
                                <DoughnutChart />
                            </Grid>
                        </Grid>
                    </Container>
                </main>
            </div>
        </div>
    )
}
