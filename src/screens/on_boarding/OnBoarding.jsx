import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {useDispatch} from 'react-redux';
import { setNotFirstLaunch } from '../../store/slices';

const Done = ({...props}) => (
  <TouchableOpacity className="px-5" {...props}>
    <Text className="text-14 font-c-medium text-black">Done</Text>
  </TouchableOpacity>
);
const Next = ({...props}) => (
  <TouchableOpacity className="px-5" {...props}>
    <Text className="text-14 font-c-medium text-black">Next</Text>
  </TouchableOpacity>
);
const Skip = ({...props}) => (
  <TouchableOpacity className="px-5" {...props}>
    <Text className="text-14 font-c-medium text-black">Skip</Text>
  </TouchableOpacity>
);

export default function OnBoarding() {
  const dispatch = useDispatch();
  const navigate_to_home = () => {
    dispatch(setNotFirstLaunch());
  };
  return (
    <Onboarding
      onSkip={navigate_to_home}
      onDone={navigate_to_home}
      DoneButtonComponent={Done}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      pages={[
        {
          backgroundColor: '#C5FFF8',
          image: (
            <Image
              style={styles.iconStyle}
              source={require('../../../assets/images/onboarding/sunrise.png')}
            />
          ),
          title: 'Welcome to Daily Counter',
          subtitle: 'Track your progress one day at a time.',
        },
        {
          backgroundColor: '#DBCC95',
          image: (
            <Image
              style={styles.iconStyle}
              source={require('../../../assets/images/onboarding/watering-plants.png')}
            />
          ),
          title: 'Start Counting',
          subtitle: 'Log your achievements and see your progress grow.',
        },
        {
          backgroundColor: '#DED0B6',
          image: (
            <Image
              style={styles.iconStyle}
              source={require('../../../assets/images/onboarding/consistency.png')}
            />
          ),
          title: 'Stay Consistent',
          subtitle: 'Make counting a daily habit for better results.',
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 150,
    height: 150,
  },
});
