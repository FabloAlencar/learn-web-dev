namespace Server.Hello
{
    public class HelloResponse
    {
        public string Message { get; set; }

        public HelloResponse(string message)
        {
            Message = message;
        }
    }
}