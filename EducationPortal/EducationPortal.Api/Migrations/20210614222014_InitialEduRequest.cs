using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationPortal.Api.Migrations
{
    public partial class InitialEduRequest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RequestEduInfo",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false),
                    EducationName = table.Column<string>(type: "TEXT", nullable: true),
                    Educator = table.Column<string>(type: "TEXT", nullable: true),
                    CategoryName = table.Column<string>(type: "TEXT", nullable: true),
                    Quota = table.Column<int>(type: "INTEGER", nullable: false),
                    DailyCost = table.Column<int>(type: "INTEGER", nullable: false),
                    Time = table.Column<int>(type: "INTEGER", nullable: false),
                    StudentId = table.Column<int>(type: "INTEGER", nullable: false),
                    Status = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RequestEduInfo");
        }
    }
}
