import "./Navbar.css";
import img1 from './assets/img1.gif'
export default function Navbar() {
  return <>
<div className="navbar">
<div className="image">
<img src={img1} alt="logo" height='100px'/>
 </div>

<div className="options">
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Conatct</li>
    <li>Projects</li>
</ul>
</div>
<i class="fa-solid fa-bars"></i>
</div>

  </>;
}
