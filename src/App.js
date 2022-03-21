import './App.css';
import { CardContent } from './components/card-content';

function App() {
  return (
    <div className="App">
      <CardContent 
        tagContent="Tag" 
        headingContent="Heading" 
        paragraphContent="Paragraph" 
      />
    </div>
  );
}

export default App;
