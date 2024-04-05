import Input from "../components/Input";

function KullaniciEkle(){
    return(
        <div className="container">
        <div className="row">
                <div className="col-3"></div>
                <div
                style={{
                    border:'4px solid #F2C18D'
                }}
                className="col-6 p-4 mt-5 rounded-4">
                        <div className="row mt-4 text-center">
                            <h1> Kullanıcı Ekle </h1>
                        </div>
                        <div className="row mt-2 p3">
                            <Input type='text'/>
                        </div>
                        <div className="row mt-2 p3">
                            <Input type='password'/>
                        </div>
                        <div className="row mt-2 p3">
                            <Input type='email' />
                        </div>                                
                        <div className="row mt-2 p3">
                            <button>Kaydet</button>
                        </div>   
                </div>
                <div className="col-3"></div>                            
        </div>
   </div>
    )
}
export default KullaniciEkle;