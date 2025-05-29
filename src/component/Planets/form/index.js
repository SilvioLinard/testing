import React,{Fragment, useState} from "react";


const initialState ={
    name: '',
    title :'',
    description:'',
    link:'',
    img_Url:''
}
const Form = (props) =>{
    const [fields, setFields] = useState(initialState);

    const handleFieldsChange = (event)=> setFields({
    ...fields,
    [event.currentTarget.name]: event.currentTarget.value
    });
    
    const handleSubmit = (event) => {
        props.addPlanet(fields)
        event.preventDefault();
        setFields(initialState);
    }

    return(
    <Fragment>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Name:</label>
            <input id="title" type="text" name="title" value={fields.title} onChange={handleFieldsChange}/>            
        </div>

        <div>
            <label htmlFor="description">Description:</label>
            <input id="description" type="text" name="description" value={fields.description} onChange={handleFieldsChange}/>            
        </div>

        <div>
            <label htmlFor="link">link:</label>
            <input id="link" type="text" name="link" value={fields.link} onChange={handleFieldsChange}/>            
        </div>

        <div>
            <label htmlFor="img_Url">img_Url:</label>
            <input id="img_Url" type="text" name="img_Url" value={fields.img_Url} onChange={handleFieldsChange}/>            
        </div>
        <br/>
         <input type ="submit"/>
        </form>
    </Fragment>
    )
}

export default Form;