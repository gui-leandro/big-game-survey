import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from '../../components/Header';


const CreateRecord: React.FC = () => {
  return (
    <>
      <Header />
      <Text style={ styles.title }>CreateRecord</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#312e38',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default CreateRecord;
