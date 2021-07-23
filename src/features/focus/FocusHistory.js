import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { RoundedButton } from '../../Components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';
import {millis} from '../../Components/Countdown';

export const FocusHistory = ({ focusHistory, setFocusHistory }) => {
  const HistoryItem = ({ item, index }) => {
    return <Text style={{color:'green',fontSize: fontSizes.md}}>{item.subject}</Text>;
  };

  const clearHistory = () => {
    setFocusHistory(['']);
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1 }} alignItems="center">
        {focusHistory.length && (
          <>
            <Text style={styles.title}>Things we've focused on </Text>

            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <Button title="Clear" onPress={() => clearHistory()} />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: fontSizes.lg,
    justifyContent: 'center',
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  },
});
