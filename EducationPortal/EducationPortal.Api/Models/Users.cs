using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace ServerApp.Models
{

    [Keyless]
    public class Users:IdentityUser<int>
    {
        public int UserId { get; set; } 

        public string FullName { get; set; }

        public string UserType { get; set; }



    }
}