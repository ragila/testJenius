import React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {Contact} from '../../../../config/DTOs/contactType';

type Props = {
  onPressContact: any;
  contacts: Contact[];
};

function ListContactCard({onPressContact, contacts}: Props) {
  const renderContactItem = ({item}: any) => (
    <TouchableOpacity
      //@ts-ignore
      style={styles.contactItem}
      testID={`contactItem-${item.id}`}
      onPress={() => onPressContact(item)}>
      {item.photo === 'N/A' ? (
        <Image
          testID={`contactPhoto-${item.id}`}
          resizeMode="cover"
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          }}
          style={styles.contactPhoto}
        />
      ) : (
        <Image
          testID={`contactPhoto-${item.id}`}
          resizeMode="cover"
          source={{
            uri: 'https://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550',
          }}
          style={styles.contactPhoto}
        />
      )}
      <View>
        <Text
          //@ts-ignore
          style={styles.contactName}>
          {item.firstName}
        </Text>
        <Text style={styles.contactPhone}>Age: {item.age}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={renderContactItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 12,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 14,
    marginTop: 4,
  },
  contactPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
};

export default ListContactCard;
