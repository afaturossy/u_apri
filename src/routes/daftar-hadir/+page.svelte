<script>
    export let data
    console.log(data)

    function sortNama() {
        const a = data.hadir.sort((a, b) => {
            if (a.nama < b.nama) {
                return -1;
            }
            if (a.nama > b.nama) {
                return 1;
            }
            return 0;
        });

        data.hadir = a
    }

    function sortID() {
        const a = data.hadir.sort((a, b) => a.id - b.id);
        data.hadir = a
    }

    // ---- Handle download
    function convertToCSV(data) {
        const header = Object.keys(data[0]).join(',');
        const rows = data.map(item => Object.values(item).join(','));
        return [header, ...rows].join('\n');
    }
    function downloadCSV() {
        const csvData = convertToCSV(data.hadir);

        // Buat elemen <a> untuk mengunduh file CSV
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.csv';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    }

</script>

<div class="cont">
    <h1>DAFTAR HADIR</h1>
    <div>
        <button on:click={downloadCSV}> download CSV</button>
        <div style="margin-top: 1rem">
            <button on:click={sortID}>sort ID</button>
            <button on:click={sortNama}>sort Nama</button>
        </div>
    </div>
    <div style="display: flex; justify-content: center">
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Hadir</th>
                <th>Jumlah</th>
            </tr>
            </thead>
            <tbody>
            {#each data.hadir as item (item.id)}
                <tr>
                    <td>{item.id}</td>
                    <td>{item.nama}</td>
                    <td>{item.hadir ? 'Ya' : 'Tidak'}</td>
                    <td>{item.jumlah}</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>

</div>

<style>
    .cont {
        background-color: white;
        min-height: 100vh;
        padding: 5rem 2px 2px 2px;
        text-align: center;
    }

    table {
        border-collapse: collapse;
        margin: 1rem;
        width: 50%;
    }

    th, td {
        border: 2px solid #a29f9f;
        padding: 8px;
        text-align: center;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    @media (max-width: 768px) {
        table {
            width: 100%; /* Lebar penuh untuk layar ponsel dengan lebar maksimum 768px */
        }
    }
</style>