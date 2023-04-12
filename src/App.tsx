import clsx from 'clsx'
import ShieldIcon from './assets/shield.svg'
import { Button } from './components/Button'
import './styles/main.css'

function App() {
  return (
    <>
      <form className="mx-auto flex h-screen max-w-3xl flex-col items-center border-[#374151] bg-[#1F2937] px-6 py-8 lg:mt-16 lg:h-fit lg:rounded-md lg:border lg:p-8">
        <div className="flex w-full flex-col items-center gap-16 lg:flex-row-reverse lg:items-start">
          <section className="flex w-72 flex-col items-center gap-8">
            <div>Card</div>

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
