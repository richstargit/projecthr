import { FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    return (
        <footer id="contact" className="min-h-[250px] md:min-h-[300px] bg-neutral text-neutral-content flex justify-center items-center md">
            <div className="flex flex-col lg:flex-row w-full max-w-6xl px-6 gap-5">
                <div className="w-full lg:w-2/4 flex gap-5 flex-col justify-center items-center">
                    <h2 className="text-5xl font-bold">Contact us</h2>
                    <h2 className="text-5xl font-bold">Hirenz</h2>
                </div>

                <div className="w-full lg:w-2/4 flex items-center justify-center">
                    <div className="flex items-center gap-4 text-lg">
                        <FaEnvelope className="text-xl" />
                        <a href="mailto:hirenz.kmutnb@gmail.com" className="hover:underline text-xl">
                            hirenz.kmutnb@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
