import { Button } from "@/components/ui/button"
import Link from "next/link"

const Cta = () => {
    return (
        <section className="py-24 bg-tertiary/40 dark:bg-secondary/40">
            <div className="container mx-auto">
                <div className="flex flex-col items-center">
                    <h2 className="max-w-xl mb-8 text-center h2 ">
                        Preparado para tornar sua ideia realidade? Estou aqui pra te ajudar!
                    </h2>
                    <Link href='/contact'>
                        <Button>Entre em contato</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Cta