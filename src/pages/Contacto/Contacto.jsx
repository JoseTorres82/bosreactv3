import React, { useState } from "react";
import { ContactoWrapper } from "../../pages/Contacto/Contacto.Styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaMapMarkerAlt, FaPhone, FaEnvelopeOpenText } from "react-icons/fa";
import useModal from "../../hooks/useModal"; // Importa el hook useModal

function ContactoForm() {
  const [fieldsAreEmpty, setFieldsAreEmpty] = useState(false);
  const { isModalOpen, openModal, closeModal } = useModal(); // Obtiene el estado y las funciones para abrir/cerrar el modal

  const validateForm = (values) => {
    const errors = {};

    if (!values.name || !values.email || !values.message) {
      setFieldsAreEmpty(true);
    } else {
      setFieldsAreEmpty(false);
    }

    if (!values.name) {
      errors.name = "Este campo es obligatorio";
    }

    if (!values.email) {
      errors.email = "Este campo es obligatorio";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = "Ingrese una dirección de correo electrónico válida";
    }

    if (Object.keys(errors).length === 0) {
      openModal(); // Abre el modal si no hay errores en el formulario
    }

    return errors;
  };

  return (
    <ContactoWrapper>
      <div className="contact-wrapper animated bounceInUp" id="contacto">
        <div className="contact-form">
          <h3>CONTACTAME</h3>

          <Formik
            initialValues={{
              name: "",
              email: "",
              lastname: "",
              affair: "",
              message: "",
            }}
            validate={validateForm}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              if (Object.keys(validateForm(values)).length === 0) {
                
                openModal();
                resetForm();
              }
              setSubmitting(false);
            }}
          >
            {({ isValid, isSubmitting }) => (
              <Form>
                <p>
                  <label>Nombre</label>
                  <Field type="text" name="name" placeholder="Tu Nombre" />
                  <ErrorMessage name="name" component="div" className="error" />
                </p>
                <p>
                  <label>Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </p>
                <p>
                  <label>Apellido/s</label>
                  <Field
                    type="text"
                    name="lastname"
                    placeholder="Tu Apellido/s"
                  />
                </p>
                <p>
                  <label>Motivo</label>
                  <Field
                    type="text"
                    name="affair"
                    placeholder="Cómo te ayudamos"
                  />
                </p>
                <p className="block">
                  <label>Deja tu mensaje</label>
                  <Field as="textarea" name="message" rows="3" />
                </p>
                <p className="block">
                  {fieldsAreEmpty && (
                    <div className="error">Todos los campos son obligatorios</div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar"}
                  </button>
                </p>
              </Form>
            )}
          </Formik>
        </div>
        <div className="contact-info">
          <ul>
            <h4>Más Información</h4>
            <li>
              <FaMapMarkerAlt />
              Mar del Plata, BsAs. AR.
            </li>
            <li>
              <FaPhone />
              (111) 111 111 111
            </li>
            <li>
              <FaEnvelopeOpenText />
              buenasolas@store.com
            </li>
          </ul>
          <h4>Visítanos</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201170.11282386692!2d-57.76534517719316!3d-38.01718112793278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d94d19d34209%3A0xdd9670804bfed126!2sMar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1692783848496!5m2!1ses!2sar"
            width="300"
            height="250"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Mensaje enviado correctamente</h2>
            <p>Su mensaje se ha enviado con éxito.</p>
            <button onClick={() => closeModal()}>Cerrar</button>
          </div>
        </div>
      )}
    </ContactoWrapper>
  );
}

export default ContactoForm;
