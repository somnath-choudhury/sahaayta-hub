import React from 'react'
import './globals.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SigninForm from './_auth/forms/SigninForm'
import SignupForm from './_auth/forms/SignupForm'
import { AllUsers, CreatePost, EditPost, Explore, Home, PostDetails, Profile, Saved, UpdateProfile } from './_root/pages'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { useToast } from './components/ui/use-toast'
import { Toaster } from './components/ui/toaster'
import LandingPage from './_root/pages/LandingPage'



const App = () => {
  return (
    <main className='flex h-screen'>
          <Routes>

            {/* <Route element={<RootLayout />}>    */}
               <Route path="/" element={<LandingPage />} />
            {/* </Route> */}

            {/* public routes accessible by anyone before sign-up */}
            <Route element={<AuthLayout />}>   
                <Route path = "/sign-in" element={<SigninForm />} />
                <Route path = "/sign-up" element={<SignupForm />} />
            </Route>
            
            {/* private routes accessible only after sign-in */}
            <Route element={<RootLayout />}>
                {/* <Route index element={<LandingPage />} /> */}
                <Route index element={<Home />} />
                <Route path = '/Home' element={<Home />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/saved' element={<Saved />} />
                <Route path='/all-users' element={<AllUsers />} />
                <Route path='/create-post' element={<CreatePost />} />
                <Route path='/update-post/:id' element={<EditPost />} />
                <Route path='/posts/:id' element={<PostDetails />} />
                <Route path='/profile/:id/*' element={<Profile />} />
                <Route path='/update-profile/:id' element={<UpdateProfile />} />
            </Route>
            
        </Routes>
        <Toaster />
    </main>
  )
}

export default App
  