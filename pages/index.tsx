import Logos from '@/components/Logos'

const Index = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-full">
      <h1 className="mb-4 font-sans font-bold text-6xl md:text-8xl text-center text-black dark:text-white">
        FullStack
      </h1>
      <p className="flex justify-center gap-2 flex-wrap text-center text-2xl md:text-3xl text-white">
        <span className="text_back text_back_1">
          <span className="animation_text animation_text_1">Next.js,</span>
        </span>
        <span className="text_back text_back_2">
          <span className="animation_text animation_text_2">Tailwind,</span>
        </span>
        <span className="text_back text_back_3">
          <span className="animation_text animation_text_3">Prisma,</span>
        </span>
        <span className="text_back text_back_4">
          <span className="animation_text animation_text_4">PostgreSQL,</span>
        </span>
        <span className="text_back text_back_5">
          <span className="animation_text animation_text_5">Vercel.</span>
        </span>
      </p>
      <button className="px-10 py-3 font-semibold text-base text-white dark:text-black hover:text-black hover:dark:text-white bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white hover:bg-zinc-100 hover:dark:bg-zinc-800 rounded">
        Get Started
      </button>
      <div className="mt-10 flex items-center gap-4 md:gap-8">
        <Logos.NextSvg className="text-black" />
        <Logos.TailwindSvg style={{ color: '#38bdf8' }} />
        <Logos.PrismaSvg />
        <Logos.PostgreSvg />
        <Logos.VercelSvg className="text-black" />
      </div>
    </div>
  )
}

export default Index
