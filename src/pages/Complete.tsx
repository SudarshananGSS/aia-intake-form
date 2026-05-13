import type { FormData } from '../App';

const ADVICE_LABEL: Record<string, string> = {
  myself: 'Myself',
  myself_partner: 'Myself + Partner',
  my_family: 'My Family',
};

interface Props {
  form: FormData;
}

export default function Complete({ form }: Props) {
  return (
    <div className="flex flex-col items-center py-20 px-8 text-center">
      {/* Success icon */}
      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <polyline points="8,20 17,29 32,12" stroke="#22c55e" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        Thanks, {form.firstName}!
      </h1>
      <p className="text-gray-600 text-base max-w-md mb-10">
        We've received your details and a Freedom Finance Australia adviser will be in touch shortly. Expect a call{form.preferredContact ? ` during the ${form.preferredContact.toLowerCase()}` : ''}.
      </p>

      {/* Summary card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 w-full max-w-md text-left shadow-sm">
        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-5">Your summary</h2>
        <dl className="space-y-4">
          {[
            ['Advice for', form.adviceFor ? ADVICE_LABEL[form.adviceFor] : null],
            ['Age range', form.ageRange],
            ['Dependents', form.dependents],
            ['Location', form.state],
            ['Household income', form.incomeRange],
            ['Home/Investment loan', form.hasLoan === null ? null : form.hasLoan ? 'Yes' : 'No'],
            ['Life events', form.lifeEvents.length ? form.lifeEvents.join(', ') : 'None selected'],
            ['Financial goals', form.financialGoals.length ? form.financialGoals.join(', ') : 'None selected'],
          ]
            .filter(([, v]) => !!v)
            .map(([label, value]) => (
              <div key={label as string} className="flex justify-between gap-4 text-sm">
                <dt className="text-gray-500 shrink-0">{label}</dt>
                <dd className="font-medium text-gray-900 text-right">{value}</dd>
              </div>
            ))}
        </dl>
      </div>

      <button
        onClick={() => window.location.reload()}
        className="mt-8 px-6 py-3 border-2 border-[#1C1C1C] text-[#1C1C1C] font-semibold rounded hover:bg-gray-100 transition-colors text-sm"
      >
        Start a new submission
      </button>
    </div>
  );
}
