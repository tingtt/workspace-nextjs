export default function Home() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='text-6xl'>
        Hello,{' '}
        <span
          className={`
            w-[fit-content] text-[4rem] text-black
            text-opacity-0 bg-[#2B90B6] bg-cover bg-clip-text
            bg-gradient-to-r from-fuchsia-400 to-fuchsia-600
          `}
        >
          systemd-cd!
        </span>
      </div>
    </div>
  )
}
