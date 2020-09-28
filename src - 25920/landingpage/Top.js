import React from 'react';

const Top = () => {

    const handlePesan = () => {
        alert('Pesan dari Top')
    }

    function handleNama() {
        alert('tulis nama masing2')
    }

    function duaaaaa(par1, par2, e) {
        e.preventDefault();
        alert("Pesan pertama " + par1 + " & Pesan Kedua " + par2);
    }

    return (
        <div>
            <a href="/" onClick={handlePesan}>Halaman Top</a>
            <br />
            <a href="/" onClick={handleNama}>Nomor 6 Bikin Kaget. Klik di sini</a>
            <br />
            <a href="/" onClick={(e) => duaaaaa("Nilai 1", "Nilai x", e)}>Dua Parameter</a>
        </div >
    )
}

export default Top;