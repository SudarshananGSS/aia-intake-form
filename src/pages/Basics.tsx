import type { FormData } from '../App';
import { SelectButton, NavButtons, StepTitle, QuestionLabel } from '../components/shared';

const AGE_RANGES = ['18–30', '31–45', '46–55', '56–65', '65+'];
const DEPENDENTS = ['0', '1', '2', '3+', 'Prefer not to say'];
const STATES = ['ACT', 'NSW', 'QLD', 'SA', 'NT', 'VIC', 'WA', 'TAS'];

interface Props {
  form: FormData;
  onChange: (u: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Basics({ form, onChange, onNext, onBack }: Props) {
  const canContinue = !!form.ageRange && !!form.dependents && !!form.state;

  return (
    <div>
      <StepTitle>First, some basics</StepTitle>

      <div className="mb-7">
        <QuestionLabel>Age range that best describes you?</QuestionLabel>
        <div className="flex flex-wrap gap-2">
          {AGE_RANGES.map((r) => (
            <SelectButton key={r} selected={form.ageRange === r} onClick={() => onChange({ ageRange: r })}>
              {r}
            </SelectButton>
          ))}
        </div>
      </div>

      <div className="mb-7">
        <QuestionLabel>How many children and/or financial dependents do you have?</QuestionLabel>
        <div className="flex flex-wrap gap-2">
          {DEPENDENTS.map((d) => (
            <SelectButton key={d} selected={form.dependents === d} onClick={() => onChange({ dependents: d })}>
              {d}
            </SelectButton>
          ))}
        </div>
      </div>

      <div className="mb-7">
        <QuestionLabel>Where are you located?</QuestionLabel>
        <div className="flex flex-wrap gap-2">
          {STATES.map((s) => (
            <SelectButton key={s} selected={form.state === s} onClick={() => onChange({ state: s })}>
              {s}
            </SelectButton>
          ))}
        </div>
      </div>

      <NavButtons onBack={onBack} onNext={onNext} nextDisabled={!canContinue} />
    </div>
  );
}
