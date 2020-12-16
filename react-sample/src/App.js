import React, { } from 'react';

//class App extends Component {
//  render() {
//    return (
//      <div>
//          <div>Hello World</div>
//      </div>
//    );
//  }
//}
const App = () => {
  return <div>
            <Cat/>
            <Cat/>
            <Cat/>
          </div>
}

const Cat = () => {
  return <div>nya!</div>
}

export default App;
