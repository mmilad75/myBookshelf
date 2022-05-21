import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {authTestId} from '../../../e2e/testIds';
import {Button, View} from '../../components';
import globalStyles from '../../helpers/globalStyles';
import {MainStackParamsList} from '../../navigators';
import {signOutUser} from '../../state/user/actions';

export type profileScreenNavigationType = BottomTabNavigationProp<MainStackParamsList, 'home'>;

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<profileScreenNavigationType>();
  const handleSignOut = () => {
    dispatch(signOutUser(navigation));
  };

  return (
    <View style={globalStyles.centeredContainer}>
      <Button testID={authTestId.signOut.signOutButton} onPress={handleSignOut} text="Sign Out" />
    </View>
  );
};

export default Profile;
