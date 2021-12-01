import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { Ionicons } from '@expo/vector-icons';
import { withTheme } from 'styled-components';
import { SafeAreaConsumer } from 'react-native-safe-area-context';

import { Search, Wrapper } from '../components/styled';
import Logo from '../components/Logo';
import MadeWithLove from '../components/Made';

import { ThemeContext } from '../config/theme';

class AboutScreen extends React.Component {
  state = {
    text: '',
  };

  searchBooks = () => {
    if (this.state.text === '') {
      showMessage({
        message: 'Search query cannot be empty',
      });
      return;
    }

    this.props.navigation.navigate('Result', {
      searchQuery: this.state.text,
    });
  };

  render() {
    return (
      
    );
  }
}

export default withTheme(AboutScreen);
