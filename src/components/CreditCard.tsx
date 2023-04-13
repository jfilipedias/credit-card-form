import clsx from 'clsx'

interface CreditCardProps {
  number: string
  holder: string
  validity: string
  cvv: string
  isFlipped?: boolean
}

export function CreditCard({
  number,
  holder,
  validity,
  cvv,
  isFlipped,
}: CreditCardProps) {
  const formattedNumber = number
    .replace(/\s+/g, '')
    .replace(/\D/g, '')
    .padEnd(16, '*')

  const fourFirstDigits = formattedNumber.substring(0, 4)
  const fourSecondDigits = formattedNumber.substring(4, 8)
  const fourThirdNumber = formattedNumber.substring(8, 12)
  const fourLastNumber = formattedNumber.substring(12, 16)

  const [validityMonth, validityYear] =
    validity?.replace(/\s+/g, '').split('/') || '**/**'

  const formattedValidityMonth =
    validityMonth?.replace(/\D/g, '').padEnd(2, '*') || '**'
  const formattedValidityYear =
    validityYear?.replace(/\D/g, '').padEnd(2, '*') || '**'

  const formattedCVV = cvv.replace(/\s+/g, '').replace(/\D/g, '').padEnd(3, '*')

  return (
    <div className="group h-[168px] w-[280px] [perspective:60rem]">
      <div
        className={clsx(
          'bg-card-front absolute left-0 top-0 z-50 flex h-full w-full flex-col justify-end gap-4 bg-no-repeat p-6 transition-all duration-500 [backface-visibility:hidden] [transform:rotateY(0)] [transformstyle:preserve-3d] group-hover:[transform:rotateY(180deg)]',
          { '[transform:rotateY(180deg)]': isFlipped },
        )}
      >
        <div className="flex w-full items-center justify-between tracking-[.25em] text-[#F9FAFB]">
          <span>{fourFirstDigits}</span>
          <span>{fourSecondDigits}</span>
          <span>{fourThirdNumber}</span>
          <span>{fourLastNumber}</span>
        </div>

        <div className="flex items-center justify-between text-[#F9FAFB]">
          <span>{holder || 'Seu nome aqui'}</span>
          <span className="tracking-[.25em]">
            {formattedValidityMonth}/{formattedValidityYear}
          </span>
        </div>
      </div>

      <div
        className={clsx(
          'bg-card-back absolute left-0 top-0 z-50 flex h-full w-full items-end bg-no-repeat px-6 pb-11 transition-all duration-500 [backface-visibility:hidden] [transformstyle:preserve-3d] [transform:rotateY(-180deg)] group-hover:[transform:rotateY(0)]',
          { '[transform:rotateY(0)]': isFlipped },
        )}
      >
        <div className="flex w-full items-center gap-2">
          <div className="flex h-8 w-full items-center justify-end rounded bg-[#D1D5DB] p-3">
            <span className="text-[#717781]">{formattedCVV}</span>
          </div>
          <span className="grow text-sm text-[#E5E7EB]">CVV</span>
        </div>
      </div>
    </div>
  )
}
