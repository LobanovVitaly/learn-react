import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";


const Navbar = (props)=>{
	return (
		<nav className={s.nav}>
		  <ul>
			<li className={s.item}><NavLink to="/profile" className = {({ isActive }) => isActive ? s.active : ""}>Profile</NavLink></li>
		    <li className={s.item}><NavLink to="/dialogs" className = {({ isActive }) => isActive ? s.active : ""}>Messages</NavLink></li>
		    <li className={s.item}><NavLink to="/news" className = {({ isActive }) => isActive ? s.active : ""}>News</NavLink></li>
		    <li className={s.item}><NavLink to="/music" className = {({ isActive }) => isActive ? s.active : ""}>Music</NavLink></li>
		    <li className={s.item}><NavLink to="/settings" className = {({ isActive }) => isActive ? s.active : ""}>Settings</NavLink></li>
		  </ul>

			<div className="friends">
				<Friends friends={props.friends} />
			</div>
		</nav>
	);
};

export default Navbar;


