export default function LegalMention() {
    return (
    <div className="mx-[15vw] my-10">
        <h1 className="text-center font-bold text-4xl">Mentions Légales</h1>
        <p className="my-10">Ce projet est une application développée à des fins de démonstration technique.<br/>Il ne s’agit pas d’un service commercial.</p>
        <p className="font-bold">Politique de confidentialité :</p>
        <ul className="list-disc my-5 ml-10">
            <li>Les données collectées (email, mot de passe) sont utilisées uniquement dans le cadre du fonctionnement de l’application.</li>
            <li>Les mots de passe sont stockés de manière sécurisée (hashés). Aucune donnée n’est partagée avec des tiers.</li>
            <li>Les données peuvent être supprimées sur simple demande.</li>
        </ul>
        <p className="font-bold mb-5">Conditions d’utilisation :</p>  
        <p>Cette application est un projet d’expérimentation.<br/>Il est recommandé de ne pas utiliser de données personnelles sensibles.</p>
        <p><br/>L’auteur ne peut être tenu responsable de toute utilisation inappropriée du service.</p>
    </div>
    )
}