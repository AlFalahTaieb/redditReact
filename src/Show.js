import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const styles = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

}
const backGround ={
    backgroundColor:'red'
}

const showButton = {
    // width:'100px',
    position:'block'

}

class Show extends React.Component {


    
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <form >
                <Button variant="contained" style={showButton}
                    color="secondary" onClick={this.handleOpen}>Open Modal</Button>
                <Modal style={styles}
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                        <div variant="h2">
                            <img src={this.props.url} height="542" width="542" /> <h1> {this.props.title}</h1>
                            <Button variant="contained" color='primary' href={this.props.url} download>Click to download</Button>
                            <Button variant="contained"
                            color="secondary" onClick={this.handleClose}>Close Modal</Button>
                       
                    </div>
                </Modal>
            </form> 
        );
    }
}

Show.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default Show;

