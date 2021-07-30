import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Vibration,
} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { spacing } from '../../utils/sizes';
import { Countdown } from '../../Components/Countdown';
import { RoundedButton } from '../../Components/RoundedButton';
import { Timing } from './timing';
import { useKeepAwake } from 'expo-keep-awake';
import * as Speech from 'expo-speech';


const DEFAULT_TIME = 0.1;
export const Timer = ({ focusSubject, onTimerEnd ,clearSubject}) => {
  useKeepAwake();
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const vibrate = () => {
      Vibration.vibrate(3000);
    };

  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  const speak = () => {
    Speech.speak("Don't give up! Try Again.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={{ paddingTop: spacing.xl }}>
        {/* <Text style={styles.title}>Focusing on:{focusSubject}</Text> */}
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={{ paddingTop: spacing.md }}>
        <ProgressBar
          progress={progress}
          color="#5E84E2"
          style={{ height: 10 }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <Button title="pause" onPress={() => setIsStarted(false)} />
        ) : (
          <Button title="start" onPress={() => setIsStarted(true)} />
        )}
      </View>
      <View style = {styles.clearSubject}>
        <Button title="CANCEL" onPress={() => {clearSubject();speak()}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#2554C7'
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
  task: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubject:{
    paddingBottom:25,
    paddingLeft:25,
    paddingRight:25,

  }
});
