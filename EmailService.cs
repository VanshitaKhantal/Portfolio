using System.Net;
using System.Net.Mail;
using PortfolioAPI.Models;

namespace PortfolioAPI.Services
{
    public class EmailService
    {
        private readonly IConfiguration _configuration;

        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<bool> SendContactEmailAsync(ContactRequest request)
        {
            try
            {
                var smtpServer = _configuration["Email:SmtpServer"] ?? "smtp.gmail.com";
                var port = int.Parse(_configuration["Email:Port"] ?? "587");
                var username = _configuration["Email:Username"] ?? string.Empty;
                var password = _configuration["Email:Password"] ?? string.Empty;
                var toEmail = _configuration["Email:ToEmail"] ?? string.Empty;

                var smtpClient = new SmtpClient(smtpServer)
                {
                    Port = port,
                    Credentials = new NetworkCredential(username, password),
                    EnableSsl = true,
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(username),
                    Subject = $"Portfolio Contact: Message from {request.Name}",
                    Body = $@"
                        <h3>New Contact Form Submission</h3>
                        <p><strong>Name:</strong> {request.Name}</p>
                        <p><strong>Email:</strong> {request.Email}</p>
                        <p><strong>Message:</strong></p>
                        <p>{request.Message}</p>
                    ",
                    IsBodyHtml = true
                };

                mailMessage.To.Add(toEmail);

                await smtpClient.SendMailAsync(mailMessage);
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error sending email: {ex.Message}");
                return false;
            }
        }
    }
}