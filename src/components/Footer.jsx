

const Footer = () => {
    return (
        <div className="bg-neutral">
            <footer className="footer max-w-6xl mx-auto sm:footer-horizontal text-neutral-content p-10 justify-between">
                <div>
                    <h2 className="text-xl font-bold text-white">🎬 MovieExplorer</h2>
                    <p className="text-sm mt-2 text-gray-400">
                        Explore and discover your favorite <br /> movies from around the world.
                    </p>
                    <p className="text-xs text-gray-500 mt-4">
                        © 2026 MovieExplorer. All rights reserved.
                    </p>
                </div>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>

                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;