using Microsoft.EntityFrameworkCore.Migrations;

namespace album_collection.Migrations
{
    public partial class artistData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Artists",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    ImageName = table.Column<string>(nullable: true),
                    Age = table.Column<int>(nullable: false),
                    HomeTown = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Artists", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Artists",
                columns: new[] { "Id", "Age", "HomeTown", "ImageName", "Name" },
                values: new object[] { 1, 55, "Alexandria", "image", "The Doors" });

            migrationBuilder.InsertData(
                table: "Artists",
                columns: new[] { "Id", "Age", "HomeTown", "ImageName", "Name" },
                values: new object[] { 2, 58, "New Jersey", "image", "Bon Jovi" });

            migrationBuilder.InsertData(
                table: "Artists",
                columns: new[] { "Id", "Age", "HomeTown", "ImageName", "Name" },
                values: new object[] { 3, 39, "Coral Gables", "image", "Sonic Youth" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Artists");
        }
    }
}
