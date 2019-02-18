import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import {
  RkText,
  RkTheme,
} from 'react-native-ui-kitten';
import {
  StackActions,
  NavigationActions,
} from 'react-navigation';
import { ProgressBar } from '../../components';
import { KittenTheme } from '../../config/theme';
import { scale, scaleVertical } from '../../utils/scale';
import NavigationType from '../../config/navigation/propTypes';

const delay = 500;

export class SplashScreen extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  state = {
    progress: 0,
  };

  componentDidMount() {
    StatusBar.setHidden(true, 'none');
    RkTheme.setTheme(KittenTheme);
    this.timer = setInterval(this.updateProgress, delay);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateProgress = () => {
    if (this.state.progress === 1) {
      clearInterval(this.timer);
      setTimeout(this.onLoaded, delay);
    } else {
      const randProgress = this.state.progress + (Math.random() * 0.5);
      this.setState({ progress: randProgress > 1 ? 1 : randProgress });
    }
  };

  onLoaded = () => {
    StatusBar.setHidden(false, 'slide');
    const toHome = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });
    this.props.navigation.dispatch(toHome);
  };

  render = () => (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center',}}>
        <Image
          style={[styles.image, { width: (Dimensions.get('window').width) / 2 }]}
          source={require('../../assets/images/splashBack.png')}
        />
        <View style={styles.text}>
          <RkText rkType='light' style={styles.hero}>Numéris</RkText>
          <RkText rkType='light' style={{fontSize: 30, marginTop: 20}}>Projet associatif</RkText>

          <RkText rkType='light' style={{fontSize: 20, marginTop: 100}}>Sébastien MASCHA</RkText>
          <RkText rkType='light' style={{fontSize: 20, marginTop: 10}}>Thomas LECOUÉDIC</RkText>
        </View>
      </View>
      <ProgressBar
        color={RkTheme.current.colors.accent}
        style={styles.progress}
        progress={this.state.progress}
        width={scale(320)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: KittenTheme.colors.screen.base,
    justifyContent: 'space-between',
    flex: 1,
  },
  image: {
    resizeMode: 'contain',
    height: scaleVertical(230),
  },
  text: {
    alignItems: 'center',
  },
  hero: {
    fontSize: 37,
  },
  appName: {
    fontSize: 62,
  },
  progress: {
    alignSelf: 'center',
    marginBottom: 35,
    backgroundColor: '#e5e5e5',
  },
});
