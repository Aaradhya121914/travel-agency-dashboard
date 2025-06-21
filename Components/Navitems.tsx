import React from 'react';
import { Link,NavLink } from 'react-router';
import logo from'../public/assets/icons/logo.svg';
import { sidebarItems } from '~/constants';
import {cn} from '../app/lib/utilis';
import Footer from './Footer';

const Navitems = ({handleClick}:{handleClick?:()=>void}) => {
  return (
   <section className="nav-items">
    <Link to="/" className='link-logo'>
      <img src={logo} alt="logo" className='size-[30px]' />
      <h1>TourVisto</h1>
    </Link>
    <div className="container">
        <nav>
            {sidebarItems.map(({id,href,label,icon})=>(
                <NavLink to={href} key={id}>
                    {({isActive}:{isActive:boolean})=>(
                        // bg-primary-100 !text-white this are additional classnames which are activated only when isActive value is true
                        <div className={cn('group nav-item',{
                            'bg-primary-100 !text-white':isActive
                        })} onClick={handleClick}>
                           <img src={icon} alt={label} className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? 'brightness-0 invert' :'text-dark-200'}`}/>

                            {label}
                        </div>
                         
                    )}
                </NavLink>
            ))}
        </nav>
        <Footer/>
    </div>

   </section>
  )
}

export default Navitems

