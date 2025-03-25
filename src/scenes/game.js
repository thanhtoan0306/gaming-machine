import { Scene } from 'phaser'
import { config } from '../config'
import Machine from '../objects/machine'
import Button from '../objects/button'
import PayTable from '../objects/payTable'
import DebugBar from '../objects/debugBar'
let spinSound;
export default class GameScene extends Scene {
    constructor() { super({ key: 'Game' }) }
    init() {
        this.balance = config.payTable.startBalance
        // this.sound = {
        //     kachingSound: this.sound.add('kaching')
        // }

        this._addSlotMachine()
        this._addBalanceBlock()
        this._addSpinButton()
        this._addPayTable()
        this._addDebugBar()
        
    }

    _addSlotMachine(){
        this.machine = new Machine(this, 
            config.size.centerX, 
            config.size.centerY - 100, 
            config.game,
            config.payTable.payment, this.sound.add('kaching'))
    }

    _addSpinButton(){
        this.spinButton = new Button(this,
            config.size.centerX + config.game.spinButtonOffset.x,
            config.size.centerY + config.game.spinButtonOffset.y,
            config.game.atlasName,
            config.game.sprites.spinButton
            )
        this.spinButton.on('pointerup', () => this._runMachine());
    }

    _runMachine(){
        if( !this.machine.locked ){
            this.machine.setResultSlots(this.debugBar.debugSlots)
            this.machine.startSpin()
            this.spinButton.disable()

            spinSound = this.sound.add('spin');
            spinSound.play();


            let machineConfig = config.game.machine,
                stopDelay = machineConfig.stopDelay,
                reelStopDelay = machineConfig.reelStopDelay,
                reelsCount = machineConfig.reelsCount,
                delay = stopDelay + reelStopDelay * reelsCount

            this._updateBalance(-1)
            setTimeout(() => spinSound.stop(), delay)
            setTimeout(()=> this._checkResults(), delay + 1000)
        }
    }

    _checkResults(){
        if(this.machine.winSum) this._updateBalance(this.machine.winSum)
    }

    _addBalanceBlock(){
        this.add.sprite(
            config.size.centerX + config.game.spinButtonOffset.x,
            config.size.centerY + config.game.spinButtonOffset.y - 5,
            config.game.atlasName,
            config.game.sprites.balanceBg
        ).setOrigin(1,0.5)

        this.balanceText = this.add.bitmapText(
            config.size.centerX + config.game.balanceTextOffsetX,
            config.size.centerY + config.game.balanceTextOffsetY,
            'freedom', `$ ${this.balance}`, 56
        ).setOrigin(0,0.5)
        
        this.add.bitmapText(
            config.size.centerX + config.game.balanceCommentOffsetX,
            config.size.centerY + config.game.balanceCommentOffsetY,
            'freedom', 'Each spin costs 1 coin', 18
        ).setOrigin(0,0.5)
    }

    _updateBalance(sum = 0){
        if(sum > 0) console.log(sum)
        this.balance += sum ? sum : this.balance
        this.balanceText.setText(`$ ${this.balance}`)
    }

    _addPayTable(){
        new PayTable(this, config.payTable)
    }

    _addDebugBar(){
        this.debugBar = new DebugBar(this, config)
    }

    update(){
        if( !this.machine.locked ) this.spinButton.enable()
    }
}