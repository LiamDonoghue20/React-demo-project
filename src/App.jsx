import { useState } from 'react'
import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js'

function App() {
  //use state is used to reload the component its added to, for the purpose of dynamic data
  //set the initial state in the useState brackets
  //useState returns 2 states:
  //The current state. During the first render, it will match the initialState you have passed.
  //The set function that lets you update the state to a different value and trigger a re-render.
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelect(selectedButton) {
    //updating the new useState here when the button is clicked with setSelectedTopic
    setSelectedTopic(selectedButton)
    //the current state is output in the HTML below
  }
  let tabContent = <p>Please select a topic</p>

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
            isSelected={selectedTopic ==='components'} onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton 
            isSelected={selectedTopic ==='jsx'} onSelect={() => handleSelect('jsx')}>
              JSX
            </TabButton>
            <TabButton 
            isSelected={selectedTopic ==='props'} onSelect={() => handleSelect('props')}>
              Props
            </TabButton>
            <TabButton 
            isSelected={selectedTopic ==='state'} onSelect={() => handleSelect('state')}>
              State
            </TabButton>

          </menu>
         { tabContent }
        </section>
      </main>
    </div>
  );
}

export default App;
