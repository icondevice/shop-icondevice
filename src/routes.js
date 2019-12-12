import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//import Welcome from './screens/welcome';
import ProductGrid from './screens/ProductGrid';
import LoginForm from './screens/loginForm';
import LoadingScreen from './screens/loading';

const LoginStack = createSwitchNavigator({ LoginForm });
const MainStack = createStackNavigator({ ProductGrid });

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      LoadingScreen,
      LoginStack,
      MainStack,
    },
    {
      initialRouteName: 'LoadingScreen',
    }
  )
);

export default Routes;
