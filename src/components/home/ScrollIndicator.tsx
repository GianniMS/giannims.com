'use client';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ScrollIndicator() {
  return (
    <div
      className="
        absolute bottom-6 left-1/2 -translate-x-1/2
        flex flex-col items-center z-30
        pointer-events-none text-[48px]
      "
    >
      <span className="text-xl text-chi-purple font-proxima mb-1 pointer-events-none">
        GIANNI MENDONCA SEMEDO
      </span>
      <KeyboardArrowDownIcon
        fontSize="inherit"
        className="text-chi-purple animate-bounce pointer-events-none"
      />
    </div>
  );
}
