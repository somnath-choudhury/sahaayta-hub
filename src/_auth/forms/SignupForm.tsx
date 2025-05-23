"use client"

import { Button } from '@/components/ui/button'
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { SignupValidation } from '@/lib/validation'
import Loader from '@/components/shared/Loader';
import { Link, useNavigate } from 'react-router-dom';
import { createUserAccount } from '@/lib/appwrite/api';
import { useToast } from "@/components/ui/use-toast"
import { useCreateUserAccount, useSignInAccount } from '@/lib/react-query/queriesAndMutations';
import { useUserContext } from '@/context/AuthContext';
import { title } from 'process';


const SignupForm = () => {
  
  const {toast} = useToast()
  const {checkAuthUser, isPending: isUserLoading} = useUserContext();
  const navigate = useNavigate();

  const { mutateAsync: createUserAccount, isLoading: isCreatingAccount} = useCreateUserAccount();

  const {mutateAsync: signInAccount, isLoading: isSigningIn} = useSignInAccount();
   //mutateAsync is calling the function createUserAccount from queriersand Mutations

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',

    },
  })

 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    
    const newUser = await createUserAccount(values);

    if (!newUser) {
      toast({
         title: 'Sign Up failed. Please try again'
        })

        return;
    }

    const session = await signInAccount({
      email: values.email,
      password: values.password,
  })

  if (!session) {
    toast({title: 'Something went wrong. Please login again' })

    return;
  }

  const isLoggedIn = await checkAuthUser();

  if(isLoggedIn) {
    form.reset();

    navigate('/')
  }

  else {
   toast({title: 'Log In failed. Please try again'})

   return;
  }
  }

  return (
    <Form {...form}>

      <div className='sm:w-420 flex-center flex-col opacity-80'>
          <img src = "/assets/images/logo1.svg" alt= "logo" />

          <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>Create a New Account</h2>
          <p className='text-light-2 small-medium md:base-regular mt-3'>If you are new here, please create an account ... </p>
        

            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full mt-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text" className='shad-input' {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Name</FormLabel>
                    <FormControl>
                      <Input type="text" className='shad-input' {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" className='shad-input' {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" className='shad-input' {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className='shad-button_primary'>
                {isCreatingAccount ? (
                  <div className='flex-center gap-2'>
                    <Loader /> Loading...
                  </div>
                ): "Sign Up"}
              </Button>

              <p className='text-small-regular text-light-2 text-center'>
                Already have an account? 
                <Link to="/sign-in" className='text-primary-500 text-small-semibold ml-1'>
                   Log In
                </Link>
              </p>
            </form>
      </div>
      </Form>
  )
}

export default SignupForm
