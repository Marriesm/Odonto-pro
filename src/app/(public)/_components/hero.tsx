import { Button } from "@/components/ui/button";
import  Image  from "next/image";
import MedicPrinc from '../../../../public/medicprin.png';

export function Hero () {
    return(
        <section className="bg-green-50 ">
            <div className="container mx-auto px-4 pt-20 sm:px-6 lg:px-8">
                <main className="flex items-center justify-center">
                    <article  className="flex-[2] max-w-2xl space-y-8 flex flex-col justify-center">
                        <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl tracking-tighter">
                            Encontre os melhores profissionais em um único local!</h1>
                        <p className="text-base md:text-lg text-gray-600">
                            Nós somos uma plataforma para profissionais da saúde com foco em
                         agilizar seu atendimento de forma simplificada e organizada.</p>
                         <Button className="bg-emerald-400 w-fit px-6 font-semibold">Profissionais disponíveis</Button>
                    </article>
                    <div className="hidden lg:block">
                       <Image className="object-contain" src={MedicPrinc} 
                       alt="foto ilustrativa profissional da saúde" 
                       quality={100} width={340} height={400} priority={true}/>
                    </div>
                    
                    
                </main>
            </div>
        </section>
    )
}
