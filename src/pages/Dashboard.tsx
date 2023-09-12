
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';

import Chart from '../components/Chart';
import Deposits from '../components/Deposits';

import { mainListItems, secondaryListItems } from '../components/listItems';
import { feacthApiData } from '../services/readDataFromMongodb.service';
import { MyTopicFilter } from '../components/filters/MyTopicFilter';
import { MyCountryFilter} from '../components/filters/MyCountryFilter';
import { MyRegionFilter } from '../components/filters/MyRegionFilter';
import { MyintensityFilter } from '../components/filters/MyintensityFilter';
import { MyTitleFilter } from '../components/filters/MyTitleFilter';
import { MyPestleFilter } from '../components/filters/MyPestleFilter';
import { MYinTensity } from '../Charts/MyIntensity';
import { Relevance } from '../components/Charts/Relevance';
import { MyRelevanceFilter } from '../components/filters/MyRelevanceFilter';
import { MyLikelihoodFilter } from '../components/filters/MyLikelihoodFilter';
import { Likelihood } from '../components/Charts/Likelihood';
import { Country } from '../components/Charts/Country';
import { Topic } from '../components/Charts/Topic';
import { Pestle } from '../components/Charts/Pestle';
import { Region } from '../components/Charts/Region';
import { Title } from '../components/Charts/Title';


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const  Dashboard:React.FC<{}>=()=> {
  const [open, setOpen] = React.useState(true);
  let [apiDataHolder,setApiDataHolder]=React.useState<any>([])
  React.useEffect(()=>{
    (async()=>{
        let apiData:any=await feacthApiData()
        setApiDataHolder(apiData[0].data)
        console.log("apiData", apiData[0].data)
    })()
  
  },[])
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>

            <MyintensityFilter topics={apiDataHolder}/>            
             <MyRelevanceFilter topics={apiDataHolder}/>
             <MyLikelihoodFilter topics={apiDataHolder}/>
             <MyCountryFilter topics={apiDataHolder}/>
              <MyTopicFilter topics={apiDataHolder}/>
             <MyPestleFilter topics={apiDataHolder}/>
             <MyRegionFilter  topics={apiDataHolder}/>
              <MyTitleFilter topics={apiDataHolder}/>

          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    
                  }}
                >

            <MyintensityFilter topics={apiDataHolder}/>
                  <MYinTensity data={apiDataHolder}/>

            <MyRelevanceFilter topics={apiDataHolder}/>
                  <Relevance data={apiDataHolder}/>

            <MyLikelihoodFilter topics={apiDataHolder}/>
                  <Likelihood data={apiDataHolder}/>

            <MyCountryFilter topics={apiDataHolder}/>
                  <Country data={apiDataHolder}/>

            <MyTopicFilter topics={apiDataHolder}/>
                  <Topic data={apiDataHolder}/>
                  
            <MyPestleFilter topics={apiDataHolder}/>
                  <Pestle data={apiDataHolder}/>
                  
            <MyRegionFilter topics={apiDataHolder}/>
                  <Region data={apiDataHolder}/>

            <MyTitleFilter topics={apiDataHolder}/>
                  <Title data={apiDataHolder}/>
                  

    

                </Paper>
              </Grid>
             
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;