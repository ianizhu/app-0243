import { useState } from "react"

export const Settings = () => {
  const [count, setCount] = useState(0);
    return (
      <>
        <div className="container px-4 mx-auto lg:px-8">
          <div className="grid grid-cols-1 gap-y-10">
            <p className="font-semibold text-blue-950">
              Количество кликов: {count}
            </p>
            <button className="btn-settings" onClick={() => {
              setCount(count + 1);
              }}> Кликай </button>
          </div>

        </div>
      </>
    )
  }