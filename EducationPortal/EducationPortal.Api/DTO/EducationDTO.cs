using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationPortal.Api.DTO
{
    public class EducationDTO
    {

        public string EducationName { get; set; }
        public string Educator { get; set; }
        public string Category { get; set; }
        public int Quota { get; set; }
        public int DailyCost { get; set; }
        public int Time { get; set; }
    }
}
