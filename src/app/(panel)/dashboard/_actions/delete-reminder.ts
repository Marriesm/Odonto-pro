"use server"

import prisma from '@/lib/prisma'
import { success, z } from 'zod'
import { revalidatePath } from 'next/cache'

const formSchema = z.object({
    reminderId: z.string().min(1, "ID do lembrete é obrigatório"),
})

type FormSchema = z.infer<typeof formSchema>

export async function deleteReminder(formData: FormSchema) {
    const schema = formSchema.safeParse(formData)
    if(!schema.success){
        return{
            error: schema.error.issues[0].message
        }
    }
    try{
        await prisma.reminder.delete({
            where:{
                id: formData.reminderId
            }
        })
        revalidatePath("/dashboard")
        return{
            data: "Lembrete deletado com sucesso."
        }

    }catch(err){
       return{
        error: "Não foi possivel deletar o lembrete, tente novamente mais tarde."
       }
    }

}