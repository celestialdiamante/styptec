"use client"
import React from 'react';

const CopyInterceptor = () => {
  React.useEffect(() => {
    const handleCopy = (event: ClipboardEvent) => {
      // Prevent the default copy action
      event.preventDefault();

      // Set custom content to clipboard
      const slapEmoji = '👋';
      if (event.clipboardData) {
        event.clipboardData.setData('text/plain', slapEmoji);
      }

      alert('Copying is disabled! Here’s a slap instead: 👋');
    };

    // Attach the copy event listener
    document.addEventListener('copy', handleCopy);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('copy', handleCopy);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default CopyInterceptor;
