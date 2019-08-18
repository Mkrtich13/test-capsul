import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import GlobalContext from '../context/GlobalContext';
import Famille from '../pages/Famille';
import Dashboard from '../pages/Dashboard';
import Capsules from '../pages/Capsules';
import Medecins from '../pages/Medecins';
import Messagerie from '../pages/Messagerie';
import FamilyCarousel from '../components/FamilyCarousel';
import Logo from '../assets/logo.png';
import MedecinLogo from '../assets/logo_medecin.png';
import DashboardLogo from '../assets/logo_dashboard.png';
import CapsulLogo from '../assets/logo_capsule.png';
import FamilyLogo from '../assets/logo_famille.png';
import MsgLogo from '../assets/logo_msg.png';
import { Dropdown, Icon} from 'react-materialize';
import Avatar from '@material-ui/core/Avatar';

const drawerWidth = 140;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    padding: 0
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const globalContextValue = React.useContext(GlobalContext);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  React.useEffect(() => globalContextValue.setPage('DASHBOARD'), []);

  const logoNav = [DashboardLogo, MedecinLogo, CapsulLogo, FamilyLogo, MsgLogo];

  const drawer = (
    <div>
      <div className={classes.toolbar + ' center-align'}>
        <img className="w-50 mt-3" src={Logo} alt="logo" />
      </div>
      <List className="mt-5">
        {[['Dashboard','/dashboard'], ['Mes médecins', '/medecins'], ['Mes capsules', '/capsules'], ['Ma famille', '/famille'], ['Messagerie', '/messagerie']].map((text, index) => (
          <div key={text[0]} style={{paddingTop: 10}}>
            <div>
                <Link to={text[1]}>
                  <div className="center-align">
                    <img style={{display: 'block', margin: 'auto', marginTop: 7, marginBottom: -12}} className="w-25" src={logoNav[index]} alt="" />
                    <span className="w-100" style={{color: '#86afe3', fontSize: '0.9em'}}>{text[0]}</span>
                  </div>
                </Link>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <Divider style={{width: '60%', background: '#86afe3', opacity: '0.3'}} />
            </div>
          </div>
        ))}
      </List>
    </div>
  );

  return (
    <Router>
        <Route render={({ location, history }) => (
          <React.Fragment>
            <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <div className="w-100 valign-wrapper" style={{display: 'flex', justifyContent:'space-between'}}>
                  <div>
                    <Typography variant="h6" noWrap>
                        { globalContextValue.page }
                    </Typography>
                  </div>
                  <div className="valign-wrapper">
                    <div className="right-align">
                      <span style={{fontSize: '1.2em'}} className="font-weight-bold">{globalContextValue.user.firstName + ' ' + globalContextValue.user.lastName}</span>
                      <span className="grey-text" style={{display: 'block'}}>{globalContextValue.user.status}</span>
                    </div>
                    <div className="profile-dropdown">
                      <Dropdown style={{width: 200}} trigger={<Avatar className={classes.bigAvatar} src={globalContextValue.user.image} alt="" />}>
                          <a className="right-align" href="#"><Icon>compare_arrows</Icon>Mon profile</a>
                          <Divider />
                          <a className="right-align" href="#"><Icon>settings</Icon>Paramètres</a>
                          <Divider />
                          <a className="right-align" href="#"><Icon>contact_support</Icon>FAQ / Support</a>
                          <Divider />
                          <a className="right-align" href="#"><Icon>subdirectory_arrow_left</Icon>Se déconnecter</a>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                </Toolbar>
            </AppBar>
            <Hidden xsDown implementation="css">
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                    }}
                  >
                    {drawer}
                </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
                </Hidden>
            </nav>
            </Hidden>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <FamilyCarousel />
                <Switch>
                    <Route path="/famille" component={props => <Famille />} />
                    <Route path="/dashboard" component={props => <Dashboard />} />
                    <Route path="/medecins" component={props => <Medecins />} />
                    <Route path="/capsules" component={props => <Capsules />} />
                    <Route path="/messagerie" component={props => <Messagerie />} />
                </Switch>
            </main>
            </div>
          </React.Fragment>
        )}
        />
    </Router>
  );
}

export default ResponsiveDrawer;