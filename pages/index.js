import Head from 'next/head'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
export default function Home() {
  return (
    <div className="overflow-hidden bg-gray-100 h-screen">
      <Head>
        <title>Facebook</title>
      </Head>
      
      {/*Header*/}
      <Header/>

      <main className="flex">
        {/*Sidebar*/}
        <Sidebar/>
        {/*Feed*/}
        <Feed/>
        {/*Widgets*/}
        <Widgets/>
      </main>
    </div>
  )
}