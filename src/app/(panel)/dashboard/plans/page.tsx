import { redirect } from "next/navigation"
import  getSession  from "@/lib/getSession"
import { GridPlans } from "./_components/grid-plans"
import { getSubscriptions } from "@/utils/get-subscriptions"

export default async function Plans(){
    const session = await getSession()

      if (!session) {
        redirect("/")
      }

      const subscription = await getSubscriptions({userId: session?.user?.id! })

    return(
        <div>

           {subscription?.status !== "active" && (
                <GridPlans />
           )}

           {subscription?.status === "active" && (
                <h1>Você já possui uma assinatura ativa.</h1>
           )}
        </div>
    )
}