import type { GetServerSideProps, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { getFetch } from '../lib/handleFetch'

type urlPropsType = {
  
}

const Home: NextPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {

  console.log(data.data);
  

  return (
    <>
    <nav>
      <ul>
        <a href=""><li>Home</li></a>
        <a href=""><li>Contact</li></a>
        <a href=""><li>Support</li></a>
        <a href=""><li>Support</li></a>
      </ul>
      <a href="">Instagram</a>
      <a href="">Twitter</a>
      <a href="">Itch</a>
    </nav>

    <section id="gallery">
      { data.data.map((img: ImageLinksType) => (
        <figure key={ img.id }><img src={ img.imageUrl } alt="" /></figure>
      )) }
    </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  var res = await getFetch('image')

  var data = res.data as ImageLinksType[]
 
  return {
    props: { data: data }
  }

}

export default Home
