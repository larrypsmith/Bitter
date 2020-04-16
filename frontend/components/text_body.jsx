import React, {useState, useEffect} from 'react';
import Typography from './typography';

const TextBody = ({ cutoffLength = 120, initialBody }) => {
  const shortenedBody = initialBody.slice(0, cutoffLength);

  const [body, setBody] = useState(shortenedBody);
  const [buttonText, setButtonText] = useState('...Show More');

  useEffect(() => {
    if (initialBody.length <= cutoffLength) setButtonText("");
  }, [cutoffLength, initialBody.length]);
  
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
  };

  return (
    <div className="text-body">
      <div>
        <Typography color="lightGray">
          {body}
        </Typography>
        <button className="link" onClick={toggleLength}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default TextBody;