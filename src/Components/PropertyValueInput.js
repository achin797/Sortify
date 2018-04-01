import './Styles/PropertyValueInput.css';
import React from 'react';
import Slider, {createSliderWithTooltip} from 'rc-slider';
import 'rc-slider/assets/index.css';


class PropertyValueInput extends React.Component {

    constructor(props) {
        super(props);

        this.onSliderChange = this.onSliderChange.bind(this);
        this.onAfterChange = this.onAfterChange.bind(this);
        this.toggleProperty = this.toggleProperty.bind(this);
    }

    onSliderChange(newValue) {
        this.props.setPropertyValue(this.props.propertyKey, newValue);
    }

    toggleProperty() {
        this.props.setPropertyIsActive(this.props.propertyKey, !this.props.isActive);
    }

    onAfterChange(newValue) {
    }


    render() {
        return (
            <div className={this.props.isActive ? "property-value-input active" : "property-value-input" }>
                {/*TODO: Implement this component*/}

                <div>
                    <Slider value={this.props.value}
                            onChange={this.onSliderChange} onAfterChange={this.onAfterChange}
                    />
                    <label className="toggle-property-button" onClick={this.toggleProperty}>
                        {this.props.isActive ? "x" : "+"}
                    </label>
                </div>

                <label className="property-name">{this.props.name} ({this.props.value})</label>

            </div>
        );
    }
}

export default PropertyValueInput;