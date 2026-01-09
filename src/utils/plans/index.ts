import { features } from "process"
export type PlanDetailsProps = {
    maxServices: number;
}

export type PlansProps = {
    BASIC: PlanDetailsProps;
    PROFESSIONAL: PlanDetailsProps;
}

export const PLANS: PlansProps = {
    BASIC: {
        maxServices: 5,
        

    },
    PROFESSIONAL: {
        maxServices: 55
        
    }
}

export const subscriptionPlans = [
    {
        id: 'BASIC',
        name: 'Básico',
        description: 'Ideal para clínicas pequenas que estão começando.',
        oldPrice: 29.99,
        price: "19.99",
        features:[
            `Àté ${PLANS["BASIC"].maxServices} serviços cadastrados`,
            'Agendamento online ilimitado',
            'Suporte',
            'Relátorios básicos'

        ]
    },
    {
        id: "PROFESSIONAL",
        name: 'Profissional',
        description: 'Perfeito para clínicas em crescimento que precisam de mais recursos.',
        oldPrice: 69.99,
        price: "49.99",
        features:[
            `Até ${PLANS["PROFESSIONAL"].maxServices} serviços cadastrados`,
            'Agendamento online ilimitado',
            'Suporte prioritário',
            'Relátorios avançados',
            'Integração com outras ferramentas'
        ]
    }
]