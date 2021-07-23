import React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import { RoundedButton } from '../../Components/RoundedButton';

export const Timing = ({onChangeTime}) => {
  return(
    <>
    <View style={styles.timingbtn}>
      <Button size={75} title="10" onPress = {()=>onChangeTime(10)} />
    </View>

    <View style={styles.timingbtn}>
      <Button size={75} title="15" onPress = {()=>onChangeTime(15)} />
    </View>

    <View style={styles.timingbtn}>
      <Button size={75} title="20" onPress = {()=>onChangeTime(20)} />
    </View>

    <View style={styles.timingbtn}>
      <Button size={75} title="30" onPress = {()=>onChangeTime(30)} />
    </View>
    
    <View style={styles.timingbtn}>
      <Button size={75} title="45" onPress = {()=>onChangeTime(45)} />
    </View>
    </>
  )
}

const styles=StyleSheet.create({
  timingbtn:{
    flex:1,
    alignItems: 'center',
  }
})