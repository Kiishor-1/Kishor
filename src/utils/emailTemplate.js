export const generateEmailTemplate = (name, email, msg, year) => {
    // Replace new lines with <br /> tags for HTML formatting
    const formattedMessage = msg.replace(/\n/g, '<br />');
  
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Email</title>
        <style>
            .email-wrapper {
                font-family: 'Arial', sans-serif;
                max-width: 600px;
                margin: auto;
                border: 1px solid #e0e0e0;
                border-radius: 10px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                background-color: #ffffff;
            }
            
            .email-header {
                background-color: #4a90e2;
                color: #ffffff;
                padding: 20px;
                text-align: center;
                border-radius: 10px 10px 0 0;
            }
            
            .email-header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: bold;
            }
            
            .email-body {
                padding: 20px;
                background-color: #f9f9f9;
            }
            
            .email-body h2 {
                color: #333333;
                font-size: 18px;
                margin-bottom: 10px;
            }
            
            .email-body p {
                color: #666666;
                font-size: 16px;
                line-height: 1.5;
            }
            
            .divider {
                border: 0;
                border-top: 1px solid #eeeeee;
                margin: 20px 0;
            }
            
            .message {
                background-color: #f2f2f2;
                padding: 15px;
                border-radius: 8px;
                color: #333333;
                white-space: pre-line; /* preserve line breaks */
            }
            
            .email-footer {
                text-align: center;
                padding: 15px;
                background-color: #f2f2f2;
                border-radius: 0 0 10px 10px;
                color: #999999;
            }
            
            .reply-info {
                margin-top: 5px;
            }
        </style>
    </head>
    
    <body>
        <div class="email-wrapper">
            <div class="email-header">
                <h1>New Message from ${name}</h1>
            </div>
    
            <div class="email-body">
                <h2>Contact Information</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
    
                <div class="divider"></div>
    
                <h2>Message</h2>
                <p class="message">${formattedMessage}</p>
            </div>
    
            <div class="email-footer">
                <p>&copy; ${year} Your Company. All rights reserved.</p>
                <p class="reply-info">Reply directly to this email to contact ${name}.</p>
            </div>
        </div>
    </body>
    </html>`;
  };
  