using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationPortal.Api.Migrations
{
    public partial class InitialEduRequestupdate1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EduId",
                table: "RequestEduInfo");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "RequestEduInfo",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddColumn<string>(
                name: "StudentName",
                table: "RequestEduInfo",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_RequestEduInfo",
                table: "RequestEduInfo",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_RequestEduInfo",
                table: "RequestEduInfo");

            migrationBuilder.DropColumn(
                name: "StudentName",
                table: "RequestEduInfo");

            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "RequestEduInfo",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .OldAnnotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddColumn<int>(
                name: "EduId",
                table: "RequestEduInfo",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
