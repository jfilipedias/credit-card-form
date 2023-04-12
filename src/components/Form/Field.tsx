import { HTMLAttributes } from 'react'
import clsx from 'clsx'

export function Field({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      {children}
    </div>
  )
}
