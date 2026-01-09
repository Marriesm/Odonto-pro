import { Button } from '@/components/ui/button'
import getSesion from '@/lib/getSession'
import { Calendar, Link } from 'lucide-react'
import { redirect } from 'next/navigation'
import { Reminders } from './_components/reminder/reminders'
import { ButtonCopyLink } from './_components/button-copy-link'
import { Appointments } from './_components/appointments/appointments'


export default async function Dashboard() {
  const session = await getSesion()


  if (!session) {
    redirect("/")
  }

  return (

    <main>
      <div className='space-x-2 flex items-center justify-end'>
        <Button asChild className="bg-emerald-500 hover:bg-emerald-300 flex items-center gap-2">
          <Link href={`/clinica/${session.user?.id}`} target="_blank">
            <Calendar className="w-5 h-5" />
            <span>Novo agendamento</span>
          </Link>
        </Button>
        <ButtonCopyLink userId={session.user?.id!} />
      </div>
      <section className='grid grid-cols-1 gap-4 lg:grid-cols-2 mt-4'>
        <Appointments userId={session.user?.id!}/>
        <Reminders userId={session.user?.id!} />
      </section>
    </main>

  )
}