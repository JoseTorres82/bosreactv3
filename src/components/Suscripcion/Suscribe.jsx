import React from "react";
import { SuscribeStyled } from "./SuscribeStyles";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Suscribe = () => {
  const validateForm = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Este campo es obligatorio";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.email = "Ingrese una dirección de correo electrónico válida";
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {

    setSubmitting(true);

  //falta logica de suscribir
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
    }, 1000); // Simula una respuesta exitosa después de 1 segundo

  };

  return (
    <SuscribeStyled>
      <div className="section-newsletter-home">
        <div className="newsletter-container">
          <h2>Recibir todas las ofertas</h2>
          <p className="mb-4">
            ¿Quieres recibir nuestras ofertas? ¡Regístrate ya mismo y comienza a disfrutarlas!
          </p>

          <Formik
            initialValues={{
              email: "",
            }}
            validate={validateForm}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid }) => (
              <Form>
                <div className="input-container">
                  <Field
                    type="email"
                    name="email"
                    className="email-inp"
                    required
                    placeholder="Ingresa tu e-mail"
                  />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting || !isValid}
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </SuscribeStyled>
  );
};

export default Suscribe;
