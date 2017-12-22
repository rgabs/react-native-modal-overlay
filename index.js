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
    animationType: this.props.animationType,
    overlayAnimationType: 'fadeIn'
  };
  static propTypes = {
    children: PropTypes.node.isRequired,
    animationType: PropTypes.string,
    animationOutType: PropTypes.string,
    easing: PropTypes.string,
    visible: PropTypes.bool.isRequired,
    closeOnTouchOutside: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    containerStyle: PropTypes.object,
    childrenWrapperStyle: PropTypes.object,
    animationDuration: PropTypes.number,
  }
  static defaultProps = {
    children: null,
    animationType: 'fadeIn',
    animationOutType: 'fadeOut',
    easing: 'ease',
    visible: false,
    closeOnTouchOutside: false,
    onClose: () => {},
    animationDuration: 500
  }
  componentWillReceiveProps (newProps) {
    this.setState({visible: newProps.visible, animationType: newProps.animationType});
  }

  _hideModal = () => {
    const {animationOutType, animationDuration, onClose} = this.props;
    this.setState({animationType: animationOutType, overlayAnimationType: animationOutType});
    let timer = setTimeout(() => {
      onClose();
      clearTimeout(timer);
      this.setState({overlayAnimationType: 'fadeIn'});
    }, animationDuration - 100);
  }

  _stopPropagation = (e) => e.stopPropagation()

  render () {
    const {closeOnTouchOutside, animationDuration, children,
          containerStyle, childrenWrapperStyle, easing, ...extraProps} = this.props;
    return (
      <Modal
        transparent
        visible={this.state.visible}
        onRequestClose={this._hideModal}
        {...extraProps} animationType='none'>
        <TouchableWithoutFeedback onPress={closeOnTouchOutside ? this._hideModal : null}>
          <Animatable.View animation={this.state.overlayAnimationType} duration={animationDuration} easing={easing}
              useNativeDriver style={[styles.container, containerStyle]}>
            <AnimatableTouchableWithoutFeedback animation={this.state.animationType} easing={easing}
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
