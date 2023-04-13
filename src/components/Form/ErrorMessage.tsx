import { HTMLAttributes } from 'react'
import clsx from 'clsx'
import WarningIcon from '../../assets/warning.svg'

export function ErrorMessage({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={clsx('mt-2 flex items-center gap-1 text-[#FB7185]', className)}
      role="alert"
      {...props}
    >
      <img src={WarningIcon} alt="Ícone de alerta" />
      {children}
    </span>
  )
}
