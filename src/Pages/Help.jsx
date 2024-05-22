import { SplitScreen } from '../components/SplitScreen';
import FAQList from '../components/FAQList';
import ContactForm from '../components/ContactForm';

const LeftSideComp = () => {
  return <FAQList />;
};

const RightSideComp = () => {
  return <ContactForm />;
};

const Help = () => {
  return (
    <div>
      <h1>Pomoc (Help)</h1>
      <SplitScreen left={LeftSideComp} right={RightSideComp} />
    </div>
  );
};

export default Help;
