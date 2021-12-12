// Import Our Components
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";

//==============================================================
import Modal from "./components/Modal";
//==============================================================

// Import Hooks from React
import { useState, useEffect } from "react";

// Import Router 6 Component (Route -> Route, Switch -> Routes)
import { Route, Routes, Link, useNavigate } from "react-router-dom";

/////////////////////////
// Style Object
/////////////////////////
const h1 = {
  textAlign: "center",
  margin: "10px",
};

const button = {
  backgroundColor: "navy",
  display: "block",
  margin: "auto",
};

function App() {
  ///////////////////////////
  // State and Other Variables
  ///////////////////////////

  const navigate = useNavigate();

  const url = "https://project-4-sneakers-app-backend.herokuapp.com/sneakers/";

  // state to hold list of sneakers..  the stgate that holds the array of posts frm the API when we get it
  const [posts, setPosts] = useState([]);

  // an empty sneaker for initializing the create form
  const nullSneaker = {
    brand: "",
    name: "",
    cost: "",
    year: "",
    image: "",
  };

  const [targetSneaker, setTargetSneaker] = useState(nullSneaker);

  //////////////
  // Functions
  //////////////
  // function to get list of sneakers from API
  const getSneakers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  };

  // function to add sneakers
  const addSneakers = async (newSneaker) => {
    console.log("new sneaker:", newSneaker);
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSneaker),
    });

    //update the list of sneakers
    getSneakers();
  };

  // to select a sneaker to edit
  const getTargetSneaker = (sneaker) => {
    setTargetSneaker(sneaker);
    navigate("/edit");
  };

  // update sneaker for our handlesubmit prop
  const updateSneaker = async (sneaker) => {
    await fetch(url + sneaker.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sneaker),
    });

    //update our sneakers
    getSneakers();
  };

  const deleteSneaker = async (sneaker) => {
    await fetch(url + sneaker.id, {
      method: "delete",
    });

    getSneakers();
    navigate("/");
  };
  //////////////
  // useEffects
  //////////////
  useEffect(() => {
    getSneakers();
  }, []);
  //////////////////////////
  // Returned JSX
  //////////////////////////
  //==============================================
  const BUTTON_WRAPPER_STYLES = {
    position: "relative",
    display:"flex",
    margin:"auto",
    justifyContent:"center",
    zIndex: 1,

    //==============================================
  };


  return (
    <div className="App">
      <h1 style={h1}>My Sneakers and Shoes List</h1>
      <Link to="/new">
        <button style={button}>Create New sneaker or Shoe!</button>
      </Link>

      <Routes>
        <Route path="/" element={<AllPosts posts={posts} />} />
        <Route
          path="/post/:id"
          element={
            <SinglePost
              posts={posts}
              edit={getTargetSneaker}
              deleteSneaker={deleteSneaker}
            />
          }
        />
        <Route
          path="/new"
          element={
            <Form
              initialSneaker={nullSneaker}
              handleSubmit={addSneakers}
              buttonLabel="Create Sneaker"
            />
          }
        />
        <Route
          path="/edit"
          element={
            <Form
              initialSneaker={targetSneaker}
              handleSubmit={updateSneaker}
              buttonLabel="Update Sneaker"
            />
          }
        />
      </Routes>
    </div>
  );
}



export default App;
