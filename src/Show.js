import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import {testing} from './App.js'

const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-50px',
    marginLeft: '-100px',
    backgroundColor: 'transparant',

    boxShadow: '5px 10px #888888',
    // pading:'50px 40px'
}

class Show extends React.Component {
    
    constructor(props) {
        super(props)

        this.state = {
           id:'id',
           url:'TAIEEEB',
           title:'title'
        }
    }

    // zaka = (id) => {
    //     console.log(id)
    //     return this.setState({
    //         Idr: { id }
    //     })

    // }
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        // console.log(this.item.url)
        return (
            <form>
                <Button variant="contained"
                    color="secondary" onClick={this.handleOpen}>Open Modal</Button>
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    style={styles}
                >
                    <div >
                        <div variant="h2" id="modal-title">
                            {/* <h1>{this.state.url} </h1> <h1> {this.state.id}</h1> */}

                        </div>

                        <Button variant="contained"
                            color="secondary" onClick={this.zaka}>ZAKKAa</Button>

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


// import React from 'react';
// import {testing} from './App.js'

// class Show extends React.Component {
//     componentWillMount() {
//         this.props.testing(this.props.params.id);
//       }
//     render() {
//         const {uniq} =this.props
//         console.log(testing)
//         return (
//             <ul>
//                 <li>{this.props.Table1.id}</li>
//             </ul>
//         )
//     }

// }

// export default Show