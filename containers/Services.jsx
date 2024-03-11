
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { SERVICES_DATA } from "@/constants"


const Services = () => {
    return (
        <section className="py-32">
            <div className="container mx-auto">
                <h2 className="mx-auto mb-24 text-center section-title xl:mb-32">Serviços</h2>

                {/* Grid itens */}
                <div className="flex flex-col items-center justify-between xl:flex-row gap-y-12 xl:gap-y-24 xl:gap-x-8">
                    {SERVICES_DATA.map((item, index) => {
                        return (
                            <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative rounded-2xl shadow-lg' key={index}>
                                <CardHeader className='absolute text-primary -top-[70px]'>
                                    <div className="w-[140px] h-[100px] dark:bg-background flex justify-center items-center rounded-2xl">
                                        {item.icon}
                                    </div>
                                </CardHeader>
                                <CardContent className='text-center'>
                                    <CardTitle className='mb-4'>{item.title}</CardTitle>
                                    <CardDescription className='text-lg'>
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services