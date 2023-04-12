import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import clsx from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  invalid?: boolean
}

export function Input({ className, invalid, ...props }: InputProps) {
  const { register } = useFormContext()

  return (
    <input
      className={clsx(
        'w-full rounded border border-[#4B5563] bg-[#111827] px-4 py-3 text-base text-[#F3F4F6] outline-none placeholder:text-[#9CA3AF] invalid:border-[#FB7185] focus:border-[#9333EA]',
        { 'border-[#FB7185]': invalid },
        className,
      )}
      {...register(props.name)}
      {...props}
    />
  )
}
