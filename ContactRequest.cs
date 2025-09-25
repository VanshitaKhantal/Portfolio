using System.ComponentModel.DataAnnotations;

namespace PortfolioAPI.Models
{
    /// <summary>
    /// Contact form request model
    /// </summary>
    public class ContactRequest
    {
        /// <summary>
        /// Full name of the person
        /// </summary>
        /// <example>John Doe</example>
        [Required]
        public string Name { get; set; } = string.Empty;

        /// <summary>
        /// Email address
        /// </summary>
        /// <example>john.doe@example.com</example>
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        /// <summary>
        /// Message content
        /// </summary>
        /// <example>Hello, I would like to discuss a project with you.</example>
        [Required]
        public string Message { get; set; } = string.Empty;
    }
}