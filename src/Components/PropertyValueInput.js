import './Styles/PropertyValueInput.css';
import React from 'react';
import Slider, {createSliderWithTooltip} from 'rc-slider';
import 'rc-slider/assets/index.css';


class PropertyValueInput extends React.Component {

    constructor(props) {
        super(props);

        this.onSliderChange = this.onSliderChange.bind(this);
        this.onAfterChange = this.onAfterChange.bind(this);
    }

    onSliderChange(newValue) {
        this.props.setPropertyValue(this.props.propertyKey, newValue);
    }

    onAfterChange(newValue) {
    }


    render() {
        return (
            <div className="property-value-input">
                {/*TODO: Implement this component*/}

                <Slider value={this.props.value}
                        onChange={this.onSliderChange} onAfterChange={this.onAfterChange}
                />

                <input checked={this.props.isActive} type="checkbox" onChange={() => {
                    this.props.setPropertyIsActive(this.props.propertyKey, !this.props.isActive)
                }}/>

                <label onClick={() => {
                    this.props.setPropertyValue(this.props.propertyKey, (this.props.value + .1))
                }}>{this.props.name} {this.props.value}</label>

            </div>
        );
    }
}

export default PropertyValueInput;