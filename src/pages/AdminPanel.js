import Button from "../components/Button";

function AdminPanel(){
    const ozelButtonUrunekle = ()=>{
        return <Button   text='Ürün Ekle'  url='/urun-ekle'/>
    }
    return(
       <div className="container">
            <div className="row">
                    <div className="col-4"></div>
                    <div
                    style={{
                        border:'4px solid #F2C18D'
                    }}
                    className="col-4 p-4 mt-5 rounded-4">
                            <div className="row mt-4 text-center">
                                <h1> Admin Panel </h1>
                            </div>
                            <div className="row mt-2 p3">
                                <Button text='Kullanıcı Ekle' url='/kullanici-ekle'/>
                            </div>
                            <div className="row mt-2 p3">
                                <Button text='Kullanıcı Listesi' url='/kullanici-listesi'/>
                            </div>
                            <div className="row mt-2 p3">
                                {ozelButtonUrunekle()}       
                            </div>                                
                            <div className="row mt-2 p3">
                                <Button text='Ürün Listesi'  url='/urun-listesi'/>
                            </div>   
                    </div>
                    <div className="col-4"></div>                            
            </div>
       </div>
    )
}

export default AdminPanel;