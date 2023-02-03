import Axios from 'axios';
import React, {useState} from 'react'

const AddtoCart = () => {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [cashapp, setCashapp] = useState("");
    
    const [email, setEmail] = useState("");
    const [studentList, setStudentList] = useState([]);
    const [btcaddress, setbitcoinAddress] = useState("");
    const addStudent = () => {
      Axios.post('http://localhost:3001/create', {
        name:name, cashapp:cashapp, email:email,course:course, btcaddress:btcaddress
      }).then(() => {
        setStudentList([
          ...studentList, {
            name:name,
            cashapp:cashapp,
            email:email,
            course:course,
            btcaddress:btcaddress,
          },
        ]);
      });
    };
      //const pickCourse = (coursePicked) => {
            //setCourse(coursePicked);
            //console.log(course);
          //} 
     // const clickHandler = event => {
       // orderDetails();
        //pickCourse();
     // } 
        
  return (
    <div>
    <label>Name:</label>
    <input type="text"
    onChange={(e) => {
      setName(e.target.value);
    }}
    />
    <label>Cashapp:</label>
    <input type="text"  onChange={(e) => {
      setCashapp(e.target.value);
    }}/>
     <label>Email:</label>
     <input type="text"  onChange={(e) => {
      setEmail(e.target.value);
    }}/>

    {   // <label for="course">Course</label>

    /*<select onChange={(e) => pickCourse(e.target.value)}
    //value={course}
     //</div>id="coursename" name="course">
      <//option value="bnb">BNB</option>
      //<option value="c++">C++</option>
      //<option value="python">Python</option>
      //<option value="golang">Golang</option>
      //<option value="bitcoin">Bitcoin</option>
      //<option value="react">NodeJS</option>

  //</div></select>*/}
         <label>Course:</label>
    <input type="text"  onChange={(e) => {
      setCourse(e.target.value);
    }}/>
    <label>Bitcoin Address:</label>
    <input type="text"  onChange={(e) => {
      setbitcoinAddress(e.target.value);
    }}/>
    <button onClick={addStudent} type="submit" value="Submit">Submit</button>
    
    </div>
    )
}

export default AddtoCart;
