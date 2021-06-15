using EducationPortal.Api.DTO;
using EducationPortal.Api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ServerApp.DataContext;
using ServerApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationPortal.Api.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class UserController : ControllerBase
    {

        private UserManager<Users> _userManager;
        private SignInManager<Users> _signInManager;
        private readonly DatabaseContext _context;

        public UserController(UserManager<Users> UserManager,SignInManager<Users> signInManager, DatabaseContext context)
        {
            _userManager = UserManager;
            _signInManager = signInManager;
            _context = context;
        }

        [HttpPost("register")]
        public  async Task<IActionResult> Register(UsersDTO model)
        {
            var user = new Users
            {
                UserName = model.UserName,
                Email=model.Email,
                FullName=model.FullName,
                UserType=model.UserType
                
                
            };

            var result = await _userManager.CreateAsync(user , model.Password);

            if (result.Succeeded)
            {
                return StatusCode(201);
            }
            return BadRequest(result.Errors);
        }



        [HttpPost("create")]
        public async Task<IActionResult> Create(EducationDTO model)
        {

            var edu = new EducationInfo
            {
                EducationName = model.EducationName,
                CategoryName = model.Category,
                DailyCost = model.DailyCost,
                Educator = model.Educator,
                Quota=model.Quota,
                Time=model.Time


            };
            Console.WriteLine(edu);

            _context.Eduinfo.Add(edu);
            await _context.SaveChangesAsync();

            return Ok();
         
        }

        [HttpPost("createrequest")]
        public async Task<IActionResult> CreateRequest(RequestEdu model)
        {
            //var reqedu = new RequestEdu
            //{
            //    EducationName = model.EducationName,
            //    CategoryName = model.CategoryName,
            //    DailyCost = model.DailyCost,
            //    Educator = model.Educator,
            //    Quota = model.Quota,
            //    Time = model.Time,
            //    StudentId=model.StudentId,
            //    Status=model.Status

            //};


            _context.RequestEduInfo.Add(model);
            await _context.SaveChangesAsync();

            return Ok();

        }
        [HttpGet("GetEducations")]
        public async Task<ActionResult> GetEducations(string username)
        {
            Console.WriteLine(username);

            var p =  _context.Eduinfo.Where(x => x.Educator == username).ToList();
           
            return Ok(p);
        }

        [HttpGet("GetAllEducations")]
        public async Task<ActionResult> GetAllEducations()
        {

            var p = _context.Eduinfo.Select(x=>x).ToList();

            return Ok(p);
        }


        [HttpGet("GetActiveEducations")]
        public async Task<ActionResult> GetActiveEducations()
        {

            var p = _context.RequestEduInfo.Where(x => x.Status == true).ToList();

            return Ok(p);
        }

        [HttpGet("GetRequestedu")]
        public async Task<ActionResult> GetRequestedu(string username)
        {
            Console.WriteLine(username);

            var p = _context.RequestEduInfo.Where(x => x.Educator == username && x.Status==false).ToList();

            return Ok(p);
        }

        [HttpGet("EducationDelete")]
        public async Task<ActionResult> EducationDelete(int id)
        {
            var prod = await _context.Eduinfo.FindAsync(id);
            if (prod == null)
            {
                return NotFound();
            }
            _context.Eduinfo.Remove(prod);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpGet("ActiveeduDelete")]
        public async Task<ActionResult> ActiveeduDelete(int id)
        {
            var prod = await _context.RequestEduInfo.FindAsync(id);
            if (prod == null)
            {
                return NotFound();
            }
            _context.RequestEduInfo.Remove(prod);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpGet("AcceptRequest")]
        public async Task<ActionResult> AcceptRequest(int id)
        {
            var item =  _context.RequestEduInfo.First(x => x.Id == id);
            item.Status = true;
            if (item == null)
            {
                return NotFound();
            }
            _context.RequestEduInfo.Update(item);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDTO model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);

            if (user == null)
            {
                return BadRequest(new { message = "username is incorrect" });
            }
            var result = await _signInManager.CheckPasswordSignInAsync(user, model.Password,false);

            if (result.Succeeded)
            {
                return Ok(user);
            }

            return Unauthorized();
        }

    }
}
