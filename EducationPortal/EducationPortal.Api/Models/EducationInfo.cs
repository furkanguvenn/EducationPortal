namespace ServerApp.Models
{
    public class EducationInfo
    {
        public int Id { get; set; }
        public string EducationName { get; set; }
        public string Educator { get; set; }
        public string CategoryName { get; set; }
        public int Quota { get; set; }
        public int DailyCost { get; set; }
        public int Time { get; set; }

    }
}