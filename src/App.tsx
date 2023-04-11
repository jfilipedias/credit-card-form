import { Button } from './components/Button'
import './styles/main.css'

function App() {
  return (
    <>
      <form className="mx-auto flex max-w-3xl flex-col items-center border-[#374151] bg-[#1F2937] px-6 py-8 lg:mt-16 lg:rounded-md lg:border lg:p-8">
        <div className="flex flex-col lg:flex-row">
          <section></section>

          <section></section>
        </div>

        <Button className="mt-12 w-full">Adicionar cartão</Button>
      </form>
    </>
  )
}

export default App
