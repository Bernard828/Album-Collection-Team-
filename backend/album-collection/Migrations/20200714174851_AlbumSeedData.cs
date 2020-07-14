using Microsoft.EntityFrameworkCore.Migrations;

namespace album_collection.Migrations
{
    public partial class AlbumSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Album",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    ImageName = table.Column<string>(nullable: true),
                    ReleaseYear = table.Column<int>(nullable: false),
                    RecordLabel = table.Column<string>(nullable: true),
                    Genre = table.Column<string>(nullable: true),
                    ArtistId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Album", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Album_Artists_ArtistId",
                        column: x => x.ArtistId,
                        principalTable: "Artists",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Album",
                columns: new[] { "Id", "ArtistId", "Genre", "ImageName", "Name", "RecordLabel", "ReleaseYear" },
                values: new object[,]
                {
                    { 1, 1, "Rock", "image", "Morrison Hotel", "Elektra Records", 1970 },
                    { 2, 2, "Rock", "image", "Keep the Faith", "Mercury Records", 1992 },
                    { 3, 3, "Rock", "image", "Goo", "GDC Records", 1990 },
                    { 4, 4, "Rock", "image", "Led Zeppelin IV", "Atlantic", 1972 },
                    { 5, 5, "Rock", "image", "Use Your Illusion I", "Atlantic", 1991 },
                    { 6, 5, "Rock", "image", "Use Your Illusion II", "Atlantic", 1991 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Album_ArtistId",
                table: "Album",
                column: "ArtistId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Album");
        }
    }
}
