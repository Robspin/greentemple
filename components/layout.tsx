import { ReactNode } from "react"
import Navigation from './navigation'

interface Props { children: ReactNode }

const Layout = ({ children }: Props) => (
    <div className="flex flex-col justify-center px-8">
            <Navigation />
        <main>
            {children}
        </main>
    </div>
    )

export default Layout