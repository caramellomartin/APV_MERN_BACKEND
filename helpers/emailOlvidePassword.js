import nodemailer from "nodemailer";

const emailOlvidePassword = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });
    
    const { email, nombre, token } = datos;

    //Enviar EMAIL
    const info = await transporter.sendMail({
        from: 'APV - Administrador de Pacientes de Veterinaria',
        to: email,
        subject: 'Reestablece tu Password',
        text: 'Reestablece tu Password',
        html: `
            <p>Hola: ${nombre}, has solicitado la restauración de tu password.</p>
            <p>En el siguiente enlace podrás generar tu nueva Password: 
                <a href="${process.env.FRONTEND_URL}/olvidePassword/${token}">Restablecer Password</a>
            </p>
            <p>Si tú no solicitaste una nueva password, puedes ignorar este mensaje y/o contactarte con el equipo de soporte con el siguiente correo: soporte@soporte.com</p>
        
        `
    });

    console.log("Mensaje enviado: %s", info.messageId);
}

export default emailOlvidePassword;