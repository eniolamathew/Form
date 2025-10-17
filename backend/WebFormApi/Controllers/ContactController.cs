//using Microsoft.AspNetCore.Mvc;
//using WebFormApi.Classes;
//using WebFormApi.Models;

//namespace WebFormApi.Controllers
//{
//    [ApiController]
//    [Route("api/[controller]")]
//    public class ContactController : ControllerBase
//    {
//        private readonly ILogger<ContactController> _logger;

//        public ContactController(ILogger<ContactController> logger)
//        {
//            _logger = logger;
//        }

//        [HttpPost]
//        public async Task<ActionResult<ApiResponse>> SubmitContactForm([FromBody] ContactFormDomainEntity formData)
//        {
//            try
//            {
//                // Simulate processing delay
//                await Task.Delay(1000);

//                // In a real application, you would save to database, send email, etc.
//                _logger.LogInformation($"Form submitted: {formData.Name} - {formData.Email}");

//                // Simulate successful processing
//                var response = new ApiResponse
//                {
//                    Success = true,
//                    Message = "Thank you for your message! We'll get back to you soon.",
//                    Data = new { submissionId = Guid.NewGuid(), timestamp = DateTime.UtcNow }
//                };

//                return Ok(response);
//            }
//            catch (Exception ex)
//            {
//                _logger.LogError(ex, "Error processing contact form");
//                return StatusCode(500, new ApiResponse
//                {
//                    Success = false,
//                    Message = "An error occurred while processing your request."
//                });
//            }
//        }
//    }
//}




using Microsoft.AspNetCore.Mvc;
using WebFormApi.Classes;
using WebFormApi.Models;

namespace WebFormApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly ILogger<ContactController> _logger;

        public ContactController(ILogger<ContactController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public  async Task<ActionResult<ApiResponse>> SubmitContactForm([FromBody] ContactFormDomainEntity formData)
        {
            try
            {
                // Simulate processing delay
                await Task.Delay(1000);
                // In a real application, you would save to database, send email, etc.
                _logger.LogInformation($"Form submitted: {formData.Name} - {formData.Email}");
                // Simulate successful processing
                var response = new ApiResponse
                {
                    Success = true,
                    Message = "Thank you for your message! We'll get back to you soon.",
                    Data = new { submissionId = Guid.NewGuid(), timestamp = DateTime.UtcNow }
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error processing contact form");
                return StatusCode(500, new ApiResponse
                {
                    Success = false,
                    Message = "An error occurred while processing your request."
                });
            }
        }


    }