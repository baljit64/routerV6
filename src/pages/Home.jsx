import { styled} from '@mui/material';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Home() {

return <SidebarWarp>
  
<h4>Custom components of mui</h4>      
<NavLink to="button" className={isActive=>(isActive?"active-link":'')}>Custom Buttons</NavLink>     
<NavigationLink to="/"  className={isActive=>(isActive?"active-link":'')}>Home</NavigationLink>
<Outlet/> 

</SidebarWarp>;

}

export default Home;


const NavigationLink=styled(NavLink)`
  text-decoration:none;
  background:red;
  padding:12px 16px;
  border:1px solid red;
`
const SidebarWarp=styled('div')` 
.active-link{
  background:grey;
  color:#fff;
}
`