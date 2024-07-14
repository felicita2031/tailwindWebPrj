import './Card.css'
const Card = () => {
    return (
        <>
            <div className='col-6  p-0 '>
                {/* KART BASLANGIC */}
                <div className="card rounded-4 menu-card  ">

                    <div className=" text-center bg-info rounded-4 d-flex justify-content-center align-items-center" style={{ "height": "100%"}}>
                        <h1>
                            Kahvaltı
                        </h1>
                    </div>
                    <div class="card-body ">
                        <p class="card-text">Yumurta, Zeytin, Peynir, Domates, Salatalık, Reçel, Bal, Tereyağı, Çay.</p>
                    </div>
                </div>
                {/* KART SON  */}
            </div>
            <div className='col-6 p-0 '>
                {/* KART BASLANGIC */}
                <div class="card rounded-4 menu-card">

                    <div className="bg-info rounded-4 d-flex justify-content-center align-items-center" style={{ "height": "100%" }}>
                        <h1 className='text-center'>
                            Akşam
                        </h1>
                    </div>
                    <div class="card-body">
                        <p class="card-text">Yumurta, Zeytin, Peynir, Domates, Salatalık, Reçel, Bal, Tereyağı, Çay.</p>
                    </div>
                </div>
                {/* KART SON  */}
            </div>
        </>
    )
}
export default Card