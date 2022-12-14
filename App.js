import * as React from 'react';

import { Alert, Platform, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function App() {

  const pointerEvents = Platform.OS === 'ios' ? '' : 'box-none';

  return (
    <View>
      <View
        style={{
          position: 'absolute',
          top: 150,
          left: 75,
          transform: [{ scale: 2 }],
        }}
      >
        <Text style={{ position: 'absolute', top: -25, left: 20 }}>React Native 68 / Expo 45</Text>
        <Svg
          width={180}
          height={115}
          fill="none"
          style={{ position: 'absolute', top: 0, left: 0 }}
          pointerEvents={pointerEvents}
        >
          <Path
            opacity={0.4}
            pointerEvents={pointerEvents}
            onPress={() => Alert.alert('BLUE SECTION')}
            d="M178.829 50.333c-24.775-17.185-77.2-39.96-102.06-49.895a1.96 1.96 0 0 0-2.017.348L2.169 63C.045 64.77-.147 65.888.07 66.352c.05.109.128.19.199.287C5.078 73.19 33.718 86.532 40.669 91c7 4.5 37.5 23 42.5 23.5 4 .4 18-9.167 24.5-14l71.102-46.917c1.162-.767 1.202-2.457.058-3.25Z"
            fill="#2E90FA"
          />
        </Svg>

        <Svg width={183} height={74} fill="none" pointerEvents={pointerEvents}>
          <Path
            opacity={0.4}
            pointerEvents={pointerEvents}
            onPress={() => Alert.alert('RED SECTION')}
            d="M90.526 57.812c-10.077-4.064-37.05-11.661-51.738-15.6a1.968 1.968 0 0 0-1.506.203L3.964 61.705c-1.51.874-1.256 3.121.418 3.618C16.216 68.833 35.162 74 41.5 74c6.637 0 33.328-8.214 48.82-13.285 1.545-.506 1.715-2.295.206-2.903ZM96 48c-6.411 0-26.778-6.079-39.282-10.117-1.641-.53-1.861-2.744-.368-3.606l31.02-17.913a1.885 1.885 0 0 1 1.344-.221c7.337 1.601 34.439 10.85 51.556 16.842 1.822.638 1.769 3.232-.075 3.802C126.617 40.981 103.736 48 96 48ZM146.5 23c5.313.332 20.18-3.677 30.418-6.765 1.825-.55 1.874-3.08.081-3.729L143.098.216a2 2 0 0 0-1.212-.047l-32.895 9.046c-1.918.528-1.971 3.215-.07 3.804 13.037 4.04 32.169 9.643 37.579 9.981Z"
            fill="#F63D68"
          />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});
