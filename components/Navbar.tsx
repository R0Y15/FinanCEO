'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { navItems } from '@/utils';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Android12Switch } from '@/types';
import { FormControlLabel } from '@mui/material';
import { useTheme } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  const [activePath, setActivePath] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { theme, setTheme } = useTheme();
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    setActivePath(path);
  }, [path]);

  return (
    <>
      <nav className='fixed top-0 left-0 right-0 flex flex-col w-full h-auto px-12 z-50 border-b dark:border-none bg-white dark:bg-gray-900 text-black dark:text-white'>
        <div className="flex justify-between w-full h-[75px]">
          <div className='flex items-center justify-center gap-2'>
            <Image
              src={'/assets/logo.svg'}
              width={30}
              height={30}
              alt='logo'
            />
            <h1 className='font-medium text-xl'>FinanCEO</h1>

            <ul className='hidden md:flex flex-row gap-5 h-full p-3 ml-2'>
              {navItems.map((item, idx) => (
                <li key={idx} className='flex flex-row'>
                  <div
                    onClick={() => {
                      setActivePath(path);
                      router.push(item.link);
                    }}
                    className={`flex flex-row p-3 rounded-lg transition-all duration-300 ${activePath === item.link ? 'bg-[#E2F6FF] dark:bg-[#1A2B3C]' : ''}`}
                  >
                    <Image
                      src={item.icon}
                      width={20}
                      height={20}
                      alt={item.name}
                    />
                    <span className='ml-2'>{item.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex items-center justify-center ml-auto gap-2'>
            <div className="hidden lg:flex">
              <FormControlLabel
                control={<Android12Switch />}
                label=""
                color='#00B3FF'
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
              </FormControlLabel>


              <div className='flex m-2 rounded-full bg-gray-50 dark:bg-[#1A2B3C] w-9 h-9 items-center justify-center cursor-pointer'>
                <Image
                  src={'/assets/notification.svg'}
                  width={18}
                  height={18}
                  alt='notification'
                />
              </div>
              <div className='flex m-2 rounded-full bg-gray-50 dark:bg-[#1A2B3C] w-9 h-9 items-center justify-center cursor-pointer'>
                <Image
                  src={'/assets/settings.svg'}
                  width={18}
                  height={18}
                  alt='notification'
                />
              </div>
            </div>
            <div className='md:hidden flex items-center'>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div>
                  {isMenuOpen ? <MenuOpenIcon /> : <MenuIcon />}
                </div>
              </button>
            </div>
            <div className='rounded-full w-11 h-11 bg-gray-300 dark:bg-[#1A2B3C] cursor-pointer' />
          </div>
        </div>

        {isMenuOpen && (
          <div className='md:hidden bg-gray-200 w-full p-4 overflow-y-auto rounded-lg'>
            <ul className='flex flex-col gap-5 justify-end'>
              {navItems.map((item, idx) => (
                <li key={idx} className='flex flex-row'>
                  <div
                    onClick={() => setActivePath(path)}
                    className={`flex flex-row p-3 rounded-lg transition-all duration-300 ${activePath === item.link ? 'bg-[#E2F6FF]' : ''}`}
                  >
                    <a href={item.link} className='flex items-center'>
                      <Image
                        src={item.icon}
                        width={20}
                        height={20}
                        alt={item.name}
                      />
                      <span className='ml-2'>{item.name}</span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
