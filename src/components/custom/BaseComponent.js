// @flow
import React, {Component} from 'react';
import {KeyboardAvoidingView, ScrollView, SafeAreaView} from 'react-native';
import {Header} from './Header';
import {Colors} from './Colors';

export default class BaseContainer extends Component {
  componentDidMount() {
    const {componentDidMount} = this.props;

    if (componentDidMount) {
      componentDidMount();
    }
  }

  componentWillUnmount() {
    const {componentWillUnmount} = this.props;

    if (componentWillUnmount) {
      componentWillUnmount();
    }
  }

  render() {
    const {
      title,
      navigation,
      scrollable,
      footer,
      style,
      right,
      header,
      noShadow,
    } = this.props;
    return (
      <SafeAreaView style={[{backgroundColor: Colors.titanWhite}, style]}>
        {header || (
          <Header
            back
            navigation={navigation}
            title={title}
            right={right}
            shadow={!noShadow}
          />
        )}
        {scrollable ? (
          <ScrollView style={{backgroundColor: Colors.white}}>
            <KeyboardAvoidingView behavior="position">
              {this.props.children}
            </KeyboardAvoidingView>
          </ScrollView>
        ) : (
          this.props.children
        )}
        {footer}
      </SafeAreaView>
    );
  }
}
