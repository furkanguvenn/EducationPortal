using EducationPortal.Api.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ServerApp.Models;

namespace ServerApp.DataContext
{
    public class DatabaseContext:IdentityDbContext<Users,Role,int>
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options):base(options){
            
        }

        
        public DbSet<Users> User {get; set;}
        public DbSet<EducationInfo> Eduinfo {get; set;}
        public DbSet<RequestEdu> RequestEduInfo {get; set;}


       
    }
}