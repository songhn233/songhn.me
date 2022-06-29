import Head from 'next/head';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import DarkModeToggle from './DarkModeToggle';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const modeMap = {
                  light: 'light',
                  dark: 'halloween',
                }
                let theme;
                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  theme = newTheme;
                  document.documentElement.setAttribute('data-theme', newTheme);
                }
                window.__setTheme = function(newTheme) {
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme);
                  } catch (err) {}
                }
                try {
                  theme = localStorage.getItem('theme');
                } catch (err) { }
                const mediaPrefer = window.matchMedia('(prefers-color-scheme: dark)');
                mediaPrefer.addListener(function(e) {
                  setTheme(e.matches ? modeMap.dark : modeMap.light)
                });
                setTheme(theme || (mediaPrefer.matches ? modeMap.dark : modeMap.light));
              })();
            `,
          }}
        />
      </Head>
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <DropdownIcon />
            </label>
            <ul className="p-2 mt-3 shadow dropdown-content menu rounded-box menu-compact w-52 bg-base-100">
              <li>
                <button
                  tabIndex={0}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Homepage
                </button>
              </li>
              <li>
                <button
                  tabIndex={0}
                  onClick={(e) => {
                    e.preventDefault();
                    toast('🚧 Working In Progress', {
                      style: {
                        backgroundColor: 'hsl(var(--b1))',
                        color: 'hsl(var(--bc))',
                      },
                    });
                  }}
                >
                  Articles
                </button>
              </li>
            </ul>
          </div>
          <div className="text-xl normal-case btn btn-ghost">Songhn Site</div>
        </div>
        <div className="navbar-end">
          <LanguageSwitcher />
          <DarkModeToggle />
        </div>
      </nav>
      <Toaster toastOptions={{ duration: 3000 }} />
    </>
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
