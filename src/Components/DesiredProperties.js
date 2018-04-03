import './Styles/DesiredProperties.css';
import React from 'react';
import PropertyValueInput from './PropertyValueInput'

const SONG_FEATURES = ["Energy", "Valence", "Tempo", "Acousticness", "Speechiness", "Instrumentalness", "Danceability", "Loudness", "Liveness"];

class DesiredProperties extends React.Component {

    constructor(props) {
        super(props);

        let properties = {};
        for (let feature of SONG_FEATURES) {
            properties[feature.toLowerCase()] = {
                name: feature,
                isActive: false,
                value: 50
            }
        }

        this.state = {properties};

        this.makeProperties = this.makeProperties.bind(this)
        this.setPropertyValue = this.setPropertyValue.bind(this)
        this.setPropertyIsActive = this.setPropertyIsActive.bind(this)

    }

    setPropertyValue(key, value) {
        const properties = this.state.properties;
        properties[key].value = value;
        this.setState({properties: properties});
    }

    setPropertyIsActive(key, isActive) {
        const properties = this.state.properties;
        properties[key].isActive = isActive;
        this.setState({properties: properties});
    }

    makeProperties() {
        return Object.keys(this.state.properties).map(key => {
            const {name, isActive, value} = this.state.properties[key];
            return <PropertyValueInput key={key}
                                       propertyKey={key}
                                       name={name}
                                       isActive={isActive}
                                       value={isActive ? value : 0}
                                       setPropertyValue={this.setPropertyValue}
                                       setPropertyIsActive={this.setPropertyIsActive}/>
        });

    }

    render() {
        return (
            <div className="desired-properties">
                <div>
                    {this.makeProperties()}
                </div>

            </div>
        );
    }
}

export default DesiredProperties;