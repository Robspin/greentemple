import Layout from "../components/layout/layout"
import Header from "../components/layout/header"
import Content from "../components/layout/content"
import CardItem from "../components/cardItem"

const Playground = () => {
    return (
        <Layout>
             <Header title={'Playground'} subTitle={'Some fun projects'} text={'Click on them to see'} />
                <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
                    Canvas stuff
                </h2>
                <div className="flex gap-6 flex-col md:flex-row">
                    <CardItem title="Matrix animation" slug="matrix" src="/images/matrix.png" gradient="from-[#d30cb7] via-[#d30cb7] to-[#6ef1d8]" />
                    <CardItem title="Snake" slug="snake" src="/images/snake.png" gradient="from-[#6ef1d8] via-[#6ef1d8] to-[#d30cb7]" />
                    <CardItem title="Flow fields" slug="flow-fields" src="/images/flow-fields.png" gradient="from-[#d30cb7] via-[#6ef1d8] to-[#6ef1d8]" />
                </div>
        </Layout>
    )
}

export default Playground