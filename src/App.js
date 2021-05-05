import Animal from './Animal'
import Human from './Human'
import Car from './Car'

function App() {
  return (
    <div>
     <h1>title 1</h1>
     <div>
       <h1>title 2</h1>
       <Animal animal="cat"/>
       <Animal animal="fuck"/>
       <Animal dog="dog"/>
       <Human name="diego" location="san diego" />
       <Car />
     </div>
    </div>
  );
}

export default App;
