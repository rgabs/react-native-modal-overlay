# react-native-modal-overlay
An overlay component built using native Modal which can be invoked from anywhere in the component hierarchy.

NPM URL- [https://www.npmjs.com/package/react-native-modal-overlay](https://www.npmjs.com/package/react-native-modal-overlay)
## Features
- Unlike other modal/overlay components, it can be triggered from anywhere in the component hierarchy since it is using react-native Modal.
- Used react-native components. So no linking is required.
- Works out of the box for both Android and IOS.
- Can be customised by passing style props.
- Supports `closeOnTouchOutside`.

## GIFs

![Full GIF](./gifs/demo.gif "Full GIF")

## Props

This module accepts the following props:

| Prop   |Explanation| Default Value      |Type |
|----------|:------------------|:--------------|:--------------|
|`animationType`|Animation Type for modal/overlay. Can be any of the animations provided by [react-native-animatable](https://github.com/oblador/react-native-animatable). Example: `fadeInUp` `zoomIn`, `bounceIn`, `flipInX`, `lightSpeedIn`, etc.|'fadeIn'|string|
|`easing`|Timing function for the animation provided by [react-native-animatable](https://github.com/oblador/react-native-animatable)|'ease'|string|
|`visible`|Sets modal visibility|false|Boolean|
|`closeOnTouchOutside`|If modal should close on touching outside the child component|false|Boolean|
|`onClose`|Function to be called on close.|noop|Function|
|`containerStyle`|Style for the Overlay container.|{}|Object|
|`childrenWrapperStyle`| Style for children container.|{}|Object|


## Installation
`npm install react-native-modal-overlay --save` or if you are using Yarn, `yarn add react-native-modal-overlay`

## Example Usage
```
import Overlay from 'react-native-modal-overlay';

<Overlay visible={this.state.modalVisible}
      closeOnTouchOutside animationType="zoomIn"
      containerStyle={{backgroundColor: 'rgba(37, 8, 10, 0.78)'}}
      childrenWrapperStyle={{backgroundColor: '#eee'}}
      animationDuration={500}>
    ...
    <Text>Some Modal Content</Text>
    ...
</Overlay>

```

Example Project URL: [https://github.com/rgabs/react-native-modal-overlay-example](https://github.com/rgabs/react-native-modal-overlay-example)

Don’t forget to hit star if you like my work :)
