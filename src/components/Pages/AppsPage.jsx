import React, { useContext } from 'react';
import { AppContext } from '../../context/index';

const AppsPage = () => {
  const { searchQuery } = useContext(AppContext);
  
  const loremText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. test purpose text",
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

  const filteredText = loremText.filter(text => 
    searchQuery ? text.toLowerCase().includes(searchQuery.toLowerCase()) : true
  );

  return (
    <div className="page-content" data-testid="apps-page">
      <h2>Apps Page</h2>
      {filteredText.map((text, index) => (
        <p key={index}>{highlightText(text, searchQuery)}</p>
      ))}
    </div>
  );
};

export default AppsPage;