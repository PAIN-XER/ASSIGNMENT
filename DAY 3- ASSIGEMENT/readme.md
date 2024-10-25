# DAY 3- ASSIGNMENT 

## 1. How to give one example: React mapping? 


```javascript
import React from 'react';

function App() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
```

## 2.How to use the axios method in React js? (post request example) 


```javascript
import React, { useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://example.com/api/endpoint', data);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyComponent;
```



 ## 3. How to use the axios method in React js? (get request example) 

 ```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.example.com/data'); // Replace with your API endpoint
      setData(response.data);
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li> // Adjust based on your data structure
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;
```

```javascript
import React from 'react';
import DataFetchingComponent from './DataFetchingComponent';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <DataFetchingComponent />
    </div>
  );
};

export default App;
```

## 4.How to give one example useReducer in React js? 

```javascript
const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
};
```

```javascript
import React, { useReducer } from 'react';

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default Counter;
```

```javascript
import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <h1>My Counter App</h1>
      <Counter />
    </div>
  );
};

export default App;
```

## 5.How to create a toast notification in React js? 

```javascript
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const notify = () => {
    toast.success('This is a success message!');
    // You can use toast.error, toast.info, toast.warn, etc., for different types of toasts
  };

  return (
    <div>
      <h1>Toast Notification Example</h1>
      <button onClick={notify}>Show Toast</button>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
```

```javascript
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const notify = () => {
    toast.success('This is a success message!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Toast Notification Example</h1>
      <button onClick={notify}>Show Toast</button>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </div>
  );
};

export default App;
```



## 6.How to create rating component in React js? 

```javascript
import React, { useState } from 'react';
import './StarRating.css'; // Optional: for custom styles

const StarRating = ({ totalStars = 5, onRating }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index);
    onRating(index);
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? 'filled' : ''}`}
          onClick={() => handleClick(index + 1)}
        >
          ★
        </span>
      ))}
      <p>Your rating: {rating}</p>
    </div>
  );
};

export default StarRating;
```



```css
.star-rating {
  display: flex;
  align-items: center;
}

.star {
  font-size: 30px;
  cursor: pointer;
  color: lightgray;
}

.star.filled {
  color: gold;
}
```

```javascript
import React from 'react';
import StarRating from './StarRating';

const App = () => {
  const handleRating = (rating) => {
    console.log('User rating:', rating);
  };

  return (
    <div>
      <h1>Rate This Product</h1>
      <StarRating onRating={handleRating} />
    </div>
  );
};

export default App;
```

## 7.How to fetch api data using useEffect React hooks? 

```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetchingComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.example.com/data'); // Replace with your API endpoint
      setData(response.data);
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Data:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li> // Adjust based on your data structure
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;
```

```javascript
import React from 'react';
import DataFetchingComponent from './DataFetchingComponent';

const App = () => {
  return (
    <div>
      <h1>My Data Fetching App</h1>
      <DataFetchingComponent />
    </div>
  );
};

export default App;
```

## 8.How to create a counter app using React js? 

```javascript
// src/Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Initialize state

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
```

```javascript
// src/App.js
import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <div>
      <h1>Simple Counter App</h1>
      <Counter />
    </div>
  );
};

export default App;
```

```css
/* src/App.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

h1 {
  color: #333;
}

button {
  margin: 5px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
}
```