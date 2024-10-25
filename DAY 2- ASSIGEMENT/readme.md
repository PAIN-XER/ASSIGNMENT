# ASSIGNMENT  DAY 2

## 1.	How to create date range pickers using react JS?  

```javascript
import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";

export default function App() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div>
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
      />
    </div>
  );
}

```

## 2.	How to create a line chart/bar chat in React JS? 


``` javascript 
// src/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;

```


``` javascript 
// src/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;


```

## 3.	How to create a progress bar in React JS? 

``` javascript

import React from "react";
import ProgressBar from "react-progress-bar";

function App() {
  return (
    <div>
      <ProgressBar percentage={50} />
    </div>
  );
}

export default App;
``` 

## 4.	How to redirect in React JS? 

```javascript
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/new-route');
  };

  return (
    <div>
      <button onClick={handleRedirect}>Go to New Route</button>
    </div>
  );
};

export default MyComponent;
```
```javascript
import { Navigate } from 'react-router-dom';

const MyComponent = () => {
  const shouldRedirect = true; // Your condition here

  if (shouldRedirect) {
    return <Navigate to="/new-route" />;
  }

  return <div>Current Page Content</div>;
};

export default MyComponent;
```

## 5. How to pass string-query-parameter value in react JS?

```javascript
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/query?myParam=HelloWorld">Go to Query Page</Link>
    </div>
  );
};

export default Home;
```

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import QueryPage from './QueryPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/query" component={QueryPage} />
      </Switch>
    </Router>
  );
};

export default App;
```

```javascript
import React from 'react';
import { useLocation } from 'react-router-dom';

const QueryPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const myParam = query.get('myParam'); // Get the value of 'myParam'

  return (
    <div>
      <h1>Query Page</h1>
      <p>Value of myParam: {myParam}</p>
    </div>
  );
};

export default QueryPage;
```
## 6. How to pass multiple states using React-redux?

```javascript
const reducer1 = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_STATE1':
      return action.payload;
    default:
      return state;
  }
};

const reducer2 = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_STATE2':
      return action.payload;
    default:
      return state;
  }
};

const reducer3 = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_STATE3':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  state1: reducer1,
  state2: reducer2,
  state3: reducer3
});
```

```javascript
import React from 'react';
import { connect } from 'react-redux';

const MyComponent = ({ state1, state2, state3 }) => {
  // Use the states here
};

const mapStateToProps = (state) => {
  return {
    state1: state.state1,
    state2: state.state2,
    state3: state.state3
  };
};

export default connect(mapStateToProps)(MyComponent);
```


## 7. Please give examples of React props ?

```javascript
function Container(props) {
  return <div>{props.children}</div>;
}

const App = () => {
  return (
    <Container>
      <h1>Hello World!</h1>
      <p>This is a paragraph.</p>
    </Container>
  );
};
```