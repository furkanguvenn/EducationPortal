using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationPortal.Api.DTO
{
    public class requestEduDTO
    {
        public string EducationName { get; set; }
        public string Educator { get; set; }
        public string CategoryName { get; set; }
        public int Quota { get; set; }
        public int DailyCost { get; set; }
        public int Time { get; set; }
        public int EduId { get; set; }
        public int StudentId { get; set; }
        public bool Status { get; set; }

    }
}
