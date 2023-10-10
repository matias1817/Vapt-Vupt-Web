import { Link } from 'react-router-dom';
import Logo from './logo';
import {

  BuildingOfficeIcon,

  HomeIcon,
  MagnifyingGlassIcon,

  PhoneIcon,

  PlusIcon,
  QueueListIcon
 
} from '@heroicons/react/24/solid';

import  React from 'react'


export function Header () {
  

    return (
        <header className='sticky w-full top-0 bg-white z-20 py-4 border-b shadow-sm border-gray-100'>
        <div className='container-max flex justify-between items-center'>
          <div className='flex items-center gap-2 md:gap-4'>
            <Logo />

          </div>
  
          <ul className='text-zinc-700 ml-auto gap-2 md:gap-4 items-center hidden md:flex'>
           
            <li>
              <Link
                to='/home'
                className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
              >
                <HomeIcon className='w-4 h-4 text-gray-700' />{' '}
                <p className='hidden md:block'>Home</p>
              </Link>
            </li>
            <li>
              <Link
                to='/cad'
                className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
              >
                <PlusIcon className='w-4 h-4 text-gray-700' />{' '}
                <p className='hidden md:block'>Cadastro de Produto</p>
              </Link>
            </li>
            <li>
              <Link
                to='/Pedidos'
                className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
              >
                <QueueListIcon className='w-4 h-4 text-gray-700' />{' '}
                <p className='hidden md:block'>Pedidos</p>
              </Link>
            </li>
           
          </ul>
          
            <button
              className='ml-4 bg-red-500 text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex'
            >
           <Link
                    to={'/'}>  Login</Link>
            </button>
          
            <div className='shadow-lg transition-all fixed top-full -right-[100%] bg-white h-screen p-4 px-8'>
              <>
                <ul className='text-zinc-700 space-y-4'>
                  <li>
                    <Link
                      to='/'
                      className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                    >
                      <MagnifyingGlassIcon className='w-4 h-4 text-gray-700' />{' '}
                      <p>Search</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/home'
                      className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                    >
                      <HomeIcon className='w-4 h-4 text-gray-700' /> <p>Home</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/cad'
                      className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                    >
                      <BuildingOfficeIcon className='w-4 h-4 text-gray-700' />{' '}
                      <p>cadastro produto</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/pedido'
                      className='p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2'
                    >
                      <PhoneIcon className='w-4 h-4 text-gray-700' />{' '}
                      <p>Pedidos
                      </p>
                    </Link>
                  </li>
                  
                </ul>
                 
                  <button className='ml-4 bg-red-ff3131 text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex'
                
                  >
                    <Link
                    to={'/'}>  Login</Link>
                  
                  </button>
                
              </>
            </div>
          
  
         
           
        </div>
      </header>
    )
}