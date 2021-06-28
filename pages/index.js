import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return ( 
    <section className="text-gray-900 body-font h-screen">
      <Head>
        <meta charset='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <title>Next.js PWA Example</title>

        <link rel='manifest' href='manifest.json' />
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel='apple-touch-icon' href='/apple-icon.png'></link>
        <meta name='theme-color' content='#317EFB' />
      </Head>

      <div className="h-screen container mx-auto flex px-7 py-4 md:flex-row flex-col items-center justify-end">
        <div className="lg:flex-grow h-3/6 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left md:mb-0 items-center text-center">
          <h1 className="text-xl font-bold mb-10">
            Welcome to Co.Buddy
          </h1>
          <p className="mb-32 leading-relaxed">Co.Buddy helps young professionals beat procastination and inactivity by peer accountability to achieve their goals faster.</p>
          <div className="flex w-full justify-center mb-5">
            <Link href="/usersurvey">
              <button className="text-white w-full text-center bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Sign up</button>
            </Link>
          </div>
          <p className="mb-8 leading-relaxed text-sm text-gray-400">Already have an account? Sign in</p>
        </div>
      </div>

    </section>
  )
}
