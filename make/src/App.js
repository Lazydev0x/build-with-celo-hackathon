import {useState}  from "react";
import './App.css';
import FormInput from './components/FormInput';
import Modal from "./components/Modal";

const App = () => {
  const [values, setValues] = useState({
    
    Firstname:"",
    Lastname:"",
    EmailAddress:"",
    phonenumber:"",
    Deliverydetails:"",
    Country:"",
    State:"",
    Address:"",
    City:"",
  });

  const inputs = [
    {
      id: 1,
      name: "First name",
      type: "text",
      placholder: "First name",
      errorMessage:"name should be 3-16 characters and must not contain any special character!",
      label: "Firstname",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    
    {
      id: 2,
      name: "Last name",
      type: "text",
      placholder: "Last name",
      errorMessage:"name should be 3-16 characters and must not contain any special character!",
      label: "Last name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "Email",
      type: "email",
      placholder: "Email",
      errorMessage:"It should be valid email",
      label: "Email",
      required: true,
    },

    {
      id: 4,
      name: "Phone number",
      type: "text",
      placholder: "Phone number",
      errorMessage:"",
      label: "Phone number"
    },
    {
      id: 5,
      name: "Delivery details",
      type: "text",
      placholder: "Delivery details",
      errorMessage:"",
      label: "Delivery details"
    },
    {
      id: 6,
      name: "Country",
      type: "country",
      placholder: "Country",
      errorMessage:"",
      label: "Country"
    },
    {
      id: 7,
      name: "State",
      type: "text",
      placholder: "State",
      errorMessage:"",
      label: "State"
    },
    {
      id: 8,
      name: "Address",
      type: "text",
      placholder: "Address",
      errorMessage:"",
      label: "Address"
    },
    {
      id: 9,
      name: "City",
      type: "text",
      placholder: "City",
      errorMessage:"",
      label: "City"
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values,[e.targer.name]: e.target.value})
  };

console.log(values);
const [openModal, setOpenModal] =useState(false);
  return (
 <div className='app'>
  <form onSubmit ={handleSubmit}>
  <h1>Make Payment Gateway</h1>
    {inputs.map ((input) => (
      <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
    ))}
    <button className="openModalBtn" onClick={() => { setOpenModal(true)}}>Pay Now</button>
    {openModal && <Modal closeModal={setOpenModal} />}
   </form>
  </div>

    ); 

};

export default App;