using System.ComponentModel.DataAnnotations;

namespace WebFormApi.Models
{
    public class ContactFormDomainEntity
    {
        [Required(ErrorMessage = "First name is required")]
        [StringLength(50, ErrorMessage = "First name cannot exceed 50 characters")]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email address")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Phone number is required")]
        [Phone(ErrorMessage = "Invalid phone number")]
        public string Phone { get; set; } = string.Empty;

        [Required(ErrorMessage = "Message is required")]
        [StringLength(1000, MinimumLength = 10, ErrorMessage = "Message must be between 10 and 1000 characters")]
        public string Message { get; set; } = string.Empty;
    }
}