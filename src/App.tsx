/* eslint-disable tailwindcss/no-custom-classname */
import { Button } from './components/Button'
import { SafeLegend } from './components/SafeLegend'
import './styles/main.css'

function App() {
  return (
    <>
      <form className="mx-auto flex h-screen max-w-3xl flex-col items-center border-[#374151] bg-[#1F2937] px-6 py-8 lg:mt-16 lg:h-fit lg:rounded-md lg:border lg:p-8">
        <div className="flex w-full flex-col items-center gap-16 lg:flex-row-reverse">
          <section className="flex w-96 flex-col items-center gap-8">
            <div className="group h-[212px] w-[328px] [perspective:60rem]">
              <div className="bg-card-front absolute left-0 top-0 z-50 h-[212px] w-[328px] bg-no-repeat transition-all duration-500 [backface-visibility:hidden] [transform:rotateY(0)] [transformstyle:preserve-3d] group-hover:[transform:rotateY(180deg)]"></div>
              <div className="bg-card-back absolute left-0 top-0 z-50 h-[212px] w-[328px] bg-no-repeat transition-all duration-500 [backface-visibility:hidden] [transformstyle:preserve-3d] [transform:rotateY(-180deg)] group-hover:[transform:rotateY(0)]"></div>
            </div>

            <SafeLegend className="hidden lg:flex" />
          </section>

          <section className="flex w-full grow flex-col items-center gap-12 lg:w-auto">
            <div className="w-full">Form</div>

            <SafeLegend className="lg:hidden" />
          </section>
        </div>

        <Button type="submit" className="mt-12 w-full">
          Adicionar cartão
        </Button>
      </form>
    </>
  )
}

export default App
