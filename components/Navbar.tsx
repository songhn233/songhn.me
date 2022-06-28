import React, { SVGProps } from 'react';
import DarkModeToggle from './DarkModeToggle';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <DropdownIcon />
          </label>
          <ul className="p-2 mt-3 shadow dropdown-content menu rounded-box menu-compact w-52 bg-base-100">
            <li>
              <a tabIndex={0}>Homepage</a>
            </li>
            <li>
              <a href="https://blog.songhn.com" rel="noopener" tabIndex={0}>
                Blog
              </a>
            </li>
          </ul>
        </div>
        <a className="text-xl normal-case btn btn-ghost">Songhn Site</a>
      </div>
      <div className="navbar-end">
        <LanguageSwitcher />
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export function DropdownIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4,6 H16 M4,12 H16 M4,18 H10"
      />
    </svg>
  );
}