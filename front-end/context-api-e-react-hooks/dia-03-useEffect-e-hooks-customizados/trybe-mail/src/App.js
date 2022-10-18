import { useContext, useEffect } from "react";
import Email from "./components/Email";
import MyContext from "./context/MyContext";


function App() {
  const {
    emailInfo,
    setEmailInfo,
  } = useContext(MyContext);

  const setEmailStatus = (emailId, newStatus) => {
    const updatedMessages = emailInfo.map((currentEmail) => {
      if (currentEmail.id === emailId) {
        return { ...currentEmail, status: newStatus };
      }
      return currentEmail;
    });
    setEmailInfo(updatedMessages)
    console.log(emailInfo)
  }

  return (
    <div className="App">
      {emailInfo.map((element) => {
        return (
          <div key={ element.id } value style={{ backgroundColor: element.status ? 'green' : 'gray' }}>
            <p>{element.title}</p>
            <p>{element.status}</p>
            <button type="button" onClick={() => {setEmailStatus(element.id, 0)}}>Lido</button>
            <button type="button"  onClick={() => {setEmailStatus(element.id, 1)}}>Não Lido</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
