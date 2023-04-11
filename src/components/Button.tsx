import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

export function Button({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        'flex items-center justify-center gap-2 rounded bg-[#9333EA] px-12 py-4 text-[#F9FAFB] transition-colors hover:bg-[#A855F7]',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
