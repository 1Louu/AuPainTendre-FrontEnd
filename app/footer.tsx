export default function Footer() {
    return(
        <footer className="bg-[#A7D29E] h-[20vh] flex  place-content-between px-20 py-10 bottom-8 mt-auto">
            <p className="font-bold underline"><a href="./legalMention">Mention Légales</a></p>
            <p>Cette application a pour but de démonstration technique.Il ne s’agit pas d’un service commercial.
            </p> 
            <div className="flex gap-3 flex-col my-auto">
                <p className="font-bold">Sur l'auteur</p>
                <p className="underline"><a href="https://portfolio.lucbouvard.fr">Mon portfolio</a></p>
                <p className="underline"><a href="https://github.com/1Louu/AuPainTendre-FrontEnd">À propos de ce projet</a></p>
            </div>          
        </footer>
    )
}
