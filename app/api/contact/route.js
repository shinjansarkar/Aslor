import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();
    const { fullName, phone, lookingFor, location, powerLoad } = data;

    // Validate inputs
    if (!fullName || !phone) {
      return Response.json({ success: false, error: 'Name and Phone are required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'aslorenterprises@gmail.com', // Sender address
      to: 'aslorenterprises@gmail.com', // Receiver address
      subject: `New Solar Consultation Request: ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
          <h2 style="color: #2E5718; border-bottom: 2px solid #E0ECCA; padding-bottom: 10px;">New Consultation Request</h2>
          <p>A new lead has been submitted from the Aslor Enterprises website.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; width: 40%;">Full Name</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Phone / WhatsApp</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Looking For</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${lookingFor}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Location / City</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${location}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold;">Power Load / Bill</td>
              <td style="padding: 10px; border: 1px solid #e2e8f0;">${powerLoad || 'Not specified'}</td>
            </tr>
          </table>
          
          <p style="margin-top: 20px; font-size: 12px; color: #64748b;">This email was sent automatically from the Aslor Enterprises website contact form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
