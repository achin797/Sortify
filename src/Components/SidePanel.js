import './Styles/SidePanel.css';
import React from 'react';
import PropertyValueInput from './PropertyValueInput'

class SidePanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            properties: {
                energy: {name: "Energy", isActive: true, value: 50},
                valence: {name: "Valence", isActive: true, value: 50},
                popularity: {name: "Popularity", isActive: true, value: 50},
                tempo: {name: "Tempo", isActive: true, value: 50},
                age: {name: "Age", isActive: true, value: 50},
                acousticness: {name: "Acousticness", isActive: true, value: 50},
                speechiness: {name: "Speechiness", isActive: true, value: 50},
                instrumentalness: {name: "Instrumentalness", isActive: true, value: 50},
                danceability: {name: "Danceability", isActive: true, value: 50},
                loudness: {name: "Loudness", isActive: true, value: 50},
                liveness: {name: "Liveness", isActive: true, value: 50}
            }
        };

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
            <div className="side-panel">
                {/*TODO: Implement this component*/}
                <div>
                    <label>Desired Properties</label>
                </div>
                <div>
                    {this.makeProperties()}
                </div>
            </div>
        );
    }
}

export default SidePanel;