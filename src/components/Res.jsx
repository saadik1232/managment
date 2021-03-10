import React, { useEffect, useState } from 'react'
import Topbar from './Topbar';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import SingleRes from './SingleRes';
import action from './../actions/Actions';
import responderser from './../actions/ResSer';
import Piechart from './graph/Piechart';





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




export default function Res(props) {

    const [data, setdata] = useState([]);
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    //const [data, setdata] = useState([]);
    console.log("hwllo test");

    const clickhandle = (e) => {
        console.log("in the click handle function");
        //var cookieValue = document.getElementById("demo").value;
        console.log(e);
    }

    useEffect(() => {
        // axios.get("http://192.168.100.123:3001/responder").then((response) => {
        //     setdata(response.data.result.data)
        //     console.log("check", data);
        // })
        //setdata(getResponders);
        responderser.getResponders().then((response) => {
            //console.log(response)
            setdata(response.result.data)
        })
    }, [])




    return (
        <>
            <div className={classes.root}>
                <Topbar />
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}  >
                            <Grid item xs={12} md={8} lg={9}>
                                {/* <Paper className={fixedHeightPaper}> */}
                                {data.map((res, index) => (
                                    <div>
                                        <SingleRes res={res} key={index} history={props.history} />
                                        <hr />
                                    </div>
                                ))}
                                {/* </Paper> */}
                            </Grid>
                        </Grid>
                    </Container>
                </main>
            </div>
        </>
    )
}
