import { ChangeEvent, useState } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import HelpIcon from './assets/help.svg'
import { Button } from './components/Button'
import { CreditCard } from './components/CreditCard'
import { Form } from './components/Form'
import { SafetyInfo } from './components/SafetyInfo'
import { maskCreditCardNumber, maskCreditCardValidity } from './utils/masks'
import './styles/main.css'

const creditCardFormSchema = z.object({
  number: z
    .string()
    .min(19, { message: 'Informe o número do cartão' })
    .transform((value) => Number(value.replace(' ', ''))),
  holder: z.string().min(3, { message: 'Informe o nome do titular do cartão' }),
  validity: z.string().min(5, { message: 'Informe a validade' }),
  cvv: z
    .string()
    .min(3, { message: 'Informe o cvv' })
    .transform((value) => Number(value)),
})

type CreditCardFormInput = z.input<typeof creditCardFormSchema>
type CreditCardFormOutput = z.output<typeof creditCardFormSchema>

function App() {
  const [isCardFlipped, setIsCardFlipped] = useState(false)

  const addCreditCardForm = useForm<CreditCardFormInput>({
    resolver: zodResolver(creditCardFormSchema),
  })

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
    watch,
    setValue,
  } = addCreditCardForm

  const cardNumber = String(watch('number'))
  const cardHolder = watch('holder')
  const cardValidity = watch('validity')
  const cardCVV = String(watch('cvv'))

  async function handleAddCreditCard(data: unknown) {
    console.log(data as CreditCardFormOutput)
  }

  function flipCard() {
    setIsCardFlipped(true)
  }

  function untapCard() {
    setIsCardFlipped(false)
  }

  function handleCreditCardNumberChange(event: ChangeEvent<HTMLInputElement>) {
    setValue('number', maskCreditCardNumber(event.target.value), {
      shouldDirty: true,
    })
  }

  function handleCreditCardValidityChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setValue('validity', maskCreditCardValidity(event.target.value), {
      shouldDirty: true,
    })
  }

  return (
    <FormProvider {...addCreditCardForm}>
      <form
        onSubmit={handleSubmit(handleAddCreditCard)}
        className="mx-auto mt-16 flex h-screen max-w-3xl flex-col items-center border-[#374151] bg-[#1F2937] px-6 py-8 lg:mt-40 lg:h-fit lg:rounded-md lg:border lg:p-8"
      >
        <div className="flex w-full flex-col items-center gap-16 lg:flex-row-reverse">
          <section className="flex w-72 flex-col items-center gap-8">
            <CreditCard
              number={cardNumber}
              holder={cardHolder}
              validity={cardValidity}
              cvv={cardCVV}
              isFlipped={isCardFlipped}
            />

            <SafetyInfo className="hidden lg:flex" />
          </section>

          <section className="flex w-full grow flex-col items-center gap-12 lg:w-auto">
            <div className="flex w-full flex-col gap-6">
              <Form.Field>
                <Form.Label htmlFor="number">Número do cartão</Form.Label>

                <Form.Input
                  name="number"
                  placeholder="**** **** **** ****"
                  maxLength={19}
                  invalid={!!errors.number}
                  onChange={handleCreditCardNumberChange}
                />

                {errors.number && (
                  <Form.ErrorMessage>{errors.number.message}</Form.ErrorMessage>
                )}
              </Form.Field>

              <Form.Field>
                <Form.Label htmlFor="holder">Nome do titular</Form.Label>

                <Form.Input
                  name="holder"
                  placeholder="Nome como está no cartão"
                  invalid={!!errors.holder}
                />

                {errors.holder && (
                  <Form.ErrorMessage>{errors.holder.message}</Form.ErrorMessage>
                )}
              </Form.Field>

              <div className="flex gap-4">
                <Form.Field>
                  <Form.Label htmlFor="validity">Validade</Form.Label>

                  <Form.Input
                    name="validity"
                    placeholder="mm/aa"
                    maxLength={5}
                    invalid={!!errors.validity}
                    onChange={handleCreditCardValidityChange}
                  />

                  {errors.validity && (
                    <Form.ErrorMessage>
                      {errors.validity.message}
                    </Form.ErrorMessage>
                  )}
                </Form.Field>

                <Form.Field>
                  <Form.Label htmlFor="cvv">
                    CVV
                    <Tooltip.Provider>
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <img src={HelpIcon} alt="Ícone de ajuda" />
                        </Tooltip.Trigger>

                        <Tooltip.Portal>
                          <Tooltip.Content className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade mb-1 rounded bg-[#D1D5DB] px-2 py-1 text-sm text-[#374151]">
                            Esse número está, geralmente, no verso do seu cartão
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </Tooltip.Provider>
                  </Form.Label>

                  <Form.Input
                    name="cvv"
                    placeholder="***"
                    maxLength={4}
                    invalid={!!errors.cvv}
                    onFocus={flipCard}
                    onBlur={untapCard}
                  />

                  {errors.cvv && (
                    <Form.ErrorMessage>{errors.cvv.message}</Form.ErrorMessage>
                  )}
                </Form.Field>
              </div>
            </div>

            <SafetyInfo className="lg:hidden" />
          </section>
        </div>

        <Button type="submit" className="mt-12 w-full" disabled={isSubmitting}>
          Adicionar cartão
        </Button>
      </form>
    </FormProvider>
  )
}

export default App
