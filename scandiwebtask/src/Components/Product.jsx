import React from "react";

fetch('https://reqres.in/api/users').then(res=>{

if (res.ok) {
    console.log("success")
} else {
    console.log
    ('not successfull')
}
}
)
.then(data => console.log(data))


const Product=()=>{


return(
<React.Fragment>

<h1>hello this is product page</h1>
<div>

<h2>New product</h2>

<div className="bpc"></div>




</div>











    </React.Fragment>



)





}


export default Product;