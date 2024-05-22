/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ItemContainer>
      <Question onClick={toggleOpen}>
        {question}
      </Question>
      {isOpen && <Answer>{answer}</Answer>}
    </ItemContainer>
  );
};

export default FAQItem;

const ItemContainer = styled.div`
  margin-bottom: 1rem;
`;

const Question = styled.div`
  cursor: pointer;
  font-weight: bold;
  padding: 0.5rem;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Answer = styled.div`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-top: none;
  border-radius: 0 0 4px 4px;
`;
