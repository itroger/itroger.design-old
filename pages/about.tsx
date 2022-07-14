import Logos from '@/components/Logos'
import Image from 'next/image'

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
              className="flex flex-col gap-4 border border-gray-400 dark:border-gray-700 dark:border-white md:w-80 p-4 rounded-md cursor-pointer hover:bg-indigo-50 hover:dark:bg-gray-900 hover:border-primary hover:ring-1 hover:ring-primary"
            >
              <div className="flex items-center gap-4">
                {stack.logo}
                <span className="text-2xl font-semibold text-gray-700 dark:text-gray-400">
                  {stack.text}
                </span>
              </div>
              <p className="flex-1 flex items-center text-gray-700 dark:text-gray-400 text-sm">
                {stack.desc}
              </p>
            </a>
          ))}
          <div className="hidden md:block md:w-80" />
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
              className="flex items-center gap-4 border border-gray-400 dark:border-gray-700 dark:border-white md:w-80 p-4 rounded-md cursor-pointer hover:bg-indigo-50 hover:dark:bg-gray-900 hover:border-primary hover:ring-1 hover:ring-primary"
            >
              {platform.logo}
              <span className="text-2xl font-semibold text-gray-700 dark:text-gray-400">
                {platform.text}
              </span>
            </a>
          ))}
          <div className="hidden md:block md:w-80" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-georgia text-3xl text-center">Software</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8 p-4">
          {software.map(s => (
            <a
              key={s.text}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col gap-4 border border-gray-400 dark:border-gray-700 dark:border-white md:w-80 p-4 rounded-md cursor-pointer hover:bg-indigo-50 hover:dark:bg-gray-900 hover:border-primary hover:ring-1 hover:ring-primary"
            >
              <div className="flex items-center gap-4">
                {s.logo}
                <span className="text-2xl font-semibold text-gray-700 dark:text-gray-400">
                  {s.text}
                </span>
              </div>
              <p className="flex-1 flex items-center text-gray-700 dark:text-gray-400 text-sm">
                {s.desc}
              </p>
            </a>
          ))}
          <div className="hidden md:block md:w-80" />
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

const stacks = [
  {
    text: 'JavaScript',
    href: 'https://www.w3schools.com/js/',
    desc: 'JavaScript是一种函数优先的解释型编程语言。',
    logo: <Logos.JavaScriptSvg className="w-12 h-12" />
  },
  {
    text: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    desc: 'TypeScript是一种基于JavaScript的强类型编程语言。',
    logo: <Logos.TypeScriptSvg className="w-12 h-12" />
  },
  {
    text: 'Tailwind',
    href: 'https://tailwindcss.com/',
    desc: 'Tailwind是一个原子类名优先的CSS框架。',
    logo: <Logos.TailwindSvg className="w-12 h-12" />
  },
  {
    text: 'ReactJS',
    href: 'https://beta.reactjs.org/',
    desc: 'ReactJS是一个用于构建用户界面的JavaScript库。',
    logo: <Logos.ReactSvg className="w-12 h-12" />
  },
  {
    text: 'NextJS',
    href: 'https://nextjs.org/',
    desc: 'NextJS是一个基于ReactJS的生产级框架。',
    logo: <Logos.NextJsSvg className="w-12 h-12" />
  },
  {
    text: 'NextAuth',
    href: 'https://next-auth.js.org/',
    desc: 'NextAuth是一个为NextJS应用提供鉴权的解决方案。',
    logo: (
      <Image
        src="/logos/next-auth.png"
        width={44}
        height={48}
        alt="next-auth"
      />
    )
  },
  {
    text: 'Prisma',
    href: 'https://prisma.io/',
    desc: 'Prisma是一个适用于NodeJS和TypeScript的数据库ORM。',
    logo: <Logos.PrismaSvg className="w-12 h-12" />
  },
  {
    text: 'Supabase',
    href: 'https://supabase.com/',
    desc: 'Supabase是一个基于PostgreSQL的BaaS。',
    logo: <Logos.SupabaseSvg className="w-12 h-12" />
  },
  {
    text: 'PostgreSQL',
    href: 'https://www.postgresql.org/',
    desc: '世界上最先进的开源关系型数据库。',
    logo: <Logos.PostgreSvg className="w-12 h-12" />
  },
  {
    text: 'Vercel',
    href: 'https://vercel.com/',
    desc: 'Vercel是一个注重体验和性能的部署平台。',
    logo: <Logos.VercelSvg className="w-12 h-12" />
  },
  {
    text: 'Git',
    href: 'https://git-scm.com/',
    desc: 'Git是一个代码版本控制系统。',
    logo: <Logos.GitSvg className="w-12 h-12" />
  },
  {
    text: 'Github',
    href: 'https://github.com/',
    desc: '世界上最大最先进的开发者和代码托管平台。',
    logo: <Logos.GithubSvg className="w-12 h-12" />
  }
]

const platforms = [
  {
    text: 'Web',
    href: 'https://developer.mozilla.org/zh-CN/docs/Web/Tutorials',
    logo: <Image src="/logos/web.png" width={44} height={48} alt="web" />
  },
  {
    text: 'Mini',
    href: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
    logo: <Logos.MiniSvg className="w-12 h-12" />
  },
  {
    text: 'Node',
    href: 'https://nodejs.org/',
    logo: <Logos.NodeSvg className="w-12 h-12" />
  }
]

const software = [
  {
    text: 'WebStorm',
    href: 'https://www.jetbrains.com/webstorm/',
    desc: 'JavaScript IDE。',
    logo: <Logos.WebStorm className="w-12 h-12" />
  },
  {
    text: 'DataGrip',
    href: 'https://www.jetbrains.com/datagrip/',
    desc: '数据库 IDE。',
    logo: <Logos.DataGrip className="w-12 h-12" />
  },
  {
    text: 'Designer',
    href: 'https://affinity.serif.com/designer/',
    desc: '矢量设计软件。',
    logo: <Logos.Designer className="w-12 h-12" />
  },
  {
    text: 'Photo',
    href: 'https://affinity.serif.com/photo/',
    desc: '图片编辑软件。',
    logo: <Logos.Photo className="w-12 h-12" />
  },
  {
    text: 'Figma',
    href: 'https://www.figma.com/',
    desc: '原型设计软件。',
    logo: <Logos.Figma className="w-12 h-12" />
  },
  {
    text: 'Notion',
    href: 'https://www.notion.so/',
    desc: '写作软件。',
    logo: <Logos.Notion className="w-12 h-12" />
  },
  {
    text: 'Termius',
    href: 'https://www.termius.com/',
    desc: 'SSH管理软件。',
    logo: <Logos.Termius className="w-12 h-12" />
  },
  {
    text: 'Typora',
    href: 'https://typora.io/',
    desc: 'Markdown编辑器。',
    logo: <Image src="/logos/typora.png" width={48} height={48} alt="typora" />
  }
]

const graduates = [
  { text: '软件工程•硕士', logo: '/logos/sysu.gif' },
  { text: '计算机科学与技术•本科', logo: '/logos/lit.gif' }
]
