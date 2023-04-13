/* eslint-disable tailwindcss/no-custom-classname */
export function CreditCard() {
  return (
    <div className="group h-[168px] w-[280px] [perspective:60rem]">
      <div className="bg-card-front absolute left-0 top-0 z-50 flex h-full w-full flex-col justify-end gap-4 bg-no-repeat p-6 transition-all duration-500 [backface-visibility:hidden] [transform:rotateY(0)] [transformstyle:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="flex w-full items-center justify-between tracking-[.25em] text-[#F9FAFB]">
          <span>****</span>
          <span>****</span>
          <span>****</span>
          <span>****</span>
        </div>

        <div className="flex items-center justify-between text-[#F9FAFB]">
          <span>Seu nome aqui</span>
          <span className="tracking-[.25em]">**/**</span>
        </div>
      </div>

      <div className="bg-card-back absolute left-0 top-0 z-50 flex h-full w-full items-end bg-no-repeat px-6 pb-11 transition-all duration-500 [backface-visibility:hidden] [transformstyle:preserve-3d] [transform:rotateY(-180deg)] group-hover:[transform:rotateY(0)]">
        <div className="flex w-full items-center gap-2">
          <div className="flex h-8 w-full items-center justify-end rounded bg-[#D1D5DB] p-3">
            <span className="text-[#717781]">***</span>
          </div>
          <span className="grow text-sm text-[#E5E7EB]">CVV</span>
        </div>
      </div>
    </div>
  )
}
