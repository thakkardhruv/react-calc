import React, {Component} from 'react';
import './css/button.css'
class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
            cssClassForButton : 'buttonDiv'
        }
    }
    componentWillMount(){
        if(this.props.orangeButton){
            let orangeButtonCSS  = this.state.cssClassForButton.concat(' orangeButton');
            this.setState({cssClassForButton : orangeButtonCSS});
        }
        if(this.props.wideButton){
            let wideButtonCSS = this.state.cssClassForButton.concat(' wideButton');
            this.setState({cssClassForButton : wideButtonCSS});
        }
    }
    render(){
        return (
            <div className={this.state.cssClassForButton}>
                <button onClick={this.props.handleButtonClick(this.props.value)}>{this.props.value}</button>
            </div>
        );
    }
}
export default Button;