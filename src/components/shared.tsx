import type { ReactNode } from 'react';

interface SelectButtonProps {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

export function SelectButton({ selected, onClick, children, className = '' }: SelectButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-5 py-3 rounded border-2 text-sm font-medium transition-all cursor-pointer ${
        selected
          ? 'border-gray-900 bg-gray-900 text-white shadow-sm'
          : 'border-gray-300 bg-white text-gray-800 hover:border-gray-500 hover:shadow-sm'
      } ${className}`}
    >
      {children}
    </button>
  );
}

interface NavButtonsProps {
  onBack: () => void;
  onNext: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
  loading?: boolean;
}

export function NavButtons({ onBack, onNext, nextLabel = 'Save & continue', nextDisabled = false, loading = false }: NavButtonsProps) {
  return (
    <div className="flex items-center gap-4 mt-10">
      <button
        type="button"
        onClick={onBack}
        className="px-7 py-3 border-2 border-[#C41230] text-[#C41230] font-semibold rounded hover:bg-red-50 transition-colors"
      >
        Back
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled || loading}
        className="px-7 py-3 bg-[#C41230] text-white font-semibold rounded hover:bg-[#9E0D24] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
      >
        {loading ? 'Submitting…' : `${nextLabel} →`}
      </button>
    </div>
  );
}

export function StepTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-3xl font-bold text-gray-900 mb-8">{children}</h2>;
}

export function QuestionLabel({ children, required = true }: { children: ReactNode; required?: boolean }) {
  return (
    <p className="text-sm font-semibold text-gray-800 mb-3">
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </p>
  );
}

interface CheckItemProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function CheckItem({ label, checked, onChange }: CheckItemProps) {
  return (
    <label className="flex items-center gap-3 py-2 cursor-pointer group">
      <span
        className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
          checked ? 'bg-[#C41230] border-[#C41230]' : 'border-gray-300 group-hover:border-gray-500'
        }`}
        onClick={() => onChange(!checked)}
      >
        {checked && (
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
            <polyline points="1,4 5,8 11,1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className="text-sm text-gray-800 select-none" onClick={() => onChange(!checked)}>
        {label}
      </span>
    </label>
  );
}
