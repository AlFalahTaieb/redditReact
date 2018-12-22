import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const divStyle = {
    marginLeft: '15px',
    width: '100px',
    marginTop: '15px'
}
class Pick extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pick: ''
        }
        this.onChangePick = this.onChangePick.bind(this)
    }

    // componentDidMount() {
    //     this._isMounted = true
    //     const { pick } = this.state
    //     this.setState({ pick: pick })}
    

    onChangePick(event) {
        this.setState({ pick: event.target.value });
    }


    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { pick } = this.state
        console.log(pick)
        return (
            <FormControl
                style={divStyle} >
                {/* <InputLabel htmlFor="age-simple">Sort</InputLabel> */}
                <Select
                    value={this.state.Sort}
                    onChange={this.handleChange}
                >
                    <MenuItem
                        pick={pick}
                        onChange={this.onChangePick}>
                        <em>New</em>
                    </MenuItem>
                    <MenuItem
                        pick={pick}
                        onChange={this.onChangePick}
                    >Year</MenuItem>
                    <MenuItem value={'ever'}>Ever</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

Pick.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Pick;
