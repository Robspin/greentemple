import Link from 'next/link'
import { useRouter } from 'next/router';
import cn from 'classnames'

interface Props {
    href: string,
    text: string
}

const NavItem = ({ href, text}: Props) => {
    const router = useRouter();
    const isActive = router.asPath === href;
    
    console.log(href, text)

    return (
        <Link href={href}>
        <a
            className={cn(
            isActive
                ? 'font-semibold text-gray-800 dark:text-gray-200'
                : 'font-normal text-gray-600 dark:text-gray-400',
            'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
            )}
        >
            <span className="capsize">{text}</span>
        </a>
        </Link>
    );
}

const Navigation = () => {
    return (
        <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 dark:text-gray-100">
            <div className="ml-[-0.60rem]">
                <NavItem href="/" text="Home" />
                <NavItem href="/playground" text="Playground" />
            </div>
        </nav>
    )
}

export default Navigation