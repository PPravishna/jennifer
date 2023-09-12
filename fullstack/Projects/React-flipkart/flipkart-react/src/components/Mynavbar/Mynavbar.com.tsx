import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: '#f0f5ff',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    color:'grey',
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '51ch',
    },
  },
}));

export const Mynavbar:React.FC<{}>=()=> {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'white', color:'black'}}>
        <Toolbar>

        <div className='image'>
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg" alt="flipkart" />
        </div>
          <Search sx={{backgroundColor:'#f0f5ff', color:'black'}}>
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for Products, Brands and More"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

            <Typography>
            <IconButton>
            <StorefrontOutlinedIcon />
            </IconButton>
                <span style={{marginRight:'3rem'}}>Become a Seller</span>
            </Typography>

            <Typography>
            <IconButton>
             <PersonOutlineOutlinedIcon/>
            </IconButton>
                <span style={{marginRight:'3rem'}}>Sign in </span>
            </Typography>

            <Typography>
            <IconButton>
            <ShoppingCartOutlinedIcon/>
            </IconButton>
                <span style={{marginRight:'4rem'}}>Cart</span> 
            </Typography>

            <Typography>
            <IconButton>
           <MoreVertOutlinedIcon/>
            </IconButton>
                 
            </Typography>

        </Toolbar>
   
      </AppBar>

    </Box>
  );
}