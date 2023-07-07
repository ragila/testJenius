import React, {useEffect, useMemo} from 'react';
import {Text, SafeAreaView, View, ActivityIndicator, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../redux/stores/hooks';
import {getContactListAction} from '../../redux/actions/contactActions';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
// import {Contact} from '../../config/DTOs/contactType';

//Styles
import createStyles from './styles';
import {Theme} from '../../config/theme/themeProvider';
import CustomButton from '../../components/CustomButton';
import ListContactCard from './components/ListContactCard';

export type IindexProps = {
  navigation: NavigationProp<ParamListBase>;
};

const ContactList: React.FC<IindexProps> = ({}: IindexProps) => {
  const styles = useMemo(() => createStyles(), []);
  const dispatch = useDispatch();
  const {contact, loading, error} = useAppSelector(state => state.patient);

  useEffect(() => {
    //@ts-ignore
    dispatch(getContactListAction());
  }, [dispatch]);

  const chooseContact = () => {
    Alert.alert('Alert', 'Coming Soon');
  };
  const onPress = () => {
    //@ts-ignore
    dispatch(getContactListAction());
  };
  if (error) {
    return (
      <View style={styles.containerDescription}>
        <Text style={styles.description} testID="patient-title">
          An error occurred trying to get the information
        </Text>
        <CustomButton
          icon={'plus'}
          label="try again"
          onPress={onPress}
          disabled={loading}
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <View style={styles.indicator}>
          <ActivityIndicator size="large" color={Theme.colors.notification} />
        </View>
      )}
      {contact.length ? (
        <ListContactCard onPressContact={chooseContact} contacts={contact} />
      ) : (
        <View style={styles.containerDescription}>
          <Text style={styles.description} testID="patient-title">
            There is no Contact
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export {ContactList};
