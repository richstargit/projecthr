import { FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    return (
        <footer id="contact" className="bg-neutral text-neutral-content h-screen flex justify-center items-center">
            <div className="flex w-full max-w-6xl px-6">
                <div className="w-2/4 flex gap-5 flex-col justify-center items-center">
                    <h2 className="text-5xl font-bold">Contact us</h2>
                    <h2 className="text-5xl font-bold">Hirenz</h2>
                </div>

                <div className="w-2/4 flex items-center justify-center">
                    <div className="flex items-center gap-4 text-lg">
                        <FaEnvelope className="text-xl" />
                        <a href="" className="hover:underline">
                            example@example.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
