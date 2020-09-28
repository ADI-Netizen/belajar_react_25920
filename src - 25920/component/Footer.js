import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pesanDariState: 'Ini Pesan Dari State',
        }

    }

    ubahDataState(e) {
        e.preventDefault();
        // Perintah untuk merubah nilai di dalam state
        this.setState({ pesanDariState: "Data Telah Dirubah" })
    }

    render() {
        return (
            <div>
                <p>{this.props.pesanDariProps}</p>
                <p>{this.state.pesanDariState}</p>
                <a href="/" onClick={(e) => this.ubahDataState(e)}>Ubah Data</a>
            </div>
        )
    }
}

export default Footer;