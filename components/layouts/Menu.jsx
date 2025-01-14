'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { FaUserAlt } from "react-icons/fa";
import AuthContext from '@/context/AuthContext';
import SearchBar from './SearchBar';

export default function Menu() {
  const { user } = useContext(AuthContext);

  return (
    <div className='container max-w-screen-xl w-full mx-auto px-4 bg-gray-200'>
      <div className='flex flex-wrap items-center justify-between'>
        <div className='flex-shrink-0 mr-auto lg:mx-16 mb-2 lg:mb-0'>
          {/* Logo or Brand Name can go here */}
        </div>
        
        <div className='flex items-center ml-auto space-x-4 mb-1'>
          <div className='flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-300 rounded-full'>
            <SearchBar className="mb-[-2px]" />
          </div>

          {!user ? (
            <div className='flex'>
              <button
                type='button'
                onClick={() => window.location.href = '/profile'}
                className='bg-white p-3 items-center rounded-full text-black hover:bg-gray-300 hover:text-gray-800'
              >
                <span className='sr-only'>User</span>
                <FaUserAlt />
              </button>
            </div>
          ) : (
            <Link href='/profile'>
              <div className='flex items-center space-x-3 cursor-pointer'>
                <img
                  className='w-10 h-10 border shadow-md rounded-full'
                  src={'/images/default.png'}
                />
                <div className='space-y-1 font-medium'>
                  <p>
                    {user.name || 'GUEST'}
                    <time className='block text-sm text-gray-500 dark:text-gray-400'>
                      {user.email}
                    </time>
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
