import { SplitScreen } from '../components/SplitScreen';

const LeftSideComp = ()=>{
	return <h1>FAQ</h1>;
}
const RightSideComp = ()=>{


	return <h1>FORM</h1>;
}	

const Help = () => {
    return (
      <div>
        <h1>Pomoc (Help)</h1>
        <SplitScreen left={LeftSideComp} right={RightSideComp} />
      </div>
    );
  };
  
  export default Help;
