import Navbar from "@/Components/Layouts/Navbar/Navbar";
import { usePage } from "@inertiajs/react";

export default function AuthenticationLayout({ children, onLogout, onChangePassword }) {
    const { auth } = usePage().props;

    return (
        <LayoutContent>
            <Navbar
                user={auth.user}
                onLogout={onLogout}
                onChangePassword={onChangePassword}
            />

            <main className="relative z-10 flex items-center justify-center w-full flex-1 px-4">
                {children}
            </main>

            <footer className="relative z-0 mb-4 text-gray-400 text-sm text-center">
                © {new Date().getFullYear()} Grupo ASAS. Todos os direitos reservados.
            </footer>
        </LayoutContent>
    );
}

function LayoutContent({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
            {children}
        </div>
    );
}
