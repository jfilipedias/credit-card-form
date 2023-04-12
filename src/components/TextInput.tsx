import {
  HTMLProps,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  forwardRef,
  useId,
} from 'react'
import clsx from 'clsx'
import WarningIcon from '../assets/warning.svg'

function TextInputRoot({
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement>) {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      {children}
    </div>
  )
}

function TextInputLabel({
  children,
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={clsx(
        'flex items-center gap-1 font-semibold text-[#E5E7EB]',
        className,
      )}
      {...props}
    >
      {children}
    </label>
  )
}

const TextInputInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(function TextInputInput({ className, ...props }, ref) {
  const inputId = useId()

  return (
    <input
      id={inputId}
      className={clsx(
        'w-full rounded border border-[#4B5563] bg-[#111827] px-4 py-3 text-base text-[#F3F4F6] outline-none placeholder:text-[#9CA3AF] invalid:border-[#FB7185] focus:border-[#9333EA]',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})

function TextInputErrorMessage({
  children,
  className,
  ...props
}: HTMLProps<HTMLSpanElement>) {
  return (
    <span
      className={clsx('mt-2 flex items-center gap-1 text-[#FB7185]', className)}
      {...props}
    >
      <img src={WarningIcon} alt="Ícone de alerta" />
      {children}
    </span>
  )
}

export const TextInput = {
  ErrorMessage: TextInputErrorMessage,
  Input: TextInputInput,
  Label: TextInputLabel,
  Root: TextInputRoot,
}
