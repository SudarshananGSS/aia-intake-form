import type { FormData } from '../App';
import { NavButtons, StepTitle } from '../components/shared';

const CONTACT_TIMES = ['Morning (8am–12pm)', 'Afternoon (12pm–5pm)', 'Evening (5pm–8pm)'];

interface Props {
  form: FormData;
  onChange: (u: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
  submitting: boolean;
  error: string | null;
}

function Field({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="mb-5">
      <label className="block text-sm font-semibold text-gray-800 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full max-w-sm border-2 border-gray-300 rounded px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#C41230] transition-colors"
      />
    </div>
  );
}

export default function Contact({ form, onChange, onNext, onBack, submitting, error }: Props) {
  const canSubmit =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.consent;

  return (
    <div>
      <StepTitle>Your contact details</StepTitle>
      <p className="text-sm text-gray-500 -mt-6 mb-8">
        So we can match you with the right adviser and get in touch.
      </p>

      <div className="grid grid-cols-2 gap-x-4 max-w-sm">
        <Field
          label="First name"
          value={form.firstName}
          onChange={(v) => onChange({ firstName: v })}
          placeholder="Jane"
          required
        />
        <Field
          label="Last name"
          value={form.lastName}
          onChange={(v) => onChange({ lastName: v })}
          placeholder="Smith"
          required
        />
      </div>

      <Field
        label="Email address"
        type="email"
        value={form.email}
        onChange={(v) => onChange({ email: v })}
        placeholder="jane@example.com"
        required
      />

      <Field
        label="Phone number"
        type="tel"
        value={form.phone}
        onChange={(v) => onChange({ phone: v })}
        placeholder="04xx xxx xxx"
      />

      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-800 mb-2">Preferred time to be contacted</p>
        <div className="flex flex-wrap gap-2">
          {CONTACT_TIMES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => onChange({ preferredContact: t })}
              className={`px-4 py-2.5 rounded border-2 text-sm font-medium transition-all ${
                form.preferredContact === t
                  ? 'border-gray-900 bg-gray-900 text-white'
                  : 'border-gray-300 bg-white text-gray-800 hover:border-gray-500'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <label className="flex items-start gap-3 cursor-pointer mb-6 max-w-lg">
        <span
          className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
            form.consent ? 'bg-[#C41230] border-[#C41230]' : 'border-gray-300 hover:border-gray-500'
          }`}
          onClick={() => onChange({ consent: !form.consent })}
        >
          {form.consent && (
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
              <polyline points="1,4 5,8 11,1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <span className="text-xs text-gray-600 leading-relaxed select-none" onClick={() => onChange({ consent: !form.consent })}>
          I consent to Freedom Finance collecting and using my personal information to contact me about financial wellbeing services, in accordance with the{' '}
          <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
          <span className="text-red-500 ml-1">*</span>
        </span>
      </label>

      {error && (
        <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded text-sm text-red-700">
          {error}
        </div>
      )}

      <NavButtons
        onBack={onBack}
        onNext={onNext}
        nextLabel="Submit"
        nextDisabled={!canSubmit}
        loading={submitting}
      />
    </div>
  );
}
