import React from 'react';

class AppClass extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         lat: null,
    //         msg: ''
    //     }
    // }

    state = { lat: null, msg: '' };

    componentDidMount(prevProps) {
        console.log(prevProps)
        console.log('componentDidMount')

        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                console.log(err);
                this.setState({ msg: err.message });
            }
        );
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState)
        console.log('componentDidUpdate')
    }

    render() {
        return (
            <>
                {this.state.lat && <h3>latitude : {this.state.lat}</h3>}
                {this.state.msg && <h3>Erros  : {this.state.msg}</h3>}
            </>
        )
    }
}

export default AppClass;