import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pesanKhusus: 'Sampurasun lur',
        }

        this.handlePesanHeader = this.handlePesanHeader.bind(this);
        // this.pesanHeader2 = this.pesanHeader2.bind(this);
    }

    handlePesanHeader() {
        alert('Pesan Dari Header')
    }

    pesanHeader2(nilai1, nilai2) {
        // alert(this.state.pesanKhusus)
        alert(nilai1)
        alert(nilai2)
    }

    render() {
        return (
            <div>
                <a href="/" onClick={this.handlePesanHeader}>Klik Header</a>
                <br />
                {/* <a href="/" onClick={this.pesanHeader2}>Klik Header This State</a> */}
                <a href="/" onClick={() => this.pesanHeader2("Dari Render Kelas", "Pesan 2")}>Klik Header This State</a>
            </div>
        )
    }
}

export default Header;