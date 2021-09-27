import React from 'react'

function Navbar(){

    
    return(
        <>

            <br />
            <br />

            <br />
            <pr />
            <div class="row">
                <div class="col">
                </div>
                <div class="col">
                    <div class="card container-fluid">

                        <div class="card text-center">
                            <div class="card-header">
                                <b> Information Form </b>
                            </div>
                        </div>

                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" aria-describedby="" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Institution</label>
                                <input type="text" class="form-control" id="institution" aria-describedby="" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Department</label>
                                <input type="text" class="form-control" id="Dept" aria-describedby="" />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>

                            <div>

                                <button type="submit" class="btn btn-primary"  >SUBMIT</button>
                                <button type="cancel" class="btn btn-success" style ={{marginLeft:"10px"}}>CANCEL</button>
                            </div>


                        </form>
                    </div>


                </div>
                <div class="col">

                </div>
            </div>


        </>

    );

}

export default Navbar;
