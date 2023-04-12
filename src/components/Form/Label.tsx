import { LabelHTMLAttributes } from 'react'
import clsx from 'clsx'

export function Label({
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
