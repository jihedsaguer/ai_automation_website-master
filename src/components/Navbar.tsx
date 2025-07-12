import logo from '../assets/ChatGPT Image Jul 12, 2025, 03_13_58 PM.png'; // Update path if needed

function Header() {
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="shrink-0">
                            <img src={logo} alt="NLS Consulting Logo" className="h-12 w-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;