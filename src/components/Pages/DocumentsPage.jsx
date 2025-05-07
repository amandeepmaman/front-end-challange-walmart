import React, { useContext } from 'react';
import { AppContext } from '../../context/index';

const DocumentsPage = () => {
  const { searchQuery } = useContext(AppContext);
  
  const documentTexts = [
    "Document 1: This is a sample document for testing purposes.",
    "Document 2: The quick brown fox jumps over the lazy dog.",
    "Document 3: React is a JavaScript library for building user interfaces.",
    "Document 4: Unit testing helps ensure your code works as expected.",
    "Document 5: The chatbot should be responsive on all devices.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
    "Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Sed euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
    "Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Sed euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
    "Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Sed euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
    "Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Sed euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
    "Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Sed euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
    "Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Sed euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
    "Donec euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl.",
    "Sed euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc eu nisl."
  ];

  const highlightText = (text, query) => {
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, i) => 
      regex.test(part) ? <mark key={i}>{part}</mark> : part
    );
  };

  const filteredText = documentTexts.filter(text => 
    searchQuery ? text.toLowerCase().includes(searchQuery.toLowerCase()) : true
  );

  return (
    <div className="page-content" data-testid="documents-page">
      <h2>Documents Page</h2>
      {filteredText.map((text, index) => (
        <p key={index}>{highlightText(text, searchQuery)}</p>
      ))}
    </div>
  );
};

export default DocumentsPage;