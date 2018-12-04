import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const divStyle = {
    marginLeft: '15px',
    width:'100px',
    marginTop:'15px'
  }
class SimpleSelect extends React.Component {
    state = {
        age: '',
        name: 'hai',
        labelWidth: 0,
    };


    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <FormControl
                style={divStyle} >
                {/* <InputLabel htmlFor="age-simple">Sort</InputLabel> */}
                <Select
                    value={this.state.Sort}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'Sort',
                    }}
                >
                    <MenuItem value="new">
                        <em>New</em>
                    </MenuItem>
                    <MenuItem value={'day'}>Day</MenuItem>
                    <MenuItem value={'week'}>Week</MenuItem>
                    <MenuItem value={'month'}>Month</MenuItem>
                    <MenuItem value={'year'}>Year</MenuItem>
                    <MenuItem value={'ever'}>Ever</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

SimpleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default SimpleSelect;
