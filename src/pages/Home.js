import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// alert
import Swal from "sweetalert2";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  const DeleteBtn = (id) => {
    Swal.fire({
      title: "Əminsən?",
      text: "Məhsul silinəcək",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      confirmButtonText: "Silinsin",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((willDelete) => {
      if (willDelete.isConfirmed) {
        axios
          .delete(`https://fakestoreapi.com/products/${id}`)
          .then((response) => {
            console.log(response);
            Swal.fire("Əla!", "Məhsul silindi", "success");
          });
      } else {
        Swal.fire("Məhsul saxlanıldı");
      }
    });
  };

  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title.slice(0, 15)}...</td>
              <td>{item.description.slice(0, 15)}...</td>
              <td>{item.price} $</td>
              <td>
                <Link to={`/details/${item.id}`} className="details">
                  <button
                    className="details"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      width: 150,
                      marginRight: 10,
                      cursor: "pointer",
                    }}
                  >
                    Ətraflı
                  </button>
                </Link>
                <button
                  className="delete"
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    width: 150,
                    cursor: "pointer",
                  }}
                  onClick={() => DeleteBtn(item.id)}
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
