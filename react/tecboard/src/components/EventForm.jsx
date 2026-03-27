import Form from "./FormComponents/Form";
import FormTitle from "./FormComponents/FormTitle";
import FormLabel from "./FormComponents/FormLabel";
import FormInput from "./FormComponents/FormInput";
import FormSelect from "./FormComponents/FormSelect";
import FormButton from "./FormComponents/FormButton";

// Main component
const EventForm = () => {
  return (
    <Form>
      <FormTitle text="Form to create an event" />

      <FormLabel text="Event" htmlForId="event" />
      <FormInput
        type="text"
        placeholder="Alok concert"
        name="event"
        id="event"
      />

      <FormLabel text="Date" htmlForId="date" />
      <FormInput type="datetime-local" name="date" id="date" />

      <FormLabel text="Theme" htmlForId="theme"></FormLabel>
      <FormSelect
        name="theme"
        id="theme"
        options={[
          { id: 1, value: "frontend", label: "FRONT_END" },
          { id: 2, value: "backend", label: "BACK_END" },
          { id: 3, value: "datascience", label: "DATA_SCIENCE" },
          { id: 4, value: "devops", label: "DEV_OPS" },
        ]}
      />

      <FormLabel text="Description" htmlForId="theme-description" />
      <FormInput
        type="text"
        placeholder="Candy house"
        name="theme-description"
        id="theme-description"
      />

      <FormButton type="submit" text="Submit" />
    </Form>
  );
};

export default EventForm;
