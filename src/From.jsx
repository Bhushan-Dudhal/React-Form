import React from "react";



class From extends React.Component{
    constructor() {
        super();
        this.state = {
            name: "",
            nameerror:false,
            email: "",
            emailerror:false,
            mobile: "",
            mobileerror:false,
            course: "",
            courseerror:false,
            photo: "",
            photoerror:false,
        }
    }
      changeName = (event) => {
        this.setState({
        name:event.target.value,

        })
    }
      changeEmail = (event) => {
          this.setState({
        email:event.target.value,

        })
        }
       changeMobile = (event) => {
          this.setState({
        mobile:event.target.value,

        })
        
    }
    changeCourse = (event) => {
          this.setState({
        course:event.target.value,

        })
        
    }
 changePhoto = (event) => {
          this.setState({
          photo:event.target.files[0].name,

          })
    }
    
    formSubmit = (event) => {
          
          if (this.validation()) {
              
                console.log(`${this.state.name} ${this.state.email} ${this.state.mobile} ${this.state.course} ${this.state.photo}`);
          }
            event.preventDefault()
    }
    
    validation = () => {
        var error = true;
        if (this.state.name == '')
        {
            error = false; this.setState(
                {
                    nameerror:'Name is Empty'
                }
            )
        }
        
        else {
            this.setState(
                {
                 nameerror:'',  
                }
            )
        }


         if (this.state.email == '')
        {
            error = false; this.setState(
                {
                    emailerror:'Email is Empty'
                }
            )
        }
        
        else {
            this.setState(
                {
                 emailerror:'',  
                }
            )
        }



         if (this.state.mobile == '')
        {
            error = false; this.setState(
                {
                    mobileerror:'Mobile  is Empty'
                }
            )
        }
        
        else {
            this.setState(
                {
                 mobileerror:'',  
                }
            )
        }

         if (this.state.course == '')
        {
             error = false;
             this.setState(
                {
                    courseerror:'Course is Empty'
                }
            )
        }
        
        else {
            this.setState(
                {
                 courseerror:'',  
                }
            )
        }


         if (this.state.photo == '')
        {
            error = false; this.setState(
                {
                    photoerror:'Photo is Empty'
                }
            )
        }
        
        else {
            this.setState(
                {
                 photoerror:'',  
                }
            )
        }

        return error
    
    }
    render()
    {
        return (

            <div className="container mt-5">
                <div className="row">
                    <div className="offset-md-4 col-md-4">
                        <div style={{border:'2px solid black',padding:'20px',borderRadius:'2px'}}>
                        <form onSubmit={this.formSubmit}     >
                            <label>Enter Your Name:-</label><br />
                            <input type="text" value={this.state.name} onChange={this.changeName} className="form-control" name="name" /><br />
                            {this.state.nameerror && <p style={{color:'red', marginTop:'-24px'}}>{this.state.nameerror }</p>}

                             <label>Enter Your Email:-</label><br />
                            <input type="email" value={this.state.email} className="form-control" name="email" onChange={this.changeEmail} /><br />
                               {this.state.nameerror && <p style={{color:'red', marginTop:'-24px'}}>{this.state.emailerror }</p>}

                             <label>Enter Your Mobile Number:-</label><br />
                            <input type="number" value={this.state.mobile} name="mobile" onChange={this.changeMobile} className="form-control" /><br />
                               {this.state.nameerror && <p style={{color:'red', marginTop:'-24px'}}>{this.state.mobileerror }</p>}

                            <label>Select Your Course:-</label><br />
                               <select name="course" className="form-control" value={this.state.course}  onChange={this.changeCourse} >
                                <option value=""></option>
                                 <option value="PYTHON">PYTHON</option>
                                  <option value="REACT">REACT</option>
                                   <option value="JAVA">JAVA</option>
                                    <option value="PHP">PHP</option>
                                    <option value="REACT NETIVE">REACT NETIVE</option>

                            </select>
                            <br />
                               {this.state.nameerror && <p style={{color:'red', marginTop:'-24px'}}>{this.state.courseerror }</p>}
                            
                            <label>Upload Your Photo:-</label><br />
                            <input type="file" 
                                onChange={this.changePhoto} className="form-control" name="photo" /><br />
                               {this.state.nameerror && <p style={{color:'red', marginTop:'-24px'}}>{this.state.photoerror }</p>}


                            <input type="submit" value={'SAVE'} className="form-control btn btn-outline-info" />
                            
                             

                             
                            </form>
                            </div>
                    </div>
                </div>
           </div>
           
        )
    }
}

export default From