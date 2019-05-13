import {createStackNavigator, createAppContainer} from 'react-navigation';
import ProductListing from './app/pages/ProductList';
import productDescription from './app/pages/ProductDescription'
const MainNavigator = createStackNavigator({
ProductListing:{screen:ProductListing},
productDescription:{screen: productDescription}
},
{
headerMode: 'none',
stateName: 'MainStack',
initialRouteName: 'ProductListing',
initialRouteParams: { transition: 'fade' },
navigationOptions: {
headerVisible: false,


}
});
const App = createAppContainer(MainNavigator);

export default App;