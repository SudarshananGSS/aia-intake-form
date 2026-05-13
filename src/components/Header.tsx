interface HeaderProps {
  currentStep: number;
}

const STEPS = ['Basics', 'Your financials', 'Life events', 'Financial goals', 'Complete'];

export default function Header({ currentStep }: HeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Logo bar */}
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          <svg width="52" height="48" viewBox="0 0 52 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="24" r="20" stroke="#C41230" strokeWidth="2.5" fill="none" />
            <polyline
              points="6,34 14,18 20,26 26,16 32,22 38,34"
              stroke="#C41230"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="leading-tight">
            <div className="text-xl font-black text-[#C41230] tracking-tight">AIA</div>
            <div className="text-xs font-semibold text-[#C41230] tracking-wide uppercase">Financial Wellbeing</div>
          </div>
        </div>
        <a href="#" className="flex items-center gap-1.5 text-blue-600 text-sm hover:underline">
          <span className="w-5 h-5 rounded-full border-2 border-blue-600 inline-flex items-center justify-center text-xs font-bold">?</span>
          Need help?
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
                          ? 'bg-[#1B2A4A] text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {done ? '✓' : n}
                    </div>
                    <span
                      className={`mt-1 text-xs font-medium text-center ${
                        active ? 'text-[#1B2A4A]' : done ? 'text-green-600' : 'text-gray-400'
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
