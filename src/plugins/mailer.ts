import type { MailerConfig } from "@dzangolab/fastify-mailer";
import { FastifyInstance } from "fastify";
import mjml2html from "mjml";

const mailerConfig: MailerConfig = {
  defaults: {
    from: {
      address: `<${process.env.MAILER_USER}>`,
      name: "JogjaCode Support",
    },
  },
  test: {
    enabled: true,
    path: "/test/email",
    to: "miqbalalhabib@gmail.com",
  },
  templating: {
    templateFolder: "mjml/templates",
  },
  templateData: {
    baseCDNUrl: "http://localhost:5000/",
  },
  transport: {
    auth: {
      pass: process.env.MAILER_PASSWORD,
      user: process.env.MAILER_USER,
    },
    host: "mail.jogjacode.id",
    port: 465,
    requireTLS: true,
    secure: true,
  },
};

async function sendSMTPEmail(
  app: FastifyInstance,
  to: string,
  subject: string,
  file?: Buffer<ArrayBufferLike>,
  contentHeader?: string,
  contentText?: string,
  filename?: string,
) {
  const { mailer } = app

  const html = mjml2html(
    `<mjml>
      <mj-head>
        <mj-attributes>
          <mj-text align="center" color="#555" />
        </mj-attributes>
      </mj-head>
      <mj-body background-color="#eee">
        <mj-section background-color="#fff">
          <mj-column>
            <mj-text align="center">
              <h2>${contentHeader}</h2>
            </mj-text>
            <mj-text>
                ${contentText}
            </mj-text>
          </mj-column>  
        </mj-section>
      </mj-body>
    </mjml>`,
  );

  mailer.sendMail(
    {
      to,
      subject,
      html: html.html,

      attachments: file ? 
      [
        {
          filename: filename,
          content: file,
        }
      ] : [],
    },
    (error: unknown, info: { from: unknown; to: unknown }) => {
      if (error) {
        /* eslint-disable-next-line unicorn/consistent-destructuring */
        app.log.error(error);

        return error
      }

      return info
    }
  )
}

export {
  mailerConfig,
  sendSMTPEmail,
};