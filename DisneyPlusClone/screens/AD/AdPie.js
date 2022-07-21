import React from 'react';
import {StyleSheet} from 'react-native';
import APBanner from '../../components/APBanner';

function AdPie() {
  return <APBanner style={styles.block} />;
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default AdPie;
