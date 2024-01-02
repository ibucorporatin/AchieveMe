import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../../screens/on_boarding/OnBoarding';
import Home from '../../screens/Home';
import {useSelector} from 'react-redux';
import {getFirstLaunch} from '../../store/slices';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  const FirstLaunch = useSelector(getFirstLaunch);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {FirstLaunch ? (
        <Stack.Screen name="onboarding" component={OnBoarding} />
      ) : null}
      <Stack.Screen name="main_index" component={Home} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
