interface HeaderProps {
  currentStep: number;
}

const STEPS = ['Basics', 'Your financials', 'Life events', 'Financial goals', 'Complete'];

export default function Header({ currentStep }: HeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Logo bar */}
      <div className="flex items-center justify-between px-8 py-4">
        <a href="https://ffau.com.au/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="leading-tight">
            <div className="text-2xl font-black text-[#1C1C1C] tracking-tight uppercase" style={{ letterSpacing: '-0.02em' }}>
              Freedom Finance
            </div>
            <div className="text-[10px] font-semibold text-[#1C1C1C] tracking-[0.25em] uppercase mt-0.5">
              Australia
            </div>
          </div>
        </a>
        <a
          href="tel:1800662891"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 1h3l1.5 3.5-1.75 1.25C6.5 7.5 8.5 9.5 10.25 10.25L11.5 8.5 15 10v3c0 1.1-.9 2-2 2C6.16 15 1 9.84 1 3c0-1.1.9-2 2-2z" stroke="#6B7280" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          1800 662 891
        </a>
      </div>

      {/* Step progress */}
      {currentStep > 0 && (
        <div className="px-8 pb-5">
          <div className="flex items-start max-w-3xl">
            {STEPS.map((label, i) => {
              const n = i + 1;
              const done = n < currentStep;
              const active = n === currentStep;
              return (
                <div key={n} className="flex items-center flex-1">
                  <div className="flex flex-col items-center min-w-0">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                        done
                          ? 'bg-green-500 text-white'
                          : active
                          ? 'bg-[#1C1C1C] text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {done ? '✓' : n}
                    </div>
                    <span
                      className={`mt-1 text-xs font-medium text-center ${
                        active ? 'text-[#1C1C1C]' : done ? 'text-green-600' : 'text-gray-400'
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-2 mt-[-10px] ${done ? 'bg-green-500' : 'bg-gray-200'}`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
