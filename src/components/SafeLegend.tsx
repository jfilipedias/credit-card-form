import clsx from 'clsx'
import ShieldIcon from '../assets/shield.svg'

export function SafeLegend({ className }: { className?: string }) {
  return (
    <div className={clsx('flex items-center gap-2', className)}>
      <img src={ShieldIcon} alt="Ícone de segurança" />
      <span className="text-[#E5E7EB]">Seus dados estão seguros</span>
    </div>
  )
}
