import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import CoursesContextProvider from './data/CoursesContextProvider';

ReactDOM.render(<CoursesContextProvider><App /></CoursesContextProvider>, document.getElementById('root'));

