"use client"
import {useState} from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";
import { useSession } from "next-auth/react";
import { handleRegister } from "../_actions/loguin"

export function Header(){

const {data: session, status} = useSession();
const [isOpen, setIsOpen] = useState(false);



const navItens = [
    {href: "#profissionais", label: "Profissionais"},
    {href: "/contatos", label: "Contatos"}
]

async function handleLoguin(){
   await handleRegister("github")
}

const NavLinks = () => {
    return (
        <>
            {navItens.map((item) => (
                <Button
                    onClick={() => setIsOpen(false)}
                    key={item.href}
                    asChild
                    className="hover:bg-transparent shandow-none">
                    <Link href={item.href}>{item.label}</Link>
                </Button>
            ))}

            {status === 'loading' ? (
                <></>
            ) : session ? (<Link href="/dashboard" className="flex items-center justify-center gap-2 bg-zinc-900 text-white py-1 rounded-md px-4">
            Painel da clinica</Link>): (
            <Button onClick={handleLoguin}>
                <LogIn/>
                Fazer loguin
            </Button>)}
        </>
    );
}

    return(
        <header className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white ">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/"
                className="text-2xl font-bold text-zinc-900"
                >Odonto<span className="text-emerald-500">Pro</span></Link>
                <nav className="hidden md:flex items-center space-x-4">
                   <NavLinks/>
                </nav>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button className="hover:bg-transparent">
                            <Menu className="w-6 h-6"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="w-[240px] sm:w-[320px] z-[9999]">
                        <SheetTitle>Menu</SheetTitle>
                        <SheetHeader></SheetHeader>
                        <SheetDescription>Veja nossos links</SheetDescription>
                        <nav className="flex flex-col space-4 mt-6"><NavLinks/></nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}