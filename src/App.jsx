import { Header, DetailsWidget, PasswordInput, Footer } from "./components";

const App = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <div className="flex flex-col gap-16 py-12">
                <section className="mx-auto flex w-[90%] flex-col gap-5 sm:w-3/4 md:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-1/3">
                    <DetailsWidget summary="¿Qué es una clave segura?">
                        Se denomina "segura" a una clave que tenga una buena estructura y seguridad,
                        para que a los ciberdelincuentes no se les haga fácil introducirse en
                        nuestras cuentas.
                    </DetailsWidget>

                    <DetailsWidget summary="¿Cómo se conforman?">
                        Para que una contraseña sea confiable se recomienda que contenga por lo
                        menos 8 carácteres, incluyendo así; una mayúscula, una minúscula, un número
                        y un símbolo.
                    </DetailsWidget>

                    <DetailsWidget summary="¿Son realmente seguras?">
                        La realidad es que no, los intrusos informáticos siempre encuentran alguna
                        forma de acceder a los sistemas... Pero colocando más capas y barreras en
                        nuestra clave, habrá menos posibilidades de que nos asalten.
                    </DetailsWidget>
                </section>

                <main className="flex flex-col items-center gap-4">
                    <h2 className="bg-gradient-to-r from-cyan-800 via-teal-500 to-emerald-400 bg-clip-text text-center text-xl font-black text-transparent">
                        Prueba tu clave
                    </h2>

                    <PasswordInput />
                </main>

                <section className="mx-auto flex w-[90%] flex-col gap-5 sm:w-3/4 md:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-1/3">
                    <DetailsWidget summary="¿Cómo asegurarlas?">
                        Cómo asegurarlas es un paso muy importante para protejer la integridad de
                        nuestros datos. Como ház de esperar, escribir tus contraseñas en un papel,
                        no es la mejor opción, y tampoco que Google las recuerde... Por eso te
                        recomendamos relacionarlas con cosas que sabes que no te olvidarás, como el
                        nombre de tu primer mascota :&#41;
                    </DetailsWidget>

                    <DetailsWidget summary="¡No las reutilices!">
                        Se recomienda no reutilizar tus contraseñas, es decir, tener una clave única
                        para cada página web o servicio. Con esto logramos que si un
                        ciberdelincuente consigue el acceso a una de nuestras cuentas, no lo obtenga
                        en los demás sitios.
                    </DetailsWidget>

                    <DetailsWidget summary="El doble factor de autenticación">
                        Se trata de una verificación en dos pasos al iniciar sesión en nuestros
                        servicios, normalmente se nos suele enviar un SMS o un correo electrónico
                        con un código numérico el cual nos permite terminar de identificarnos. Como
                        entenderás, esta barrera es fundamental para evitar que los intrusos se
                        hagan con nuestra valiosa información.
                    </DetailsWidget>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default App;
