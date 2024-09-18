import { useForm } from "./hooks/useForm";

export const App = () => {

//model,schema
const varInicial={
  userName:" ",
  email:" ",
  password:"", 
}


//customhooks
const{username,email,password,formState,onInputChange}=useForm(varInicial)

//desestructuracion para guardar los value
//const{username,email,password}=formState

//onsubmit
const onSubmit=(event)=>{
  event.preventDefault()
  console.log(formState)
}

  return (
    <>
    <h1>Formulario y hooks </h1>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">UserName</label>
        <input
          type="text"
          className="form-control"
          name="userName"
          placeholder="Username"
          value={username}
          onChange={onInputChange}
        />
      </div>  

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onInputChange}

        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="email"
          value={email}
          onChange={onInputChange}

        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </>
  );
};
