using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationPortal.Api.Migrations
{
    public partial class InitialEdu : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Eduinfo",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    EducationName = table.Column<string>(type: "TEXT", nullable: true),
                    Educator = table.Column<string>(type: "TEXT", nullable: true),
                    CategoryName = table.Column<string>(type: "TEXT", nullable: true),
                    Quota = table.Column<int>(type: "INTEGER", nullable: false),
                    DailyCost = table.Column<int>(type: "INTEGER", nullable: false),
                    Time = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Eduinfo", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Eduinfo");
        }
    }
}
