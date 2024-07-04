import { Colors } from '@/constants/Colors';
import { PropsWithChildren } from 'react';
import { Dimensions, StyleSheet, View, useColorScheme } from 'react-native';

import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const data = [
  { name: 'Jours réussis', population: 20, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Jours presques réussis', population: 15, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Jours ratés', population: 5, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
];

export function PieSummary() {

  const theme = useColorScheme() ?? 'light';
  
  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background,
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute // To show the percentage in the chart
      />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
