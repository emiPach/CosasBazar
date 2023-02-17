
import { styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import logo from "./logo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {  useSelector} from 'react-redux';
import Badge from '@mui/material/Badge';
import {Link } from "react-router-dom";
const pages = [{"id":"","name":"Productos"}, {"id":"About","name":"Sobre Nosotros"}];
//const pages = ['Productos', 'Blog', 'Sobre Nosotros'];



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
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
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
  export default function SearchAppBar() {
    const carrito = useSelector((state) => state.carro)

    return (
      <Box sx={{ flexGrow: 1,}} >
        <AppBar position="fixed" sx={{backgroundColor: 'black', }}>
          <Toolbar>
          <Link to="/"> 
          <img src={logo} alt="logo" style={{height: "3rem", marginRight: "0.5rem" }} />
        </Link>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
             Cosas Bazar
            </Typography>
            <Box sx={{ flexGrow: 1, display: { md: 'flex', xs:'flex' }}}  >
            {pages.map((page) => (
              <Link to={`/${page.id}`}  key={page.name}> 
              <Button
               
                
                sx={{ my: 2, color: 'white', display: 'block' }}

              >
                <Typography variant="body2" gutterBottom>
                {page.name}
        </Typography> 
              </Button>
              </Link>
            ))}
          </Box>
          <Link to="/Checkout"> 
          <Badge badgeContent={carrito.length} color="primary">
          <ShoppingCartIcon sx={{marginRight: "1rem"}} />
          
          </Badge>
          </Link>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        
        </AppBar>
        <Toolbar/>
      </Box>
    );
  }