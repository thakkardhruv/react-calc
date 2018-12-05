import React, {Component} from 'react';
import Button from './Button';
import './css/buttongroup.css';
class ButtonGroup extends Component{
    render(){
        return (
            <div className="btn-group">
        <div className="btn-group-row">
          <Button value="AC" handleButtonClick={this.props.handleButtonClick} />
          <Button value="+/-" handleButtonClick={this.props.handleButtonClick} />
          <Button value="%" handleButtonClick={this.props.handleButtonClick} />
          <Button value="÷" handleButtonClick={this.props.handleButtonClick} orangeButton />
        </div>
        <div className="btn-group-row">
          <Button value="7" handleButtonClick={this.props.handleButtonClick} />
          <Button value="8" handleButtonClick={this.props.handleButtonClick} />
          <Button value="9" handleButtonClick={this.props.handleButtonClick} />
          <Button value="x" handleButtonClick={this.props.handleButtonClick} orangeButton />
        </div>
        <div className="btn-group-row">
          <Button value="4" handleButtonClick={this.props.handleButtonClick} />
          <Button value="5" handleButtonClick={this.props.handleButtonClick} />
          <Button value="6" handleButtonClick={this.props.handleButtonClick} />
          <Button value="-" handleButtonClick={this.props.handleButtonClick} orangeButton />
        </div>
        <div className="btn-group-row">
          <Button value="1" handleButtonClick={this.props.handleButtonClick} />
          <Button value="2" handleButtonClick={this.props.handleButtonClick} />
          <Button value="3" handleButtonClick={this.props.handleButtonClick} />
          <Button value="+" handleButtonClick={this.props.handleButtonClick} orangeButton />
        </div>
        <div className="btn-group-row">
          <Button value="0" handleButtonClick={this.props.handleButtonClick} wideButton />
          <Button value="." handleButtonClick={this.props.handleButtonClick} />
          <Button value="=" handleButtonClick={this.props.handleButtonClick} orangeButton />
        </div>
      </div>
        );
    }
}
export default ButtonGroup;