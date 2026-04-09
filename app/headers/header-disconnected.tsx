export default function HeaderDisconnected() {
    return (
        <header className="flex bg-[#A7D29E] place-content-between px-5 py-2 h-[60px]">
            <a href="./plats"className="rounded-xl bg-[#B9FFAA] shadow-md/20 px-5 py-2 my-auto">Les menus</a>
            <a href="./"><p className="text-3xl my-auto font-bold">Au Pain Tendre</p></a>
            <a href="./login"className="rounded-xl bg-[#D8B0B0] shadow-md/20 px-5 py-2 my-auto">Se Connecter</a>
        </header>
    )
}