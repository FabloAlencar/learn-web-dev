using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Server.Hello;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json")]
    public class HelloController : ControllerBase
    {
        private readonly ILogger<HelloController> _logger;

        public HelloController(ILogger<HelloController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public HelloResponse GetHelloMessage(HelloRequest helloRequest)
        {
            var response = new HelloResponse($"A lot of message {helloRequest.Name}");
            return response;
        }
    }
}