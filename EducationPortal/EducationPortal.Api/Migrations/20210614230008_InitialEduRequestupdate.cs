using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationPortal.Api.Migrations
{
    public partial class InitialEduRequestupdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "EduId",
                table: "RequestEduInfo",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EduId",
                table: "RequestEduInfo");
        }
    }
}
