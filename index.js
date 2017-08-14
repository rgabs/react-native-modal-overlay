import React, {PropTypes} from 'react';
import {Modal, Platform, TouchableWithoutFeedback, View} from 'react-native';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(37, 8, 10, 0.78)'
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
}};

class Overlay extends React.Component {
  state = {
    visible: this.props.visible,
  };
  static propTypes = {
    children: PropTypes.node,
    animationType: PropTypes.string,
    visible: PropTypes.bool,
    closeOnTouchOutside: PropTypes.bool,
    onClose: PropTypes.func,
    onShow: PropTypes.func,
    containerStyle: PropTypes.object,
    childrenWrapperStyle: PropTypes.object,
    transparent: PropTypes.bool,
    // android-specific
    hardwareAccelerated: PropTypes.bool,
    // ios-specific
    onOrientationChange: PropTypes.func,
    presentationStyle: PropTypes.oneOf(['fullScreen', 'pageSheet', 'formSheet', 'overFullScreen']),
    supportedOrientations: PropTypes.oneOf(['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']),
  }
  static defaultProps = {
    children: null,
    animationType: 'fade',
    visible: false,
    closeOnTouchOutside: false,
    onClose: () => {},
    onShow: () => {},
    transparent: true,
    hardwareAccelerated: Platform.OS === 'android' ? false : undefined,
    presentationStyle: Platform.OS === 'ios' ? 'overFullScreen' : undefined,
    supportedOrientations: Platform.OS === 'ios' ? ['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right'] : undefined,
    onOrientationChange: Platform.OS === 'ios' ? () => {} : undefined,
  }
  componentWillReceiveProps (newProps) {
    this.setState({visible: newProps.visible});
  }

  _hideModal = () => {
    this.setState({visible: false});
    this.props.onClose();
  }

  _stopPropagation = (e) => e.stopPropagation()

  render () {
    const {
      animationType,
      onShow,
      closeOnTouchOutside,
      children,
      containerStyle,
      childrenWrapperStyle,
      transparent,
      hardwareAccelerated,
      presentationStyle,
      supportedOrientations,
      onOrientationChange,
    } = this.props;
    return (
      <Modal
        animationType={animationType}
        transparent={transparent}
        visible={this.state.visible}
        onRequestClose={this._hideModal}
        onShow={onShow}
        hardwareAccelerated={hardwareAccelerated}
        presentationStyle={presentationStyle}
        supportedOrientations={supportedOrientations}
        onOrientationChange={onOrientationChange}
      >
        <TouchableWithoutFeedback onPress={closeOnTouchOutside ? this._hideModal : null}>
          <View style={[styles.container, containerStyle]}>
            <TouchableWithoutFeedback onPress={this._stopPropagation}>
              <View style={[styles.innerContainer, childrenWrapperStyle]}>
                {children}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

export default Overlay;
