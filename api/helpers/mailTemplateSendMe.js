const mailTemplateSendMe = (name, email, msg) => (
  `
    <!DOCTYPE html>
    <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <meta charset="utf-8">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
      <!--[if mso]>
        <xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>
        <style>
          td,th,div,p,a,h1,h2,h3,h4,h5,h6 {font-family: "Segoe UI", sans-serif; mso-line-height-rule: exactly;}
        </style>
      <![endif]-->
        <title>Santiago portfolio</title>
        <style>
    @media (max-width: 600px) {
      .sm-leading-32 {
        line-height: 32px !important;
      }
      .sm-px-24 {
        padding-left: 24px !important;
        padding-right: 24px !important;
      }
      .sm-py-32 {
        padding-top: 32px !important;
        padding-bottom: 32px !important;
      }
      .sm-w-full {
        width: 100% !important;
      }
    }
    </style>
    </head>
    <body style="margin: 0; padding: 0; width: 100%; word-break: break-word; -webkit-font-smoothing: antialiased; background-color: #f3f4f6;">
        <div style="display: none;">Santiago | portafolio web&#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &zwnj;
          &#160;&#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &zwnj;
          &#160;&#847; &#847; &#847; &#847; &#847; </div>
      <div role="article" aria-roledescription="email" aria-label="Santiago portfolio" lang="en">
        <table style="font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif; width: 100%;" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td align="center" style="background-color: #f3f4f6;">
              <table class="sm-w-full" style="width: 600px;" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td class="sm-py-32 sm-px-24" style="padding: 48px; text-align: center;">
                    <a href="https://portfolio-santi.herokuapp.com/" style="color: #1d4ed8; text-decoration: none;">
                      <h1><<span>Santiago</span>/></h1>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center" class="sm-px-24">
                    <table style="width: 100%;" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td class="sm-px-24" style="background-color: #111827; border-radius: 4px; font-size: 16px; line-height: 24px; padding: 48px; text-align: left; color: #f3f4f6;">
                          <p>Message from:</p>
                          <p class="sm-leading-32" style="font-weight: 600; font-size: 24px; margin: 0; margin-bottom: 24px; color: #f3f4f6;">
                            ${name}
                          </p>
                          <p style="margin: 0; margin-bottom: 24px;">${email}</p>
                          <table style="width: 100%;" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td style="padding-top: 32px; padding-bottom: 32px;">
                                <div style="background-color: #e5e7eb; height: 1px; line-height: 1px;">
                                  &zwnj;
                                </div>
                              </td>
                            </tr>
                          </table>
                          <p style="margin: 0; margin-bottom: 16px; color: #4f46e5;">${msg}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="height: 48px;"></td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </body>
    </html>
    
    
    `
)

module.exports = { mailTemplateSendMe };