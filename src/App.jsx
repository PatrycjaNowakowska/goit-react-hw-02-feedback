import './App.css';
import FeedbackOptions from './component/FeedbackOptions/FeedbackOptions'
import Notification from './component/Notification/Notification'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <FeedbackOptions optionGood="1"/>
          <Notification message="to bedzie message" />
        </p>
      </header>
    </div>
  );
}

export default App;
