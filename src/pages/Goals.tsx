import type { FormData } from '../App';
import { NavButtons, StepTitle, CheckItem } from '../components/shared';

const GOAL_SECTIONS = [
  {
    heading: 'Protect your income, lifestyle, and family with the right insurance',
    goals: ['Life Insurances & Income Protection', 'Business Insurance', 'Health Insurance'],
  },
  {
    heading: 'Find the right strategy for your super and retirement',
    goals: ['Boost your super', 'Retirement advice'],
  },
  {
    heading: 'Build your wealth through investing',
    goals: ['Grow your investments for 2+ years', 'Budgeting and Cashflow', 'Other'],
  },
];

interface Props {
  form: FormData;
  onChange: (u: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function Goals({ form, onChange, onNext, onBack }: Props) {
  const toggle = (goal: string) => {
    const current = form.financialGoals;
    const updated = current.includes(goal)
      ? current.filter((g) => g !== goal)
      : [...current, goal];
    onChange({ financialGoals: updated });
  };

  return (
    <div>
      <StepTitle>Tell us about your financial goals</StepTitle>
      <p className="text-sm text-gray-500 -mt-6 mb-8">so that we can best help meet your needs.</p>

      {GOAL_SECTIONS.map(({ heading, goals }) => (
        <div key={heading} className="mb-7">
          <p className="text-sm font-bold text-gray-800 mb-2">{heading}</p>
          {goals.map((goal) => (
            <CheckItem
              key={goal}
              label={goal}
              checked={form.financialGoals.includes(goal)}
              onChange={() => toggle(goal)}
            />
          ))}
        </div>
      ))}

      <NavButtons onBack={onBack} onNext={onNext} />
    </div>
  );
}
