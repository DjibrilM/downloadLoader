import { useEffect, useRef, useState } from "react"

function App() {
  const initalState = 0;
  const [percentages, setPercentages] = useState<number>(0);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const counterRef = useRef<number>(initalState);


  const colors: string[] = [
    "#b91c1c",
    "#dc2626",
    "#ef4444",
    "##f87171",

    
    "#bbf7d0",
    "#86efac",
    "#4ade80",
    "#22c55e",
    "#16a34a",
    "#15803d",
  ]

  useEffect(() => {
    counterRef.current = percentages;
  })

  const startDownloading = () => {
    if (isDownloading) return;
    setIsDownloading(true);
    setPercentages((prevValue) => prevValue + 10);

    setTimeout(() => {
      const interval: ReturnType<typeof setInterval> = setInterval(() => {
        setPercentages(counterRef.current + 10);
        if (counterRef.current >= 90) {
          clearInterval(interval);
        }
      }, 500)
    }, 2000);
  }

  return (
    <>
      <section className='max-w-[700px] w-full h-96 bg-[#242424] mt-20 items-center rounded-lg flex justify-center flex-col mx-auto'>
        <div className="bg-purple-800 mb-8 rounded-full border-4 border-white w-[100px] h-[100px] flex items-center justify-center">
          <h1 className="text-2xl font-bold text-white text-center">{percentages}%</h1>
        </div>
        <div className="w-10/12  h-[4.5px] overflow-hidden rounded-lg bg-[#323232]">
          <div style={{ width: `${percentages}%`, background: colors[((Math.round(percentages / 10) * 10) / 10) - 1] }} className="h-full range-transition rounded-tr-lg rounded-br-lg"></div>
        </div>

        <button onClick={() => startDownloading()} disabled={isDownloading} className=" disabled:cursor-not-allowed active:bg-purple-950 text-white bg-purple-800 px-10 py-4 rounded-md mt-6 disabled:bg-gray-300 disabled:text-gray-500">download</button>
      </section>
    </>
  )
}

export default App
