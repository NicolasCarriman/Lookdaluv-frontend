import React from 'react';
import {Provider} from 'react-redux';
import Routes from './routes/Routes';
import {store} from './store/store';


export const PlatformApp = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}

export default function App() {
  const [jsonData, setJsonData] = React.useState({});

  React.useEffect(() => {
    const fetchJSON = async () => {
      const response = await fetch("/manifest.json");
      let json = await response.json();
      setJsonData(json);
    };

    fetchJSON();
  }, []);

  return (
    <div>
      <p>
        This json is fetched from <b>manifest.json</b>
      </p>
      <p>Location of manifest.json - public/manifest.json</p>
      <pre>{JSON.stringify(jsonData, null, "    ")}</pre>
    </div>
  );
}
