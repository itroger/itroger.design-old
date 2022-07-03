import Logos from '@/components/Logos'
import Image from 'next/image'

const stacks = [
  {
    text: 'JavaScript',
    href: 'https://www.w3schools.com/js/',
    logo: <Logos.JavaScriptSvg className="w-8 h-8" />
  },
  {
    text: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    logo: <Logos.TypeScriptSvg className="w-8 h-8" />
  },
  {
    text: 'Tailwind',
    href: 'https://tailwindcss.com/',
    logo: <Logos.TailwindSvg className="w-8 h-8" />
  },
  {
    text: 'ReactJS',
    href: 'https://beta.reactjs.org/',
    logo: <Logos.ReactSvg className="w-8 h-8" />
  },
  {
    text: 'NextJS',
    href: 'https://nextjs.org/',
    logo: <Logos.NextJsSvg className="w-8 h-8" />
  },
  {
    text: 'NextAuth',
    href: 'https://next-auth.js.org/',
    logo: (
      <Image
        src="/logos/next-auth.png"
        width={29}
        height={32}
        alt="next-auth"
      />
    )
  },
  {
    text: 'Prisma',
    href: 'https://prisma.io/',
    logo: <Logos.PrismaSvg className="w-8 h-8" />
  },
  {
    text: 'Supabase',
    href: 'https://supabase.com/',
    logo: <Logos.SupabaseSvg className="w-8 h-8" />
  },
  {
    text: 'PostgreSQL',
    href: 'https://www.postgresql.org/',
    logo: <Logos.PostgreSvg className="w-8 h-8" />
  },
  {
    text: 'Vercel',
    href: 'https://vercel.com/',
    logo: <Logos.VercelSvg className="w-8 h-8" />
  },
  {
    text: 'Git',
    href: 'https://git-scm.com/',
    logo: <Logos.GitSvg className="w-8 h-8" />
  },
  {
    text: 'Github',
    href: 'https://github.com/',
    logo: <Logos.GithubSvg className="w-8 h-8" />
  }
]

const platforms = [
  {
    text: 'Web',
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/Tutorials',
    logo: <Image src="/logos/web.png" width={29} height={32} alt="web" />
  },
  {
    text: 'Mini',
    href: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
    logo: <Logos.MiniSvg className="w-8 h-8" />
  },
  {
    text: 'Node',
    href: 'https://nodejs.org/',
    logo: <Logos.NodeSvg className="w-8 h-8" />
  }
]

const graduates = [
  { text: '软件工程•硕士', logo: '/logos/sysu.gif' },
  { text: '计算机科学与技术•本科', logo: '/logos/lit.gif' }
]

const About = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-center text-3xl md:text-5xl p-4 md:py-20">
        Creative Web Designer & Developer
      </h1>
      <div className="flex flex-col gap-2">
        <h2 className="font-georgia text-3xl text-center">FullStack</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8 p-4">
          {stacks.map(stack => (
            <a
              key={stack.text}
              href={stack.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 border border-gray-400 dark:border-gray-700 dark:border-white md:w-52 p-4 rounded-md cursor-pointer hover:bg-indigo-50 hover:dark:bg-gray-900 hover:border-primary hover:ring-1 hover:ring-primary"
            >
              {stack.logo}
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-400">
                {stack.text}
              </span>
            </a>
          ))}
          <div className="hidden md:block md:w-52" />
          <div className="hidden md:block md:w-52" />
          <div className="hidden md:block md:w-52" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-georgia text-3xl text-center">Platform</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8 p-4">
          {platforms.map(platform => (
            <a
              key={platform.text}
              href={platform.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 border border-gray-400 dark:border-gray-700 dark:border-white md:w-52 p-4 rounded-md cursor-pointer hover:bg-indigo-50 hover:dark:bg-gray-900 hover:border-primary hover:ring-1 hover:ring-primary"
            >
              {platform.logo}
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-400">
                {platform.text}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-georgia text-3xl text-center">Graduate</h2>
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 p-4">
          {graduates.map(graduate => (
            <div
              key={graduate.text}
              className="flex flex-col gap-4 w-full md:w-56 p-4 hover:bg-gray-100 hover:scale-110 cursor-pointer rounded-xl shadow backdrop-saturate-180 backdrop-blur-5"
            >
              <div className="flex justify-center">
                <Image
                  src={graduate.logo}
                  width={100}
                  height={100}
                  alt={graduate.text}
                />
              </div>
              <span className="text-center font-semibold text-gray-700 dark:text-gray-400">
                {graduate.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
