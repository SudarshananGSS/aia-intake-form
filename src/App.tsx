import { useState } from 'react';
import Header from './components/Header';
import FormLayout from './components/FormLayout';
import Welcome from './pages/Welcome';
import Basics from './pages/Basics';
import Financials from './pages/Financials';
import LifeEvents from './pages/LifeEvents';
import Goals from './pages/Goals';
import Contact from './pages/Contact';
import Complete from './pages/Complete';

export type AdviceFor = 'myself' | 'myself_partner' | 'my_family';

export interface FormData {
  adviceFor: AdviceFor | null;
  ageRange: string | null;
  dependents: string | null;
  state: string | null;
  incomeRange: string | null;
  hasLoan: boolean | null;
  lifeEvents: string[];
  financialGoals: string[];
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: string;
  consent: boolean;
}

const initialForm: FormData = {
  adviceFor: null,
  ageRange: null,
  dependents: null,
  state: null,
  incomeRange: null,
  hasLoan: null,
  lifeEvents: [],
  financialGoals: [],
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  preferredContact: '',
  consent: false,
};

export default function App() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const update = (updates: Partial<FormData>) =>
    setForm((prev) => ({ ...prev, ...updates }));

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError(null);
    try {
      const { supabase } = await import('./lib/supabase');
      const { error } = await supabase.from('client_leads').insert({
        advice_for: form.adviceFor,
        age_range: form.ageRange,
        dependents: form.dependents,
        state: form.state,
        income_range: form.incomeRange,
        has_loan: form.hasLoan,
        life_events: form.lifeEvents,
        financial_goals: form.financialGoals,
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        phone: form.phone,
        preferred_contact: form.preferredContact,
        consent: form.consent,
      });
      if (error) throw error;
      setStep(6);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'An error occurred. Please try again.';
      setSubmitError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  if (step === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header currentStep={0} />
        <Welcome onSelect={(af) => { update({ adviceFor: af }); setStep(1); }} />
      </div>
    );
  }

  if (step === 6) {
    return (
      <div className="min-h-screen bg-white">
        <Header currentStep={5} />
        <Complete form={form} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentStep={step} />
      <FormLayout form={form}>
        {step === 1 && (
          <Basics form={form} onChange={update} onNext={() => setStep(2)} onBack={() => setStep(0)} />
        )}
        {step === 2 && (
          <Financials form={form} onChange={update} onNext={() => setStep(3)} onBack={() => setStep(1)} />
        )}
        {step === 3 && (
          <LifeEvents form={form} onChange={update} onNext={() => setStep(4)} onBack={() => setStep(2)} />
        )}
        {step === 4 && (
          <Goals form={form} onChange={update} onNext={() => setStep(5)} onBack={() => setStep(3)} />
        )}
        {step === 5 && (
          <Contact
            form={form}
            onChange={update}
            onNext={handleSubmit}
            onBack={() => setStep(4)}
            submitting={submitting}
            error={submitError}
          />
        )}
      </FormLayout>
    </div>
  );
}
