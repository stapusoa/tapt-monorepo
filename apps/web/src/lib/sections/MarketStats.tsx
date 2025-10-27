

export function MarketStats() {
  const stats = [
    { number: "29", label: "Products Shipped" },
    { number: "24", label: "Design Systems Built" },
    { number: "2.85M", label: "Users Impacted" },
    { number: "6", label: "Years Experience" }
  ]

  return (
    <div className="relative shrink-0 w-full bg-white">
      <div className="flex flex-col items-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-start px-2.5 py-[60px] relative w-full">
          <div className="max-w-[1140px] relative shrink-0 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center animate-fade-in-up`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <h1 className="font-bold text-[48px] text-black mb-2">
                    {stat.number}
                  </h1>
                  <div className="font-primary text-default text-[16px] uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}