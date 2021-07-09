import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Images from "./Images";
import ComparisonTable from "./ComparisonTable";
import axios from "axios";

export default function Home() {
  

  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [rows, setRows] = useState([]);

  const getInitialImages = async () => {
    const res1 = await axios.get(
      `https://api.unsplash.com/search/photos?query=random&client_id=${"jvJV8e-Rrz4LVxii6qmj3kCMC207j4BQYw4SaiXDnDA"}`
    );
     const res = res1.data.results.map(obj=> ({ ...obj, active: true }));
    setImages(res);
  };

  const getImages = async () => {
    const res = await axios.get(
      `https://api.unsplash.com/search/photos?query=${searchText}&client_id=${"jvJV8e-Rrz4LVxii6qmj3kCMC207j4BQYw4SaiXDnDA"}`
    );
    //const data = res.json();
    const res2 = res.data.results.map(obj=> ({ ...obj, active: true }));
    setImages(res2);
    // console.log(res.data.results);
  };

  const deleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const deleteRow2 = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const addRow = (id, url, description, likes) => {
    setRows([...rows, { id, url, description, likes }]);
  };

  useEffect(() => {
    getInitialImages();
  }, []);

  const onToggle =(id) =>{
    const abc = images.map((image) => {
      if (image.id === id) {
        return {...image, active: !image.active}
      }
      return image;
    });
    setImages(abc)
  }


  return (
    <div>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        getImages={getImages}
      />
      <Images images={images} addRow={addRow} onToggle={onToggle} deleteRow2={deleteRow2}/>
      {rows.length? <ComparisonTable rows={rows} deleteRow={deleteRow}  onToggle={onToggle}/> : ""}
    </div>
  );
}
