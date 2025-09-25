# Portfolio API

.NET 8 Web API for handling portfolio contact form emails.

## Setup

1. **Configure Email Settings:**
   - Update `appsettings.json` with your Gmail credentials
   - Use Gmail App Password (not regular password)

2. **Gmail App Password Setup:**
   - Enable 2-factor authentication on Gmail
   - Go to Google Account > Security > App passwords
   - Generate password for "Mail"
   - Use this 16-character password in appsettings.json

3. **Run the API:**
   ```bash
   cd PortfolioAPI
   dotnet run
   ```

4. **API will run on:** `https://localhost:7001`

## Configuration

Update `appsettings.json`:
```json
{
  "Email": {
    "SmtpServer": "smtp.gmail.com",
    "Port": "587",
    "Username": "your.email@gmail.com",
    "Password": "your_16_character_app_password",
    "ToEmail": "your.email@gmail.com"
  }
}
```

## API Endpoint

**POST** `/api/contact`

Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, this is a test message."
}
```