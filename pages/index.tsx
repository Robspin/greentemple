import type { NextPage } from 'next'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'

const Home: NextPage = () => {
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deleniti obcaecati voluptatem similique enim consequuntur labore quod est incidunt ad!'

  return (
    <Layout>
      <Header title={'GreenTemple'} subTitle={'Coding - Markets - And more'} text={text} />
    </Layout>
  )
}

export default Home
