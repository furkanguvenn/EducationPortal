using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationPortal.Api.DTO
{
    public class UsersDTO
    {
        public string FullName { get; set; }

        public string UserName { get; set; }
        public string Password { get; set; }

        public string Email { get; set; }
        public string UserType { get; set; }



    }
}
