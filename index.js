if(__DEV__) {
    import('./lib/ReactotronConfig').then(() => console.log('Reactotron Configured'))
  }
import {AppRegistry} from 'react-native';
import App from './lib/App';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);
