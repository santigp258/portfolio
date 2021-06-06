const mailTemplate = (name) => (
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
.hover-bg-indigo-700:hover {
  background-color: #4338ca !important;
}
.hover-text-black:hover {
  color: #000000 !important;
}
@media (max-width: 600px) {
  .sm-h-32 {
    height: 32px !important;
  }
  .sm-leading-40 {
    line-height: 40px !important;
  }
  .sm-px-16 {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }
  .sm-px-24 {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
  .sm-py-32 {
    padding-top: 32px !important;
    padding-bottom: 32px !important;
  }
  .sm-w-16 {
    width: 16px !important;
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
        <td align="center" class="sm-px-16" style="background-color: #f3f4f6;">
          <table class="sm-w-full" style="width: 600px;" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td class="sm-py-32 sm-px-24" style="padding: 48px; text-align: center;">
                <a href="https://portfolio-santi.herokuapp.com/" style="color: #1d4ed8; text-decoration: none;">
                  <h1><<span>Santiago</span>/></h1>
                </a>
              </td>
            </tr>
            <tr>
              <td style="background-image: url('https://images.unsplash.com/photo-1565932887479-b18108f07ffd?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80'); background-position: top; background-repeat: no-repeat; background-size: cover; border-radius: 4px; text-align: left;">
                <!--[if mso]>
<v:image src="https://images.unsplash.com/photo-1565932887479-b18108f07ffd?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80" xmlns:v="urn:schemas-microsoft-com:vml" style="width:600px;height:400px;" />
<v:rect fill="false" stroke="false" style="position:absolute;width:600px;height:400px;">
<v:textbox inset="0,0,0,0"><div><![endif]-->
                  <div class="sm-h-32" style="line-height: 64px;">&zwnj;</div>
                  <table style="width: 100%;" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td class="sm-w-16" style="width: 48px;"></td>
                      <td>
                        <h1 class="sm-leading-40" style="font-size: 36px; margin: 0; margin-bottom: 16px; color: #ffffff;">
                          Hola, ${name}
                        </h1>
                        <p style="font-size: 18px; line-height: 24px; margin: 0; color: #ffffff;">
                          Es un placer saludarte. Gracias por visitar mi
                          portafolio, será un placer leerte. Además de
                          contactarme, si tienes alguna recomendación o
                          pregunta, lo puedes hacer por cualquiera de mis redes
                          sociales listadas a continuación o en el footer de mi
                          portafolio. ¡Te deseo un buen día!
                        </p>
                        <div class="sm-h-32" style="line-height: 64px;">&zwnj;</div>
                        <div style="line-height: 100%;">
                          <a href="https://portfolio-santi.herokuapp.com/#contact" class="hover-bg-indigo-700" style="background-color: #3730a3; border-radius: 4px; display: inline-block; font-weight: 600; font-size: 16px; padding-top: 16px; padding-bottom: 16px; padding-left: 24px; padding-right: 24px; text-align: center; color: #ffffff; text-decoration: none;">
                            <span style="mso-text-raise: 16px">Portafolio &rarr;</span>
                          </a>
                        </div>
                        <div style="display: flex; justify-content: flex-end; width: 100%;">
                          <ul style="display: flex; font-size: 24px; list-style-type: none;">
                            <li style="margin-right: 8px; width: 44px;">
                              <a href="https://www.facebook.com/blabla258/" rel="noreferrer noopener" target="_blank" class="hover-text-black" style="color: #ffffff;">
                                <img src="https://res.cloudinary.com/dus5lm40j/image/upload/v1619129860/facebook-brands_geqsuq.png" alt="" style="border: 0; line-height: 100%; max-width: 100%; vertical-align: middle;">
                              </a>
                            </li>
                            <li style="margin-right: 8px; width: 44px;">
                              <a href="https://github.com/santigp258" rel="noreferrer noopener" target="_blank" class="hover-text-black" style="color: #ffffff;">
                                <img src="https://res.cloudinary.com/dus5lm40j/image/upload/v1619130925/github-brands_wv02de.png" alt="" style="border: 0; line-height: 100%; max-width: 100%; vertical-align: middle;">
                              </a>
                            </li>
                            <li style="margin-right: 8px; width: 44px;">
                              <a href="https://www.instagram.com/santiago_g258/" rel="noreferrer noopener" target="_blank" class="hover-text-black" style="color: #ffffff;">
                                <img src="https://res.cloudinary.com/dus5lm40j/image/upload/v1619130925/instagram-brands_s5nmzc.png" alt="" style="border: 0; line-height: 100%; max-width: 100%; vertical-align: middle;">
                              </a>
                            </li>
                            <li style="margin-right: 8px; width: 44px;">
                              <a rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/santiago-guerrero-pulgarin-649282207/" class="hover-text-black" style="color: #ffffff;">
                                <img src="https://res.cloudinary.com/dus5lm40j/image/upload/v1619130925/linkedin-brands_ahwrbb.png" alt="" style="border: 0; line-height: 100%; max-width: 100%; vertical-align: middle;">
                              </a>
                            </li>
                            <li style="margin-right: 8px; width: 44px;">
                              <a rel="noreferrer noopener" target="_blank" href="https://api.whatsapp.com/send?phone=573184241938&text=Hola%20soy%20${name}.%20%C2%BFC%C3%B3mo%20est%C3%A1s?" class="hover-text-black" style="color: #ffffff;">
                                <img src="https://res.cloudinary.com/dus5lm40j/image/upload/v1619130925/whatsapp-brands_jprvqo.png" alt="" style="border: 0; line-height: 100%; max-width: 100%; vertical-align: middle;">
                              </a>
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td class="sm-w-16" style="width: 48px;"></td>
                    </tr>
                  </table>
                  <div class="sm-h-32" style="line-height: 64px;">&zwnj;</div>
<!--[if mso]></div></v:textbox></v:rect><![endif]-->
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>


    `)

module.exports = {mailTemplate};