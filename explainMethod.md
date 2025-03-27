# Slot Machine Game Methods Documentation

## Scene Methods

### Boot Scene
```javascript
class Boot extends Phaser.Scene
```
- **init()**: Initializes the boot scene
- **create()**: Creates the boot scene and transitions to the preload scene

### Preload Scene
```javascript
class Preload extends Phaser.Scene
```
- **preload()**: Loads all game assets (images, sprites, audio)
- **create()**: Transitions to the main game scene after assets are loaded

### Game Scene
```javascript
class Game extends Phaser.Scene
```
- **create()**: Sets up the main game scene
  - Initializes UI elements
  - Creates slot machine
  - Sets up debug features
- **_addMachine()**: Creates the main slot machine instance
- **_addSpinButton()**: Adds the spin button with click handler
- **_addBalance()**: Initializes and displays player balance
- **_updateBalance(sum)**: Updates player balance after wins/losses
- **_addPayTable()**: Creates and displays the paytable
- **_addDebugBar()**: Initializes debug controls
- **update()**: Game loop method, handles button state based on machine lock

## Game Objects

### Machine Class
```javascript
class Machine extends Phaser.GameObjects.Container
```
- **constructor(scene, config)**: Creates main slot machine container
- **init()**: Initializes machine components
- **addSlot()**: Creates individual slot components
- **spin()**: Triggers spin animation on all slots
- **stop()**: Stops all slots in sequence
- **lock()/unlock()**: Controls machine interactivity
- **calculateResult()**: Determines spin outcome
- **checkWin()**: Evaluates winning combinations

### Slot Class
```javascript
class Slot extends Phaser.GameObjects.Container
```
- **constructor(scene, config)**: Creates individual slot container
- **init()**: Sets up slot components
- **addReel()**: Creates the reel component
- **spin()**: Initiates slot spinning animation
- **stop(position)**: Stops slot at specified position
- **getCurrentSymbol()**: Returns current visible symbol

### Reel Class
```javascript
class Reel extends Phaser.GameObjects.Container
```
- **constructor(scene, config)**: Creates reel container
- **init()**: Initializes reel symbols
- **spin()**: Starts reel spinning animation
- **update()**: Updates symbol positions during spin
- **stop(position)**: Stops reel at specified position
- **tweenTo(position)**: Animates reel to stop position

### Button Class
```javascript
class Button extends Phaser.GameObjects.Sprite
```
- **constructor(scene, x, y, texture)**: Creates interactive button
- **enable()/disable()**: Controls button interactivity
- **setClickHandler(handler)**: Sets button click behavior
- **onHover()/onOut()**: Handles hover animations

### PayTable Class
```javascript
class PayTable extends Phaser.GameObjects.Container
```
- **constructor(scene, config)**: Creates paytable display
- **init()**: Sets up paytable layout
- **createSymbolRow(symbol, payout)**: Creates row in paytable
- **highlight(combination)**: Highlights winning combinations

### DebugBar Class
```javascript
class DebugBar extends Phaser.GameObjects.Container
```
- **constructor(scene, config)**: Creates debug control panel
- **init()**: Initializes debug controls
- **addDragSlots()**: Creates draggable symbol slots
- **setResult(positions)**: Sets specific reel positions
- **reset()**: Resets debug controls

### DragSlot Class
```javascript
class DragSlot extends Phaser.GameObjects.Container
```
- **constructor(scene, config)**: Creates draggable symbol slot
- **init()**: Sets up drag functionality
- **enableDrag()**: Enables symbol dragging
- **onDragStart()/onDrag()/onDragEnd()**: Handles drag events
- **updatePosition(position)**: Updates symbol position

## Utility Methods

### Configuration
```javascript
// config.js
```
- **getGameConfig()**: Returns game configuration
- **getSlotConfig()**: Returns slot machine configuration
- **getPayTableConfig()**: Returns paytable configuration

### Animation Methods
- **tweenSymbols()**: Handles symbol movement animation
- **blurSymbols()**: Applies blur effect during spin
- **unblurSymbols()**: Removes blur effect after stop
- **flashWin()**: Creates winning combination flash effect

### Game Logic Methods
- **calculatePayout(combination)**: Determines win amount
- **validateCombination(result)**: Validates symbol combinations
- **checkBalance()**: Verifies sufficient balance for spin
- **updateStats()**: Updates game statistics

## Event Handlers

### User Interaction
- **onSpinClick()**: Handles spin button click
- **onAutoSpinToggle()**: Handles auto-spin feature
- **onBetChange()**: Handles bet amount changes

### Game State
- **onSpinStart()**: Handles spin initiation
- **onSpinComplete()**: Handles spin completion
- **onWin()**: Handles winning combinations
- **onBalanceUpdate()**: Handles balance changes

## Debug Methods

### Testing Features
- **setTestResult()**: Forces specific spin results
- **toggleDebugMode()**: Enables/disables debug features
- **logGameState()**: Outputs current game state
- **simulateSpins()**: Runs automated spin tests

## Performance Optimization

### Memory Management
- **cleanupSprites()**: Removes unused sprites
- **optimizeTextures()**: Manages texture memory
- **poolSymbols()**: Implements object pooling

### State Management
- **saveGameState()**: Persists game state
- **loadGameState()**: Restores game state
- **resetGame()**: Resets game to initial state

## Notes on Implementation

1. **Scene Management**
   - Proper scene transitions
   - Asset preloading
   - State persistence between scenes

2. **Animation Performance**
   - Use of tweens for smooth animations
   - Sprite optimization
   - Frame rate management

3. **Memory Considerations**
   - Proper cleanup of unused objects
   - Event listener management
   - Texture atlas usage

4. **Debug Features**
   - Comprehensive testing tools
   - Result manipulation
   - State inspection

5. **User Experience**
   - Responsive controls
   - Clear feedback
   - Smooth animations
   - Win celebrations
