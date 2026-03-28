import Form from "./FormComponents/Form";
import FormTitle from "./FormComponents/FormTitle";
import FormLabel from "./FormComponents/FormLabel";
import FormInput from "./FormComponents/FormInput";
import FormSelect from "./FormComponents/FormSelect";
import FormButton from "./FormComponents/FormButton";

// Main component
const EventForm = ({ temas, afterSubmit }) => {
  function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const event = Object.fromEntries(formData);

    afterSubmit(event);
    e.target.reset();
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <FormTitle text="Form to create an event" />

      <FormLabel text="Title" htmlFor="title" />
      <FormInput
        type="text"
        placeholder="Alok concert"
        name="title"
        id="title"
      />

      <FormLabel text="Date" htmlFor="date" />
      <FormInput type="date" name="date" id="date" />

      <FormLabel text="Theme" htmlFor="theme"></FormLabel>
      <FormSelect name="theme" id="theme" options={temas} />

      <FormLabel text="Image" htmlFor="image" />
      <FormInput type="text" placeholder="url" name="image" id="image" />

      <FormButton type="submit" text="Submit" />
    </Form>
  );
};

export default EventForm;
