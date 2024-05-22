import FAQItem from './FAQItem';
import styled from 'styled-components';

const FAQList = () => {
  const faqData = [
    { question: 'Pytanie 1', answer: 'Odpowiedź na pytanie 1' },
    { question: 'Pytanie 2', answer: 'Odpowiedź na pytanie 2' },
    { question: 'Pytanie 3', answer: 'Odpowiedź na pytanie 3' },
  ];

  return (
    <FAQContainer>
      {faqData.map((item, index) => (
        <FAQItem key={index} {...item} />
      ))}
    </FAQContainer>
  );
};

export default FAQList;

const FAQContainer = styled.div`
  padding: 1rem;
`;
