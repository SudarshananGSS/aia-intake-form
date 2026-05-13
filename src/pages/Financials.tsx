import type { FormData } from '../App';
import { SelectButton, NavButtons, StepTitle, QuestionLabel } from '../components/shared';

const INCOME_RANGES = [
  '$0 to $18,200',
  '$18,201 to $45,000',
  '$45,001 to $120,000',
  '$120,001 to $180,000',
  '$180,001 and over',
  'Prefer not to say',
];

interface Props {
  form: FormData;
  onChange: (u: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Financials({ form, onChange, onNext, onBack }: Props) {
  const canContinue = !!form.incomeRange && form.hasLoan !== null;

  return (
    <div>
      <StepTitle>Your financials</StepTitle>

      <div className="mb-8">
        <QuestionLabel>What range best describes your household income?</QuestionLabel>
        <div className="grid grid-cols-3 gap-2">
          {INCOME_RANGES.map((r) => (
            <SelectButton
              key={r}
              selected={form.incomeRange === r}
              onClick={() => onChange({ incomeRange: r })}
              className="text-center"
            >
              {r}
            </SelectButton>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <QuestionLabel>Do you have a Home or Investment Loan?</QuestionLabel>
        <div className="flex gap-2">
          <SelectButton selected={form.hasLoan === true} onClick={() => onChange({ hasLoan: true })}>
            Yes
          </SelectButton>
          <SelectButton selected={form.hasLoan === false} onClick={() => onChange({ hasLoan: false })}>
            No
          </SelectButton>
        </div>
      </div>

      <NavButtons onBack={onBack} onNext={onNext} nextDisabled={!canContinue} />
    </div>
  );
}
