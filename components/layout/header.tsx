interface Props {
    title: string,
    subTitle: string,
    text: string
}

const Header = ({ title, subTitle, text}: Props) => {
    return (
        <header className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              {title}
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              {subTitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              {text}
            </p>
          </div>
        </header>
    )
}

export default Header