import { useState } from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //#TODO Zrobienie wysylania widocznego czy cos
    console.log(formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormField>
        <label>Autor:</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <label>Tytuł:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </FormField>
      <FormField>
        <label>Treść:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </FormField>
      <SubmitButton type="submit">Wyślij</SubmitButton>
    </FormContainer>
  );
};

export default ContactForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;