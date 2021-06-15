using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ServerApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationPortal.Api.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller
    {


        private readonly UserManager<Users> _userManager;
        private readonly SignInManager<Users> _signManager;
        private readonly IConfiguration _configuration;

        public AuthController(UserManager<Users> UseManage, SignInManager<Users> signInManager, IConfiguration configuration)
        {
            _userManager = UseManage;
            _signManager = signInManager;
            _configuration = configuration;

        }

      
        public IActionResult Index()
        {
            return View();
        }
    }
}
