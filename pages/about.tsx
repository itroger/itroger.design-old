import Logos from '@/components/Logos'
import Image from 'next/image'

const stacks = [
  { text: 'JavaScript', logo: <Logos.JavaScriptSvg className="w-8 h-8" /> },
  { text: 'TypeScript', logo: <Logos.TypeScriptSvg className="w-8 h-8" /> },
  { text: 'Tailwind', logo: <Logos.TailwindSvg className="w-8 h-8" /> },
  { text: 'ReactJS', logo: <Logos.ReactSvg className="w-8 h-8" /> },
  { text: 'NextJS', logo: <Logos.NextJsSvg className="w-8 h-8" /> },
  {
    text: 'NextAuth',
    logo: (
      <Image
        src="/logos/next-auth.png"
        width={29}
        height={32}
        alt="next-auth"
      />
    )
  },
  { text: 'Prisma', logo: <Logos.PrismaSvg className="w-8 h-8" /> },
  { text: 'Supabase', logo: <Logos.SupabaseSvg className="w-8 h-8" /> },
  { text: 'PostgreSQL', logo: <Logos.PostgreSvg className="w-8 h-8" /> },
  { text: 'Vercel', logo: <Logos.VercelSvg className="w-8 h-8" /> },
  { text: 'Git', logo: <Logos.GitSvg className="w-8 h-8" /> },
  { text: 'Github', logo: <Logos.GithubSvg className="w-8 h-8" /> }
]

const graduates = [
  { text: '软件工程•硕士', logo: '/logos/sysu.gif' },
  { text: '计算机科学与技术•本科', logo: '/logos/lit.gif' }
]

const About = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-3xl md:text-5xl p-4 md:py-20">
        Creative Web Designer & Developer
      </h1>
      <h2 className="font-georgia text-3xl text-center mb-4">FullStack</h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-8 p-4">
        {stacks.map(stack => (
          <div
            key={stack.text}
            className="flex items-center gap-4 border border-gray-400 dark:border-gray-700 dark:border-white md:w-52 p-4 rounded-md cursor-pointer hover:bg-indigo-50 hover:dark:bg-gray-900 hover:border-primary hover:ring-1 hover:ring-primary"
          >
            {stack.logo}
            <span className="text-lg font-semibold text-gray-700 dark:text-gray-400">
              {stack.text}
            </span>
          </div>
        ))}
        <div className="hidden md:block md:w-52" />
        <div className="hidden md:block md:w-52" />
        <div className="hidden md:block md:w-52" />
      </div>
      <h2 className="font-georgia text-3xl text-center mb-4">Graduate</h2>
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
  )
}

export default About
