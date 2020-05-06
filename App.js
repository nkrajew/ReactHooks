import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import LocationScreen from "./src/screens/LocationScreen";

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen,
  Location: LocationScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant Search'
  }
});

export default createAppContainer(navigator);
