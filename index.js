import React, {PropTypes} from 'react';
import {Modal, TouchableWithoutFeedback, View} from 'react-native';
import styles from './Overlay.styles';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: rgba(37, 8, 10, 0.78)
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
    onClose: PropTypes.func
  }
  static defaultProps = {
    children: null,
    animationType: 'fade',
    visible: false,
    closeOnTouchOutside: false,
    onClose: () => {}
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
    const {animationType, closeOnTouchOutside, children} = this.props;
    return (
      <Modal
          animationType={animationType}
          transparent
          visible={this.state.visible}
          onRequestClose={this._hideModal}>
        <TouchableWithoutFeedback onPress={closeOnTouchOutside ? this._hideModal : null}>
          <View style={styles.container}>
            <TouchableWithoutFeedback onPress={this._stopPropagation}>
              <View style={styles.innerContainer}>
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
