
import { StrictMode,Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar.tsx'
import Banner from './Components/Banner.tsx'
import ExploreTheTechnologies from './Components/ExploreTheTechnologies.tsx'
import type { IExploreTheTechnologies } from './types/index.ts'
import { ToastContainer } from 'react-toastify'
import Footer from './Components/Footer.tsx'

const usersFetch = async ():Promise<IExploreTheTechnologies[]>=>{
  const response = await fetch("/technologies.json")
  const data= await response.json()
  return data;
}

const usersPromise=usersFetch();


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Navbar/>
   <Banner/>
  <Suspense fallback={
    <div className="container mx-auto py-10 text-center">
        <p className="text-18 font-semibold text-gray-500">
            Loading technologies...
        </p>
    </div>
}>
    <ExploreTheTechnologies usersPromise={usersPromise} />
</Suspense>
   <ToastContainer />
   <Footer/>
  </StrictMode>
)
