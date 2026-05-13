import type { FormData } from '../App';
import { NavButtons, StepTitle, QuestionLabel, CheckItem } from '../components/shared';

const EVENTS = [
  'Having/ or planning to have a baby',
  'Death or serious illness in the family',
  'Buying a home/investment property',
  'Getting divorced',
  'New job',
  'Received an inheritance',
  'Starting a business',
  'Retiring',
];

interface Props {
  form: FormData;
  onChange: (u: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function LifeEvents({ form, onChange, onNext, onBack }: Props) {
  const toggle = (event: string) => {
    const current = form.lifeEvents;
    const updated = current.includes(event)
      ? current.filter((e) => e !== event)
      : [...current, event];
    onChange({ lifeEvents: updated });
  };

  return (
    <div>
      <StepTitle>Life events</StepTitle>

      <QuestionLabel>Have any of the following events happened in your life recently?</QuestionLabel>

      <div className="mb-4">
        {EVENTS.map((event) => (
          <CheckItem
            key={event}
            label={event}
            checked={form.lifeEvents.includes(event)}
            onChange={() => toggle(event)}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        className="text-sm text-gray-700 hover:text-gray-900 underline-offset-2 hover:underline mb-2"
      >
        No, and continue →
      </button>

      <NavButtons onBack={onBack} onNext={onNext} />
    </div>
  );
}
