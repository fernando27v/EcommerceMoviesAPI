const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")


    const msg = {
      to: "fernandovale3004@gmail.com", 
      from: 'Cinéma á la carte <cinemaalacarte0@gmail.com>', 
      subject: 'Please, change your password',
      html: `<html>
      <head>
        <style type="text/css">
          .ExternalClass,.ExternalClass div,.ExternalClass font,.ExternalClass p,.ExternalClass span,.ExternalClass td,img {line-height: 100%;}#outlook a {padding: 0;}.ExternalClass,.ReadMsgBody {width: 100%;}a,blockquote,body,li,p,table,td {-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;}table,td {mso-table-lspace: 0;mso-table-rspace: 0;}img {-ms-interpolation-mode: bicubic;border: 0;height: auto;outline: 0;text-decoration: none;}table {border-collapse: collapse !important;}#bodyCell,#bodyTable,body {height: 100% !important;margin: 0;padding: 0;font-family: ProximaNova, sans-serif;}#bodyCell {padding: 20px;}#bodyTable {width: 600px;}@font-face {font-family: ProximaNova;src: url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-regular-webfont-webfont.eot);src: url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-regular-webfont-webfont.eot?#iefix)format("embedded-opentype"),url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-regular-webfont-webfont.woff) format("woff");font-weight: 400;font-style: normal;}@font-face {font-family: ProximaNova;src: url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-semibold-webfont-webfont.eot);src: url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-semibold-webfont-webfont.eot?#iefix)format("embedded-opentype"),url(https://cdn.auth0.com/fonts/proxima-nova/proximanova-semibold-webfont-webfont.woff) format("woff");font-weight: 600;font-style: normal;}@media only screen and (max-width: 480px) {#bodyTable,body {width: 100% !important;}a,blockquote,body,li,p,table,td {-webkit-text-size-adjust: none !important;}body {min-width: 100% !important;}#bodyTable {max-width: 600px !important;}#signIn {max-width: 280px !important;}}
        </style>
      </head>
      <body>
        <center>
          <table
            style='width: 600px;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;margin: 0;padding: 0;font-family: "ProximaNova", sans-serif;border-collapse: collapse !important;height: 100% !important;'
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            height="100%"
            width="100%"
            id="bodyTable"
          >
            <tr>
              <td
                align="center"
                valign="top"
                id="bodyCell"
                style='-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;margin: 0;padding: 20px;font-family: "ProximaNova", sans-serif;height: 100% !important;'
              >
                <div class="main">
                  <p
                    style="text-align: center;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%; margin-bottom: 30px;"
                  >
                    <img
                      src="https://www.linkpicture.com/q/Cinema.jpg"
                      width="50"
                      alt="Your logo goes here"
                      style="-ms-interpolation-mode: bicubic;border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;"
                    />
                  </p>
    
                  <h1>Please, change your password</h1>
    
                  <p>Your password has been reset.</p>
    
                  <p>
                  If you want to continue enjoying your movies, 
                  please go to the following link and then click on "Don't remember your password?, 
                  follow the steps and then your new password will be established 
                  <p><strong><a href="https://bold-art-9172.us.auth0.com/login?state=hKFo2SB0Y1Fob1BWR25NVkVLQ1dEZWo3MGRlWDdHVzZxeERKaKFupWxvZ2luo3RpZNkgNUZSSTgycHd1bXkwQVBXS2hneXZVUWV5cnV3SmQ1bl-jY2lk2SAzaWdtazNTSXRvMDVnR29wMTc4ZGU3Z3pRT095UHJtYw&client=3igmk3SIto05gGop178de7gzQOOyPrmc&protocol=oauth2&redirect_uri=https%3A%2F%2Fcinema-a-la-carte.vercel.app&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=TVNsWGJyLjFkSXYyRFpId1A2NE5pLmJLOThWU0lLLmZuclljN1Zid0YyUA%3D%3D&code_challenge=ZXI-0j7qdwZnuUBpG3cmrWFzDmdlAvuhBlKqqxJZ2es&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS45LjAifQ%3D%3D">Click here</a></strong></p>
                  </p>
    
                  <br />
                  Thanks!
                  <br />
    
                  <strong>Cinéma á la carte</strong>
    
                  <br /><br />
                  <hr style="border: 2px solid #EAEEF3; border-bottom: 0; margin: 20px 0;" />
                  <p style="text-align: center;color: #A9B3BC;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;">
                  </p>
                </div>
              </td>
            </tr>
          </table>
        </center>
      </body>
    </html>`,
    }

    sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode)
    console.log(response[0].headers)
  })
  .catch((error) => {
    console.error(error)
  })