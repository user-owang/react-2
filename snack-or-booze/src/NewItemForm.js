import React, {useEffect, useState} from "react";
import { Form, FormGroup, Label, Input, Button, FormFeedback } from "reactstrap";
import { } from "react-router-dom";
import SnackOrBoozeApi from "./Api";
import Axios from "axios";

function NewItemForm({drinks, snacks}){
    const [formData, setFormData] = useState({
      category: '',
      name: '',
      description: '',
      recipe: '',
      serve: ''
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
    async function handleSubmit(e){
      e.preventDefault();
      if(new Set(formData.values().has(""))){
        alert('Please ensure there are no blanks')
      }
      let submitData = {
        id: formData.name.toLowerCase().replace(" ", "-"),
        name: formData.name,
        description: formData.description,
        recipe: formData.recipe,
        serve: formData.serve
      }
      SnackOrBoozeApi.createItem(submitData, formData.category)
    }
    let feedback = <FormFeedback></FormFeedback>
    useEffect(() => {
      let id = formData.name.toLowerCase().replace(" ", "-")
      let item = null
      if(formData.category === 'drinks'){
        item = drinks.find(item => item.id === id)
      }
      if(formData.category === 'snacks'){
        item = snacks.find(item => item.id === id)
      }
      if(item){
        feedback = (<FormFeedback invalid>Item name already exists!</FormFeedback>)
      }
    }, [formData.name,formData.category])
  return(
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='category'>
          Category
        </Label>
        <Input
          id='category'
          name='category'
          type='select'
          value={formData.category}
          onChange={handleChange}
        >
          <option value='' disabled selected>Select a category</option>
          <option value='drinks'>Drink</option>
          <option value='snacks'>Snack</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='name'>
          Item Name
        </Label>
        <Input
          id='name'
          name='name'
          type='text'
          value={formData.name}
          onChange={handleChange}
          placeholder='Name'
        />
        {feedback}
      </FormGroup>
      <FormGroup>
        <Label for='description'>
          Description
        </Label>
        <Input
          id='description'
          name='description'
          type='textarea'
          value={formData.description}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='recipe'>
          Recipe
        </Label>
        <Input
          id='recipe'
          name='recipe'
          type='textarea'
          value={formData.recipe}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='serve'>
          Serving Instructions
        </Label>
        <Input
          id='serve'
          name='serve'
          type='textarea'
          value={formData.serve}
          onChange={handleChange}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default NewItemForm