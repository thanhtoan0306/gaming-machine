# Reel Class Documentation

## Overview
The `Reel` class is a core component of the slot machine game, handling the spinning animation and sound effects. It extends Phaser's `GameObjects.Container` and manages multiple `Slot` objects.

## Constructor
```javascript
constructor(scene, x, y, config, slots)
```
- `scene`: Phaser scene instance
- `x`, `y`: Position coordinates
- `config`: Configuration object with reel settings
- `slots`: Array of slot symbols

## Methods

### preload()
```javascript
preload()
```
Preloads sound assets required for the reel.

### _init(scene, config, slots)
```javascript
_init(scene, config, slots)
```
Initializes reel properties and creates slots.

### _createMask(scene)
```javascript
_createMask(scene)
```
Creates a mask to hide overflowing slots.

### _fillWithSlots(scene, count, slots)
```javascript
_fillWithSlots(scene, count, slots)
```
Populates the reel with slot objects.

### _move(slot)
```javascript
_move(slot)
```
Handles slot movement and wrapping logic.

### startSpin()
```javascript
startSpin()
```
Starts the spinning animation.

### spin()
```javascript
spin()
```
Main spinning logic that moves all slots.

### stopSpin(resultSlots, stopDelay, kachingSound)
```javascript
stopSpin(resultSlots, stopDelay, kachingSound)
```
Stops the reel at specified positions with sound effects.

## Properties
- `slotSize`: Height of each slot
- `slotsCount`: Number of visible slots
- `speed`: Spinning speed
- `stopDelay`: Delay before stopping
- `kachingSound`: Sound effect instance

## Usage Example
```javascript
const reel = new Reel(scene, x, y, config, slots);
reel.startSpin();
// Later...
reel.stopSpin([0, 1, 2], 2000);
```
