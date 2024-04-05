import { useEffect, useState } from "react";
import Button from "../components/Button";
import Product from "../components/Product";

function UrunListesi(){

    const [urunler, setUrunler] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(data=>data.json())
        .then(data=>{
            console.log(data);
            setUrunler(data);
        })
    },[]);

    return(
        <div className="container-fluid">
            <div className="row">
                    <div className="col-2"></div>
                    <div
                    style={{
                        border:'4px solid #F2C18D'
                    }}
                    className="col-8 p-4 mt-5 rounded-4">
                            <div className="row mt-4 text-center">
                                <h1> Ürün Listesi </h1>
                            </div>
                            <div className="row mt-2 p3">
                                {
                                    urunler.map(urun=>{
                                        return <div className="col-4 p-1"> <Product data={urun}/> </div>
                                    })
                                }
                                
                            </div>
                                                        
                            <div className="row mt-2 p3">
                                <Button text='Admin Panel'  url='/admin-panel'/>
                            </div>   
                    </div>
                    <div className="col-2"></div>                            
            </div>
        </div>
    )
}

export default UrunListesi;