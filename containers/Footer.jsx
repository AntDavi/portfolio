import Social from "@/components/Social"

const Footer = () => {
    return (
        <footer className="py-12">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between">
                    {/* Social */}
                    <Social
                        containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
                        iconsStyles='text-black text-[20px] dark:text-white/70 hover:text-primary dark:hover:text-primary'
                    />

                    <div className="text-muted-foreground">
                        Copyright &copy; Anthony Davi. Todos os direitos reservados.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer