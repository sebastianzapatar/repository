import Image from 'next/image'
import Link from 'next/link'
export const SideBar = () => {
  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll">
           <div id="logo" className="my-4 px-6">
            <h1 className="text-lg md:text-2xl font-bold text-white">Dash<span className="text-blue-500">8</span>.</h1>
            <p className="text-slate-500 text-sm">Manage your actions and activities</p>
           </div>
           <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Welcome back,</p>
            <Link href="/dashboard/counter" className="inline-flex space-x-2 items-center">
                <span>
                    <Image
                        className="rounded-full w-8 h-8" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                        width={50} height={50} alt=""/>
                   
                </span>
                <span className="text-sm md:text-base font-bold">
                    Edward Tompson
                </span>
                </Link>
           </div>
           <div id="nav" className="w-full px-6">
            <Link href="/dashboard/counter" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 bg-blue-800 hover:bg-white/5 transition ease-linear duration-150">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                      </svg>
                      
                </div>
                <div className="flex flex-col">
                    <span className="text-lg font-bold leading-5 text-white">Counter</span>
                    <span className="text-sm text-white/50 hidden md:block">Estado Local</span>
                </div>
            </Link>
           
            <Link href="/dashboard/dishes" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                      </svg>                        
                </div>
                <div className="flex flex-col">
                    <span className="text-lg text-slate-300 font-bold leading-5">dishes</span>
                    <span className="text-sm text-slate-500 hidden md:block">Show Dishes</span>
                </div>
            </Link>
            <Link href="/dashboard/adddish" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                      </svg>                        
                </div>
                <div className="flex flex-col">
                    <span className="text-lg text-slate-300 font-bold leading-5">Add Dish</span>
                    <span className="text-sm text-slate-500 hidden md:block">add</span>
                </div>
            </Link>
            
            
            
           </div>
        </div>
  )
}
