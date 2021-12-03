// presentation component that shows a bold label next to plain text

import React from 'react';

const LabeledText = function ({ label, text }) {
  return (
    <p>
      <strong>{`${label}: `}</strong>
      {text}
    </p>
  );
};

export default LabeledText;
