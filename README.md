# react-native-modal-overlay
An overlay component built using native Modal which can be invoked from anywhere in the component hierarchy.

## Features
- Unlike other modal/overlay components, it can be triggered from anywhere in the component hierarchy since it is using react-native Modal.
- Used react-native components. So no linking is required.
- Works out of the box for both Android and IOS.
- Can be customised by passing style props.
- Supports `closeOnTouchOutside`.

## GIFs

![Full GIF](./gifs/demo.gif "Full GIF")

## Props
- animationType: Animation Type for modal/overlay. Can be `fade` or `slide`.
- visible: sets modal visibility. Type: `Boolean`
- closeOnTouchOutside: If modal should close on touching outside the child component. Type: `Boolean`
- onClose: Function to be called on close.
- containerStyle: Style for the Overlay container. Type: `Object`
- childrenWrapperStyle: Style for children container. Type: `Object`

## Installation
`npm install react-native-modal-overlay --save` or if you are using Yarn, `yarn add react-native-modal-overlay`

## Example Usage
```
import Overlay from 'react-native-modal-overlay';

<Overlay visible={this.state.modalVisible}
      closeOnTouchOutside animationType="fade"
      containerStyle={{backgroundColor: 'rgba(37, 8, 10, 0.78)'}}
      childrenWrapperStyle={{backgroundColor: '#eee'}} >
    ...
    <Text>Some Modal Content</Text>
    ...
</Overlay>

```

Example Project URL: [https://github.com/rgabs/react-native-modal-overlay-example](https://github.com/rgabs/react-native-modal-overlay-example)

Don’t forget to hit star if you like my work :)
