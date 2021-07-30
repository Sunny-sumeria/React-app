import React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';

export const Timing = ({onChangeTime}) => {
  return(
    <>
    <View Style={styles.timingbtn} >
      <Button title="10" onPress = {()=>onChangeTime(10)} />
    </View>

    <View Style={styles.timingbtn} >
      <Button title="15" onPress = {()=>onChangeTime(15)} />
    </View>

    <View Style={styles.timingbtn} >
      <Button title="20" onPress = {()=>onChangeTime(20)} />
    </View>

    <View Style={styles.timingbtn} >
      <Button title="30" onPress = {()=>onChangeTime(30)} />
    </View>
    
    <View Style={styles.timingbtn} >
      <Button title="45" onPress = {()=>onChangeTime(45)} />
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