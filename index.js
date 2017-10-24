import React from 'react';
import PropTypes from 'prop-types';
import {Modal, TouchableWithoutFeedback, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

const AnimatableTouchableWithoutFeedback = Animatable.createAnimatableComponent(TouchableWithoutFeedback);
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(37, 8, 10, 0.78)',
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  }
};

class Overlay extends React.Component {
  state = {
    visible: this.props.visible,
  };
  static propTypes = {
    children: PropTypes.node,
    animationType: PropTypes.string,
    easing: PropTypes.string,
    visible: PropTypes.bool,
    closeOnTouchOutside: PropTypes.bool,
    onClose: PropTypes.func,
    containerStyle: PropTypes.object,
    childrenWrapperStyle: PropTypes.object,
    animationDuration: PropTypes.number,
  }
  static defaultProps = {
    children: null,
    animationType: 'fadeIn',
    easing: 'ease',
    visible: false,
    closeOnTouchOutside: false,
    onClose: () => {},
    animationDuration: 500
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
    const {animationType, closeOnTouchOutside, animationDuration, children,
          containerStyle, childrenWrapperStyle, easing, ...extraProps} = this.props;
    return (
      <Modal
        animationType={'none'}
        transparent
        visible={this.state.visible}
        onRequestClose={this._hideModal}
        {...extraProps}>
        <TouchableWithoutFeedback onPress={closeOnTouchOutside ? this._hideModal : null}>
          <Animatable.View animation='fadeIn' duration={animationDuration} easing={easing}
              useNativeDriver style={[styles.container, containerStyle]}>
            <AnimatableTouchableWithoutFeedback animation={animationType} easing={easing}
              duration={animationDuration} useNativeDriver onPress={this._stopPropagation}>
              <View style={[styles.innerContainer, childrenWrapperStyle]}>
                {children}
              </View>
            </AnimatableTouchableWithoutFeedback>
          </Animatable.View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

export default Overlay;
