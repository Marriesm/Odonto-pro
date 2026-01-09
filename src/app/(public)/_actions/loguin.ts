"use server"

import {signIn} from '@/lib/auth'

export async function handleRegister(provide: string){
   await signIn(provide, {redirectTo: "/dashboard"})
}