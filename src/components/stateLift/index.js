import React from 'react';

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.props.onChange(e.target.value)
    }
    render() {
        const scaleNames = {
            c: 'Celsius',
            f: 'Fahrenheit'
        };
        return (
            <div>
                <p>Enter temperature in {scaleNames[this.props.type]}:</p>
                <input value={this.props.temperature} onChange={this.handleChange}></input>
            </div>

        )
    }
}

// class StateLift extends React.Component {
//     constructor(props) {
//         super(props)
//         // this.handleChange = this.handleChange.bind(this)
//         this.state = {
//             temperature_c: '',
//             temperature_f: ''
//         }
//     }

//     handleChange(type, value) {
//         console.log('value', type, value)
//         if(type == 'c'){
//             this.setState({
//                 temperature_c: value,
//                 temperature_f: tryConvert(value, toFahrenheit)
//             })
//         }else {
//             this.setState({
//                 temperature_c: tryConvert(value, toCelsius),
//                 temperature_f: value
//             })
//         }
        
//     }
//     render() {
//         return (
//             <div>
//                 <TemperatureInput type="c" temperature={this.state.temperature_c} onChange={this.handleChange.bind(this, 'c')}></TemperatureInput>
//                 <TemperatureInput type="f" temperature={this.state.temperature_f} onChange={this.handleChange.bind(this, 'f')}></TemperatureInput>
//             </div>
//         )
//     }
// }

class StateLift extends React.Component {
    constructor(props) {
        super(props)
        // this.handleChange = this.handleChange.bind(this)
        this.state = {
            type: 'c',
            temperature: '',
        }
    }

    // @flow
    handleChangeC(value) {
            this.setState({
                temperature: value,
                type: 'c'
            }) 
    }

    handleChangeF(value) {
        this.setState({
            temperature: value,
            type: 'f'
        }) 
}

    render() {
        const type = this.state.type || 'c'
        const temperature = this.state.temperature
        const temperature_c = type == 'c' ? temperature : tryConvert(temperature, toFahrenheit)
        const temperature_f = type == 'f' ? temperature : tryConvert(temperature, toCelsius)
        
        return (
            <div>
                <TemperatureInput type="c" temperature={temperature_c} onChange={this.handleChangeC.bind(this)}></TemperatureInput>
                <TemperatureInput type="f" temperature={temperature_f} onChange={this.handleChangeF.bind(this)}></TemperatureInput>
            </div>
        )
    }
}

export default StateLift

