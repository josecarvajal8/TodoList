import React, { useEffect } from 'react';
import { PanResponder, Animated, View } from 'react-native';
export default function Draggable({ children }: IPropsDraggable) {
    const [pan, setPan] = React.useState(new Animated.ValueXY());
    const [panResponder, setPanResponder] = React.useState(PanResponder.create({
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: (e, gestureState) => {
            pan.setValue({ x: 0, y: 0 })
        },
        onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
        onPanResponderRelease: (e, { vx, vy }) => {
            pan.flattenOffset();
        }
    }));
    const { x: translateX, y: translateY } = pan;
    const styleDraggable = { transform: [{ translateX }, { translateY }] }
    return (
        <View>
            <Animated.View style={styleDraggable} {...panResponder.panHandlers}>
                {children}
            </Animated.View>
        </View>
    );
}