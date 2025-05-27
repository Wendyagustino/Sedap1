export default function ResponsiveWidth(){
    return (
        <div className="mb-4">
            <p>
                Coba lakukan **zoom in/zoom out** atau ubah ukuran layar. Perhatikan bagaimana posisi kolom akan menyesuaikan secara responsif:<br/> <br/> 
            </p>
            <p>
                <strong>md:w-1/2</strong> → Saat layar mencapai ukuran tablet (md: 768px) atau lebih besar, setiap kolom akan memiliki lebar 50%.
            </p>
            <p>
                <strong>md:flex-row</strong> pada div parent membuat dua kolom ini sejajar secara horizontal pada layar tablet ke atas,<br/> 
                sedangkan pada layar lebih kecil (mobile), kolom akan tersusun vertikal secara default (`flex-col`).
            </p>
            
            <div className="flex flex-col md:flex-row mb-4">
                <div className="bg-red-400 w-full md:w-1/2 p-4">Kolom 1</div>
                <div className="bg-blue-400 w-full md:w-1/2 p-4">Kolom 2</div>
            </div>
        </div>
    )
}