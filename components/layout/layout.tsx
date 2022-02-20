import { ReactNode } from "react"
import Navigation from './navigation'

interface Props { children: ReactNode }

const Layout = ({ children }: Props) => (
    <main className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto">
        <div className="flex flex-col justify-center px-8">
                <Navigation />
                {children}
        </div>
    </main>
    )

export default Layout