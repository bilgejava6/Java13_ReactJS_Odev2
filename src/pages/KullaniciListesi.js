import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Loading from '../components/Loading';
function KullaniciListesi(){

    const [users,setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        fetch('https://randomuser.me/api/?results=5')
        .then(data=> data.json())
        .then(data=>{
            setInterval(()=>{
                setUsers(data.results);
                setIsLoading(false);
            },2000);
            
        })
    },[]);

    const Row = (user)=>{
      return <tr>
                <td>{user.id.value}</td>
                <td>{user.name.first}</td>
                <td>{user.location.city}</td>
                <td>{user.phone}</td>
                <td><img src={user.picture.large}></img></td>
            </tr>;
    }

    

    return(
        <div className="container">
            <div className="row">
                    <div className="col-2"></div>
                    <div
                    style={{
                        border:'4px solid #F2C18D'
                    }}
                    className="col-8 p-4 mt-5 rounded-4">
                            <div className="row mt-4 text-center">
                                <h1> Kullanıcı Listesi </h1>
                            </div>
                            <div className="row mt-2 p3">
                                
                                <table className='table table-hover table-bordered'>
                                    <thead className='table-success'>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Adres</th>
                                            <th>Phone</th>
                                            <th>Photo</th>
                                        </tr>
                                    </thead>
                                     <tbody>
                                        {
                                            isLoading 
                                            ?
                                             <Loading /> 
                                             : null
                                        }
                                        {
                                            users.map((user)=>{  
                                                return  Row(user);
                                            })
                                        }
                                        
                                    </tbody>
                                </table>

                            </div>                             
                            <div className="row mt-2 p3">
                                <Button text='Ana Sayfaya Dön'  url='/admin-panel'/>
                            </div>   
                    </div>
                    <div className="col-2"></div>                            
            </div>
        </div>
    )
}

export default KullaniciListesi;