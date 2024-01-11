import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { addPlace } from "../../../redux/apiCalls";
import app  from "../../Firebase";
import { useState } from "react";
import "./advert.css";

export default function Advert() {
  const _id = useSelector((state)=> state.user.currentUser._id)
  console.log(_id)
  const [inputs ,setInputs] = useState({})
  const [file ,setFile] = useState(null)
  const [cat ,setCat] = useState([])
  const [price ] = useState([])
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInputs((prev)=>{
      return {...prev, [e.target.name]:e.target.value}
    })
  }

  console.log(file)


  const handleCat = (e) => {
    setCat(e.target.value.split(","))
  }
  
  const handleClick = (e) => {
    e.preventDefault()
    const fileName = new Date().getTime() + file.name
    const storage = getStorage(app)
    const storageRef = ref(storage, fileName)

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      }, 
      (error) => {
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const place = {...inputs, img:downloadURL, categories:cat};
          addPlace(place, dispatch)
        });
      }
    );

  }


  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Yeni Yer</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Resim</label>
          <input type="file" id="file"  onChange={(e)=>setFile(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Adı</label>
          <input name="title" type="text" minLength={3} placeholder="Yer Adı" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Açıklama</label>
          <input name="desc" type="text" minLength={3} placeholder="Açıklama" onChange={handleChange}/>
        </div>
        {/* <div className="addProductItem">
          <label>Renk</label>
          <input name="color" type="text" placeholder="Renk" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Beden</label>
          <input name="size" type="text" placeholder="Beden" onChange={handleChange}/>
        </div> */}
        <div className="addProductItem">
          <label>Kategori</label>
          <input type="text" minLength={5} placeholder="Ülke, Şehir" onChange={handleCat}/>
        </div>
        <div className="addProductItem">
          <label>Fiyat</label>
          <input name="price" type="number" minLength={2} placeholder="100 TL" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>İl</label>
          <input name="county" type="text" minLength={3} placeholder="İl" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>İlçe</label>
          <input name="district" type="text" minLength={3} placeholder="İlçe" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>User</label>
          <input name="user" type="text" minLength={3} placeholder="user" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Stok</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Evet</option>
            <option value="false">Hayır</option>
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton">Oluştur</button>
      </form>
    </div>
  );
}