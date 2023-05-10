// @flow
import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {getSmallImageUrl, getLargeImageUrl, Colors} from './utils';
import Loader from './Loader';

const DEFAULT_SOURCE = require('../../assets/images/products/no-product.png');

export default class ProductImage extends Component {
  state = {
    loading: false,
    error: false,
  };
  getUrl = () => {
    const {id, size} = this.props;
    switch (size) {
      case 'large':
        return getLargeImageUrl(id);
      case 'small':
        return getSmallImageUrl(id);
      default:
        return getSmallImageUrl(id);
    }
  };

  renderLoader = () => {
    if (this.state.loading && !this.state.error) {
      return <Loader color={Colors.primary} size={20} />;
    }
    return null;
  };

  renderImage = () => {
    const {style} = this.props;
    if (this.state.error) {
      return (
        <Image source={DEFAULT_SOURCE} style={style} resizeMode="contain" />
      );
    }
    return (
      <Image
        source={{uri: this.getUrl()}}
        defaultSource={DEFAULT_SOURCE}
        onLoadStart={() => this.setState({loading: true})}
        onLoadEnd={() => this.setState({loading: false})}
        onError={() => this.setState({error: true, loading: false})}
        onLoad={() => this.setState({error: false})}
        style={style}
        resizeMode="contain"
      />
    );
  };

  render() {
    const {containerStyle} = this.props;
    return (
      <View
        style={[
          {alignItems: 'center', justifyContent: 'center'},
          containerStyle,
        ]}>
        {this.renderImage()}
        {this.renderLoader()}
      </View>
    );
  }
}
