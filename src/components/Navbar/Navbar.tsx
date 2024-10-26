import React from "react";
import styles from "./Navbar.module.css";

interface NavbarProps {
  status: boolean;
}

interface MenuItem {
  name: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { name: 'รายวิชา', link: '#' },
  { name: 'ถ่ายทอดสด', link: '#' },
  { name: 'กระทู้คำถาม', link: '#' },
];

function NavbarComponent ({
  status
} : NavbarProps) {
  return (
    <nav className={`${styles.navMenu} ${status ? 'hidden lg:block' : 'block lg:hidden'}`}>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className={`${index === 0 ? 'border-t' : ''}`}>
            <a className="" href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavbarComponent;