// You need this import for the GitHub icon:
import { FaGithub } from "react-icons/fa";

function Header() {
    return (
        <header className="w-full flex items-center justify-between px-8 py-4 bg-white/0 shadow-md fixed top-0 left-0 z-10">
            <img
                src="/linescore.png"
                alt="Linescore"
                className="h-14 w-auto"
            />
            <a
                href="https://github.com/yobed/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white' }}
                className="flex items-center gap-2 white-icon hover:scale-101 text-lg font-semibold"
            >
                <FaGithub className="h-6 w-6" />
                
            </a>
        </header>
    );
}


export { Header }