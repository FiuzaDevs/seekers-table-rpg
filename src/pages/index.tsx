import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import GroupImage from '../../public/image/group_table.png'

export default function LadingPage() {

  const [hidden, setHidden] = useState<Boolean>(true)
  // const windowSize = useRef([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024) {
        setHidden(true)
      }
      else {
        setHidden(false)
      }
    }
    handleResize()

    return () => { setHidden(true) }
  }, [])


  return (
    <div className='min-h-screen'>
      {/*Navbar*/}
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Seekers RPG</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={() => setHidden((old => !old))}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow ${hidden ? "max-[1024px]:hidden" : "lg:flex lg:items-center lg:w-auto"}`}>
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Docs
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Examples
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Blog
            </a>
          </div>
          <div>
            <a href="/sign-in" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</a>
          </div>
        </div>
      </nav>
      <section className='h-full'>
        <div className="flex flex-row items-center justify-center h-screen ">
          <div className="shadow-xl w-full h-full flex-1 px-20 text-center bg-[url('../../public/image/group-table.png')] ">
          </div>
          <div className="flex flex-col items-center justify-center h-full w-full flex-1 px-20 text-center bg-gray-100">
            <h1 className="text-5xl font-bold">
              Bem vindo ao <span className="text-blue-600 hover:animate-pulse">Seekers RPG!</span>
            </h1>
            <p className="text-2xl font-bold py-6">
              O melhor RPG de mesa online!
            </p>
            <p className="text-xl font-bold py-6">
              Crie sua conta e jogue com seus amigos!
            </p>
            <div className="flex flex-row items-center justify-center">
              <a href="/sign-in" className="inline-block text-md mx-2 px-4 py-2 leading-none border rounded text-emerald-300 border-blue-200 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</a>
              <a href="/sign-up" className="inline-block text-md mx-2 px-4 py-2 leading-none border rounded text-emerald-300 border-blue-200 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Criar conta</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
