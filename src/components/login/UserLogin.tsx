import {useNavigation} from '@react-navigation/native';
import {Colors} from '@src/utils/colors';
import {Constants, NavScreens} from '@src/utils/constants';
import {DeviceHeight} from '@src/utils/device';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from '../app/Button';
import {Text} from '../app/Text';
import {View} from '../app/View';

export const UserLogin = () => {
  const navigation = useNavigation();

  const navigateToLogin = async () => {
    navigation.navigate(NavScreens.LOGIN_MODAL);
  };
  return (
    <View style={styles.container}>
      <Text title={Constants.SIGN_IN_WITH_REDDIT} />
      <Button
        style={styles.buttonStyle}
        title={Constants.SIGN_IN_BUTTON}
        onPress={navigateToLogin}
        tSize={16}
        tColor={Colors.white}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: Colors.orange,
    margin: 20,
    borderRadius: 98,
    paddingVertical: 10,
    paddingHorizontal: 26,
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
