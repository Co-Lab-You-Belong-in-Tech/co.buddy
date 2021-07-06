import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/resources/logo.png'
import samkov from '../public/resources/samkov.png'
import vlada from '../public/resources/vlada.png'

export default function Home() {
  return ( 
    <section className="text-gray-900 body-font h-screen">
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <title>Co.Buddy</title>

        <link rel='manifest' href='manifest.json' />
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel='apple-touch-icon' href='/apple-icon.png'></link>
        <meta name='theme-color' content='#317EFB' />
      </Head>

      <div className="h-screen relative container mx-auto flex flex-col px-7 py-4 items-center lg:justify-center justify-end">
        <div className="lg:block absolute bottom-12 right-24 z-0 hidden">
          <Image src={vlada} width="355" height="441"></Image>
        </div>
        <div className="lg:block absolute top-12 left-24 z-0 hidden">
          <Image src={samkov} width="355" height="441"></Image>
        </div>
        <div className="relative flex flex-col items-center lg:p-12 lg:shadow-xl rounded border-0 z-40 bg-white">
          <Image width="50" height="50" src={logo} alt="Co.Buddy logo" className="object-contain"></Image>
          <div className="lg:flex-grow h-3/6 flex flex-col md:items-center md:text-left md:mb-0 items-center text-center">
            <h1 className="text-xl font-bold mb-10">
              Welcome to Co.Buddy
            </h1>
            <p className="mb-32 lg:mb-12 leading-relaxed max-w-xs text-gray-600 text-center">Co.Buddy helps young professionals beat procastination and inactivity through peer-accountablity</p>
            <div className="flex w-full justify-center mb-5">
              <Link href="/enter">
                <button className="text-white w-full text-center bg-copurple border-0 py-2 px-6 focus:outline-none rounded text-lg">Get Started</button>
              </Link>
            </div>
            <p className="mb-8 leading-relaxed text-sm text-gray-400">Already have an account? <Link href="/signin"><a className="text-copurple">Sign in</a></Link></p>
          </div>
        </div>
      </div>

    </section>
  )
}
