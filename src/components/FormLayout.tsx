import type { ReactNode } from 'react';
import type { FormData } from '../App';

const ADVICE_LABEL: Record<string, string> = {
  myself: 'Myself',
  myself_partner: 'Myself + Partner',
  my_family: 'My Family',
};

function PersonSVG({ type }: { type: string | null }) {
  if (type === 'myself_partner') {
    return (
      <svg viewBox="0 0 180 210" width="170" height="200">
        {/* Person 1 - man (white top, blue pants) */}
        <ellipse cx="46" cy="205" rx="22" ry="5" fill="rgba(0,0,0,0.12)" />
        <rect x="33" y="125" width="13" height="75" rx="6" fill="#3A5A8A" />
        <rect x="50" y="125" width="13" height="75" rx="6" fill="#3A5A8A" />
        <rect x="27" y="68" width="46" height="60" rx="12" fill="#E8E8E8" />
        <rect x="10" y="72" width="18" height="42" rx="9" fill="#E8E8E8" />
        <rect x="68" y="72" width="18" height="42" rx="9" fill="#E8E8E8" />
        <rect x="42" y="56" width="12" height="16" rx="5" fill="#D4956A" />
        <circle cx="48" cy="40" r="20" fill="#D4956A" />
        <ellipse cx="48" cy="24" rx="18" ry="13" fill="#5C3010" />
        {/* Person 2 - woman (red top, teal pants) */}
        <ellipse cx="128" cy="205" rx="22" ry="5" fill="rgba(0,0,0,0.12)" />
        <rect x="115" y="125" width="13" height="75" rx="6" fill="#3D7A8A" />
        <rect x="132" y="125" width="13" height="75" rx="6" fill="#3D7A8A" />
        <rect x="109" y="68" width="46" height="60" rx="12" fill="#C41230" />
        <rect x="92" y="72" width="18" height="42" rx="9" fill="#C41230" />
        <rect x="150" y="72" width="18" height="42" rx="9" fill="#C41230" />
        <rect x="124" y="56" width="12" height="16" rx="5" fill="#E0A87A" />
        <circle cx="130" cy="40" r="20" fill="#E0A87A" />
        <ellipse cx="130" cy="24" rx="18" ry="13" fill="#2A1200" />
        <circle cx="130" cy="14" r="9" fill="#2A1200" />
      </svg>
    );
  }
  if (type === 'my_family') {
    return (
      <svg viewBox="0 0 180 210" width="170" height="200">
        {/* Adult - woman */}
        <ellipse cx="60" cy="205" rx="22" ry="5" fill="rgba(0,0,0,0.12)" />
        <rect x="47" y="125" width="13" height="75" rx="6" fill="#3D7A8A" />
        <rect x="64" y="125" width="13" height="75" rx="6" fill="#3D7A8A" />
        <rect x="41" y="68" width="46" height="60" rx="12" fill="#C41230" />
        <rect x="24" y="72" width="18" height="42" rx="9" fill="#C41230" />
        <rect x="82" y="72" width="18" height="42" rx="9" fill="#C41230" />
        <rect x="56" y="56" width="12" height="16" rx="5" fill="#E0A87A" />
        <circle cx="62" cy="40" r="20" fill="#E0A87A" />
        <ellipse cx="62" cy="25" rx="18" ry="13" fill="#2A1200" />
        <circle cx="62" cy="15" r="9" fill="#2A1200" />
        {/* Child */}
        <ellipse cx="138" cy="205" rx="16" ry="4" fill="rgba(0,0,0,0.10)" />
        <rect x="128" y="142" width="10" height="58" rx="5" fill="#5A7A9A" />
        <rect x="142" y="142" width="10" height="58" rx="5" fill="#5A7A9A" />
        <rect x="122" y="100" width="36" height="46" rx="9" fill="#E06030" />
        {/* Arms raised */}
        <rect x="105" y="88" width="18" height="12" rx="6" fill="#E06030" transform="rotate(-30 105 88)" />
        <rect x="157" y="88" width="18" height="12" rx="6" fill="#E06030" transform="rotate(30 175 88)" />
        <rect x="132" y="90" width="10" height="13" rx="4" fill="#D4956A" />
        <circle cx="137" cy="79" r="16" fill="#D4956A" />
        <ellipse cx="137" cy="67" rx="14" ry="10" fill="#3D1A00" />
      </svg>
    );
  }
  // Default: myself (woman)
  return (
    <svg viewBox="0 0 100 210" width="100" height="210">
      <ellipse cx="50" cy="205" rx="24" ry="6" fill="rgba(0,0,0,0.12)" />
      <rect x="32" y="125" width="14" height="75" rx="7" fill="#3D7A8A" />
      <rect x="54" y="125" width="14" height="75" rx="7" fill="#3D7A8A" />
      <rect x="24" y="66" width="52" height="63" rx="13" fill="#C41230" />
      <rect x="6" y="70" width="20" height="46" rx="10" fill="#C41230" />
      <rect x="74" y="70" width="20" height="46" rx="10" fill="#C41230" />
      <rect x="42" y="54" width="14" height="17" rx="5" fill="#E0A87A" />
      <circle cx="49" cy="37" r="22" fill="#E0A87A" />
      <ellipse cx="49" cy="22" rx="20" ry="14" fill="#2A1200" />
      <circle cx="49" cy="13" r="10" fill="#2A1200" />
    </svg>
  );
}

interface FormLayoutProps {
  form: FormData;
  children: ReactNode;
}

export default function FormLayout({ form, children }: FormLayoutProps) {
  const label = form.adviceFor ? ADVICE_LABEL[form.adviceFor] : 'Myself';

  return (
    <div className="flex" style={{ minHeight: 'calc(100vh - 130px)' }}>
      {/* Left panel */}
      <div className="w-[38%] relative overflow-hidden shrink-0">
        {/* Geometric background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              background: '#C41230',
              clipPath: 'polygon(0 0, 82% 0, 60% 100%, 0 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: '#F0B0C4',
              clipPath: 'polygon(40% 0, 100% 0, 100% 52%, 78% 100%, 44% 100%)',
              opacity: 0.78,
            }}
          />
        </div>

        {/* Profile card */}
        <div className="absolute top-8 left-6 bg-white rounded-xl shadow-lg p-5 w-44 z-10">
          <h3 className="font-bold text-base mb-3 text-gray-900">{label}</h3>
          <dl className="space-y-2">
            {[
              ['Age', form.ageRange],
              ['Dependents', form.dependents],
              ['Location', form.state],
              ['Income', form.incomeRange],
              ['Loans', form.hasLoan === null ? null : form.hasLoan ? 'Yes' : 'No'],
            ].map(([dt, dd]) => (
              <div key={dt as string}>
                <div className="text-[10px] text-gray-400 uppercase tracking-wide font-medium">{dt}</div>
                <div className="text-sm font-semibold text-gray-800 leading-snug">{dd || '–'}</div>
              </div>
            ))}
          </dl>
        </div>

        {/* Character illustration */}
        <div className="absolute bottom-0 right-4 z-10">
          <PersonSVG type={form.adviceFor} />
        </div>
      </div>

      {/* Right content */}
      <div className="flex-1 px-14 py-12 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
