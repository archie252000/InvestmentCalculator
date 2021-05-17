import React, { Fragment, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { SplashScreen } from './App/Screens/SplashScreen'
import { Calculator } from './App/Screens/Calculator'


export default function App() {

  const [showSplash, updateShowSplash] = useState(true)

  useEffect(
    () => {
      let showSplashScreen = setTimeout(() => updateShowSplash(false), 1500)
      return () => {
        clearTimeout(showSplashScreen);
      };

    }, []
  )

  return (
    <Fragment>
      {
        showSplash ? (
          <SplashScreen />
        ) : (
            <Calculator />
          )
      }
    </Fragment>
  );
}

