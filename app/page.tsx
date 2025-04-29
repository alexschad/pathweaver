import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col gap-[32px] row-start-2 items-center">
            <Image
                className="dark:invert"
                src="/pathweaver.webp"
                alt="Pathweaver logo"
                width={500}
                height={500}
                priority
            />
            <div className="flex gap-4 items-center justify-items-center flex-col sm:flex-row">
                <Link
                    href="/adventure"
                    className="bg-[white] rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto "
                >
                    Start a new Adventure
                </Link>
            </div>
        </main>
    );
}
