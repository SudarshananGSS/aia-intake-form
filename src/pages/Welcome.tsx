import React from 'react';
import type { AdviceFor } from '../App';

function WomanSVG() {
  return (
    <svg viewBox="0 0 100 220" width="100" height="220">
      <ellipse cx="50" cy="215" rx="26" ry="6" fill="rgba(0,0,0,0.10)" />
      <rect x="31" y="130" width="15" height="80" rx="7" fill="#3D7A8A" />
      <rect x="54" y="130" width="15" height="80" rx="7" fill="#3D7A8A" />
      <rect x="23" y="68" width="54" height="66" rx="14" fill="#B01025" />
      <rect x="4" y="73" width="21" height="48" rx="10" fill="#B01025" />
      <rect x="75" y="73" width="21" height="48" rx="10" fill="#B01025" />
      <rect x="42" y="55" width="15" height="18" rx="5" fill="#E0A87A" />
      <circle cx="50" cy="38" r="23" fill="#E0A87A" />
      <ellipse cx="50" cy="23" rx="21" ry="15" fill="#2A1200" />
      <circle cx="50" cy="13" r="11" fill="#2A1200" />
    </svg>
  );
}

function CoupleSVG() {
  return (
    <svg viewBox="0 0 190 220" width="190" height="220">
      {/* Man */}
      <ellipse cx="52" cy="215" rx="24" ry="5" fill="rgba(0,0,0,0.10)" />
      <rect x="39" y="130" width="14" height="80" rx="6" fill="#3A5A8A" />
      <rect x="57" y="130" width="14" height="80" rx="6" fill="#3A5A8A" />
      <rect x="32" y="68" width="50" height="66" rx="14" fill="#D8D8D8" />
      <rect x="13" y="73" width="20" height="48" rx="10" fill="#D8D8D8" />
      <rect x="77" y="73" width="20" height="48" rx="10" fill="#D8D8D8" />
      <rect x="46" y="55" width="14" height="18" rx="5" fill="#D4956A" />
      <circle cx="53" cy="38" r="22" fill="#D4956A" />
      <ellipse cx="53" cy="24" rx="20" ry="14" fill="#5C3010" />
      {/* Woman */}
      <ellipse cx="138" cy="215" rx="24" ry="5" fill="rgba(0,0,0,0.10)" />
      <rect x="125" y="130" width="14" height="80" rx="6" fill="#3D7A8A" />
      <rect x="143" y="130" width="14" height="80" rx="6" fill="#3D7A8A" />
      <rect x="118" y="68" width="50" height="66" rx="14" fill="#C41230" />
      <rect x="99" y="73" width="20" height="48" rx="10" fill="#C41230" />
      <rect x="163" y="73" width="20" height="48" rx="10" fill="#C41230" />
      <rect x="132" y="55" width="14" height="18" rx="5" fill="#E0A87A" />
      <circle cx="139" cy="38" r="22" fill="#E0A87A" />
      <ellipse cx="139" cy="24" rx="20" ry="14" fill="#2A1200" />
      <circle cx="139" cy="14" r="10" fill="#2A1200" />
    </svg>
  );
}

function FamilySVG() {
  return (
    <svg viewBox="0 0 190 220" width="190" height="220">
      {/* Adult woman */}
      <ellipse cx="62" cy="215" rx="24" ry="5" fill="rgba(0,0,0,0.10)" />
      <rect x="49" y="130" width="14" height="80" rx="6" fill="#3D7A8A" />
      <rect x="67" y="130" width="14" height="80" rx="6" fill="#3D7A8A" />
      <rect x="42" y="68" width="50" height="66" rx="14" fill="#C41230" />
      <rect x="23" y="73" width="20" height="48" rx="10" fill="#C41230" />
      <rect x="87" y="73" width="20" height="48" rx="10" fill="#C41230" />
      <rect x="56" y="55" width="14" height="18" rx="5" fill="#E0A87A" />
      <circle cx="63" cy="38" r="22" fill="#E0A87A" />
      <ellipse cx="63" cy="24" rx="20" ry="14" fill="#2A1200" />
      <circle cx="63" cy="14" r="10" fill="#2A1200" />
      {/* Child */}
      <ellipse cx="148" cy="215" rx="18" ry="4" fill="rgba(0,0,0,0.09)" />
      <rect x="139" y="148" width="11" height="62" rx="5" fill="#5A7AAA" />
      <rect x="154" y="148" width="11" height="62" rx="5" fill="#5A7AAA" />
      <rect x="132" y="105" width="40" height="47" rx="10" fill="#E06030" />
      {/* arms raised */}
      <rect x="112" y="96" width="22" height="12" rx="6" fill="#E06030" transform="rotate(-28 112 96)" />
      <rect x="170" y="96" width="22" height="12" rx="6" fill="#E06030" transform="rotate(28 192 96)" />
      <rect x="143" y="93" width="12" height="15" rx="4" fill="#D4956A" />
      <circle cx="149" cy="78" r="18" fill="#D4956A" />
      <ellipse cx="149" cy="65" rx="16" ry="11" fill="#3D1A00" />
    </svg>
  );
}

const OPTIONS: { key: AdviceFor; label: string; Svg: () => React.ReactElement }[] = [
  { key: 'myself', label: 'Myself', Svg: WomanSVG },
  { key: 'myself_partner', label: 'Myself + partner', Svg: CoupleSVG },
  { key: 'my_family', label: 'My family', Svg: FamilySVG },
];

interface WelcomeProps {
  onSelect: (af: AdviceFor) => void;
}

export default function Welcome({ onSelect }: WelcomeProps) {
  return (
    <div className="flex flex-col items-center py-12 px-8 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-5">Welcome to AIA Financial Wellbeing</h1>
      <button className="inline-flex items-center gap-2 text-sm text-gray-700 bg-gray-100 px-4 py-2 rounded-full mb-10 hover:bg-gray-200 transition-colors">
        <span className="w-5 h-5 bg-gray-700 text-white rounded-full inline-flex items-center justify-center text-xs font-bold">i</span>
        Who is AIA Financial Wellbeing?
      </button>
      <h2 className="text-xl font-semibold text-gray-900 mb-10">Who is this advice for?</h2>
      <div className="flex justify-center gap-10 flex-wrap">
        {OPTIONS.map(({ key, label, Svg }) => (
          <div key={key} className="flex flex-col items-center gap-5">
            <div className="flex items-end justify-center h-52">
              <Svg />
            </div>
            <button
              onClick={() => onSelect(key)}
              className="px-8 py-3 bg-[#C41230] text-white font-semibold rounded-lg hover:bg-[#9E0D24] transition-colors min-w-[160px] text-sm"
            >
              {label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
