using Microsoft.AspNetCore.Mvc;
using PortfolioAPI.Models;
using PortfolioAPI.Services;
using System.ComponentModel.DataAnnotations;

namespace PortfolioAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class ContactController : ControllerBase
    {
        private readonly EmailService _emailService;

        public ContactController(EmailService emailService)
        {
            _emailService = emailService;
        }

        /// <summary>
        /// Send contact form email
        /// </summary>
        /// <param name="request">Contact form data</param>
        /// <returns>Success or error message</returns>
        [HttpPost]
        [ProducesResponseType(200, Type = typeof(object))]
        [ProducesResponseType(400, Type = typeof(object))]
        [ProducesResponseType(500, Type = typeof(object))]
        public async Task<IActionResult> SendContact([FromBody] ContactRequest request)
        {
            if (string.IsNullOrEmpty(request.Name) || 
                string.IsNullOrEmpty(request.Email) || 
                string.IsNullOrEmpty(request.Message))
            {
                return BadRequest(new { message = "All fields are required" });
            }

            var success = await _emailService.SendContactEmailAsync(request);

            if (success)
            {
                return Ok(new { message = "Email sent successfully!" });
            }
            else
            {
                return StatusCode(500, new { message = "Failed to send email" });
            }
        }
    }
}