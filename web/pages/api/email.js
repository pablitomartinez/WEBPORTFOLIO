// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
"use server";
import { transporter, mailOptions } from "../../src/app/config/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
  email: "Email:",
  asunto: "Subject:",
  mensaje: "Message:",
};

// generador de template
const generateEmailTemplate = (data) => {
  const stringData = Object.entries(data).reduce((str, [key, value]) => {
    return (str += `${CONTACT_MESSAGE_FIELDS[key]}: ${value} \n \n`);
  }, "");
  // console.log(stringData);
  // datos html
  const htmlData = Object.entries(data).reduce(
    (str, [key, value]) =>
      (str += `<h1>${CONTACT_MESSAGE_FIELDS[key]}<h1><p>${value}</p>`),
    ""
  );
  console.log(stringData);
  return {
    text: stringData,
    html: `<!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mensaje Recibido</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
  
        .container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          width: 80%;
          max-width: 600px;
          text-align: center;
        }
  
        h1 {
          color: #333;
        }
  
        p {
          color: #555;
        }
  
        .info-container {
          text-align: left;
          margin-top: 20px;
        }
  
        .info-label {
          font-weight: bold;
        }
  
        .info-value {
          margin-bottom: 10px;
        }
      </style>
    </head>
    <body>
      <div className="container">
        <h1>M-M Tech recibio un Mensaje</h1>
        <p>Has recibido un nuevo mensaje. Aquí están los detalles:</p>
  
        <div className="info-container">
          <!-- <div className="info-label">De:</div>
          <div className="info-value">{{email}}</div>
  
          <div className="info-label">Asunto:</div>
          <div className="info-value">{{asunto}}</div>
  
          <div className="info-label">Mensaje:</div>
          <div className="info-value">{{mensaje}}</div> -->
          ${htmlData}
        </div>
      </div>
    </body>
  </html>
  `,
  };
};

// controlador de contact

const handler = async (req, res) => {
  // si es POST
  if (req.method === "POST") {
    const data = req.body;
    // si todos los campos estan completos
    if (!data.email || !data.asunto || !data.mensaje) {
      return res.status(400).json({ message: "Bad request" });
    } // si todo esta bien enviamos info
    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailTemplate(data),
        asunto: data.asunto,
      });
      // si todo sale bien
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad requestsssssss" });
};

export default handler;
