import React, {useState} from 'react';

const TextBody = ({ cutoffLength = 120, initialBody }) => {
  const shortenedBody = initialBody.slice(0, cutoffLength);

  const [body, setBody] = useState(shortenedBody);
  const [buttonText, setButtonText] = useState('...Show More');

  const toggleLength = e => {
    e.preventDefault();
    e.stopPropagation();
    
    if (buttonText === '...Show More') {
      setButtonText('...Show Less');
      setBody(initialBody);
    } else {
      setButtonText('...Show More');
      setBody(shortenedBody);
    }
  }

  return (
    <div className="text-body">
      <p>
        {body}
        <button className="link" onClick={toggleLength}>
          {buttonText}
        </button>
      </p>
    </div>
  );
};

export default TextBody;